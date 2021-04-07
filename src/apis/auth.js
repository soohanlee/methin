/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
import axios, { AxiosError, AxiosResponse } from 'axios';

import { ROUTE_PATH } from 'configs/config';
import {
  cleanAllToken,
  getAccessToken,
  getNewAccessToken,
  getPId,
} from 'utils/tokenManager';

import { ResultCode } from './serverResponse';

const originPath = process.env.REACT_APP_DEBUG
  ? 'http://develop.famoz.co.kr'
  : 'http://develop.famoz.co.kr';

// [for hosting server]
const API_ROOT_VDB = `${originPath}/api/vdb/v1`;
// const API_ROOT_OBJECT = `${originPath}/api/designer/v1`;
const API_ROOT_OBJECT = 'http://61.73.79.136:12999/v1';
const API_ROOT_FILE = `${originPath}/storage/v1`;
const API_ROOT_AUTH = `${originPath}/api/auth/v1`;
const API_ROOT_PROJECT = `${originPath}/api/core/v1`;

// [for dev server]
// const API_ROOT_VDB = `${originPath}/vdb/v1`;
// const API_ROOT_OBJECT = `${originPath}/designer/v1`;
// const API_ROOT_FILE = `${originPath}/storage/v1`;
// const API_ROOT_AUTH = `${originPath}/auth/v1`;
// const API_ROOT_PROJECT = `${originPath}/core/v1`;

const ENDPOINTS = {
  vdb: API_ROOT_VDB,
  obd: API_ROOT_OBJECT,
  vdb_file: API_ROOT_FILE,
  project: API_ROOT_PROJECT,
  auth: API_ROOT_AUTH,
};

const invalidLoginSession = async (isNormal) => {
  const { pathname } = window.location;

  if (pathname !== ROUTE_PATH.Auth) {
    if (isNormal) {
      alert('로그인 세션이 만료되어 로그인 페이지로 이동합니다.');
    } else {
      alert('로그인 세션이 유효하지 않아 로그인 페이지로 이동합니다.');
    }

    await cleanAllToken();
    document.location.href = ROUTE_PATH.Auth;
  }
};

const returnResponse = (response) => {
  if (response.data !== undefined) {
    return Promise.resolve(response.data);
  }

  return Promise.reject(response.status);
};

const _request = async (
  endpoint,
  method = 'GET',
  url,
  params,
  data,
  headers,
  sessionKey,
) => {
  const accessToken = await getAccessToken();

  if (sessionKey !== null) {
    headers.Authorization = `Bearer ${sessionKey}`;
  } else if (!sessionKey && accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  return axios
    .request({
      method,
      headers,
      url,
      params,
      data,
      baseURL: ENDPOINTS[endpoint],
      timeout: 20000,
    })
    .then(async (response) => {
      // 서버 통신이 성공하면 일단 여기로 들어옴
      const { code } = response.data;

      if (
        (url !== '/check' && code === 1003) ||
        code === 1004 ||
        code === 1005
      ) {
        const newAccessToken = await getNewAccessToken();

        if (newAccessToken) {
          headers.Authorization = `Bearer ${newAccessToken}`;

          const innerRes = await axios.request({
            method,
            headers,
            url,
            params,
            data,
            baseURL: ENDPOINTS[endpoint],
            timeout: 20000,
          });

          return returnResponse(innerRes);
        }

        await invalidLoginSession(code === 1004);

        return returnResponse(response);
      }

      if (
        url === '/check' &&
        (code === 1001 || code === 1002 || code === 1006)
      ) {
        await invalidLoginSession();
      }

      return returnResponse(response);
    })
    .catch((e) => {
      // 서버 통신이 완전히 실패했을때만 catch로 넘어옴
      return Promise.reject(e.message);
    });
};

const _post = (endpoint, url, value, sessionKey = null, headers = {}) => {
  return _request(endpoint, 'POST', url, {}, value, headers, sessionKey);
};

const _patch = (endpoint, url, value, sessionKey = null, headers = {}) => {
  const data = new URLSearchParams();

  if (value && typeof value === 'object') {
    Object.keys(value).forEach((key) => {
      if (value[key] !== null) {
        data.append(key, value[key]);
      }
    });
  }

  return _request(endpoint, 'PATCH', url, {}, data, headers, sessionKey);
};

const _put = (endpoint, url, value, sessionKey = null, headers = {}) => {
  const data = new URLSearchParams();

  if (value && typeof value === 'object') {
    Object.keys(value).forEach((key) => {
      if (value[key] !== null) {
        data.append(key, value[key]);
      }
    });
  }

  return _request(endpoint, 'PUT', url, {}, data, headers, sessionKey);
};

const _delete = (endpoint, url, value, sessionKey = null, headers = {}) => {
  const data = new URLSearchParams();

  if (value && typeof value === 'object') {
    Object.keys(value).forEach((key) => {
      if (value[key] !== null) {
        data.append(key, value[key]);
      }
    });
  }

  return _request(endpoint, 'DELETE', url, {}, data, headers, sessionKey);
};

const _fetch = (
  endpoint,
  url,
  value,
  sessionKey = null,
  headers = { 'Content-Type': 'application/json' },
) => {
  const requestOptions = {
    method: 'POST',
    headers,
    body: JSON.stringify(value),
  };

  if (sessionKey !== null) {
    requestOptions.headers.Authorization = `Bearer ${sessionKey}`;
  }

  return fetch(`${ENDPOINTS[endpoint]}${url}`, requestOptions).then((res) =>
    res.blob(),
  );
};

const _get = (endpoint, url, value, sessionKey = null, headers = {}) => {
  const params = {};

  if (value && typeof value === 'object') {
    Object.keys(value).forEach((key) => {
      if (value[key] !== null) {
        params[key] = value[key];
      }
    });
  }

  return _request(endpoint, 'GET', url, params, {}, headers, sessionKey);
};

const _putJson = (endpoint, url, value, sessionKey = null, headers = {}) =>
  _request(endpoint, 'PUT', url, {}, value, headers, sessionKey);

export default Object.assign(_request, {
  post: _post,
  get: _get,
  patch: _patch,
  put: _put,
  delete: _delete,
  fetch: _fetch,
  putJson: _putJson,
});
