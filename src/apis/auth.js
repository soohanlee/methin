import axios from 'axios';
import { requestConfig } from 'apis/config';

const baseUrl = '/api/auth';

export const logInWithCreds = async (userName, password) => {
  const response = await axios.post(`${baseUrl}/sign-in`, {
    id: userName,
    password: password,
  });
  const accessToken = response.data.token;
  // const refreshToken = response.data.refresh_token;

  requestConfig.headers.Authorization = accessToken;
  return accessToken;
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

export const jwtVerify = async () => {
  return await axios.get(`${baseUrl}/jwt-verify`, requestConfig);
};

export const refreshVerify = async () => {
  return await axios.get(`${baseUrl}/refresh-verify`, requestConfig);
};

export const reissuanceRefreshVerify = async () => {
  return await axios.get(`${baseUrl}/refresh-token`, requestConfig);
};
