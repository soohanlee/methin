import axios from 'axios';
import { requestConfig } from 'apis/config';
import { getAccessToken, getRefreshToken } from 'utils/tokenManager';

const baseUrl = '/api/auth';

export const logInWithCreds = async (userName, password) => {
  const result = await axios.post(`${baseUrl}/sign-in`, {
    id: userName,
    password: password,
  });

  return result;
};

export const checkAccessToken = () => {
  return true;
};

export const signup = async (data) => {
  return await axios.post(`${baseUrl}/sign-up`, data);
};

export const checkExistEmail = async (data) => {
  return await axios.post(`${baseUrl}/email/is-exists`, data);
};

// access token이 유효한지 체크한다. 맨 처음 사이트 들어왔을때 체크
export const jwtVerify = async () => {
  return await axios.get(`${baseUrl}/jwt-verify`);
};

export const reissueJwt = async () => {
  return await axios.get(`${baseUrl}/jwt-reissue`);
};

// refresh token이 유효한지 체크한다. 맨 처음 사이트 들어왔을때 체크
export const refreshVerify = async () => {
  return await axios.get(`${baseUrl}/refresh-verify`);
};

//access token 이 유효하지 않고 refresh token 만 유효할때 사용.
export const reissuanceRefreshVerify = async () => {
  return await axios.get(`${baseUrl}/refresh-token`);
};

// access token. refresh token 둘다 유효하지 않으면

export const checkPhoneNumber = async (data) => {
  return await axios.post(`${baseUrl}/auth-code`, data);
};
