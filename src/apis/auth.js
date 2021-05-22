import axios from 'axios';
import { requestConfig } from 'apis/config';

const baseUrl = '/api/auth';

export const logInWithCreds = async (userName, password) => {
  const result = await axios.post(`${baseUrl}/sign-in`, {
    id: userName,
    password: password,
  });
  const accessToken = result.data.token;
  const refresh_token = result.data.refresh_token;
  // const refreshToken = response.data.refresh_token;

  requestConfig.headers.Authorization = accessToken;
  requestConfig.headers.refreshToken = refresh_token;
  return result;
};

// export const logInWithToken = async (accessToken) => {
//   const response = await axios.post('/api/users/login-with-token', {
//     accessToken: accessToken,
//   });
//   requestConfig.headers.Authorization = accessToken;
//   return response.data;
// };

export const checkAccessToken = () => {
  return true;
};

export const getAccessToken = () => {
  console.log(
    'requestConfig.headers.Authorization',
    requestConfig.headers.Authorization,
  );
  return requestConfig.headers.Authorization;
};

export const signup = async (data) => {
  return await axios.post(`${baseUrl}/sign-up`, data);
};

export const checkExistEmail = async (data) => {
  return await axios.post(`${baseUrl}/email/is-exists`, data);
};

// access token이 유효한지 체크한다. 맨 처음 사이트 들어왔을때 체크
export const jwtVerify = async () => {
  return await axios.get(`${baseUrl}/jwt-verify`, requestConfig);
};

// refresh token이 유효한지 체크한다. 맨 처음 사이트 들어왔을때 체크
export const refreshVerify = async () => {
  return await axios.get(`${baseUrl}/refresh-verify`, requestConfig);
};

//access token 이 유효하지 않고 refresh token 만 유효할때 사용.
export const reissuanceRefreshVerify = async () => {
  return await axios.get(
    `${baseUrl}/refresh-token`,
    requestConfig.headers.refreshToken,
  );
};

// access token. refresh token 둘다 유효하지 않으면

export const checkPhoneNumber = async (data) => {
  return await axios.post(`${baseUrl}/auth-code`, data);
};
