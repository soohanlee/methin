import axios from 'axios';
import { requestConfig } from 'apis/config';

const { REACT_APP_BASE_URL: baseUrl } = process.env;

export const logInWithCreds = async (userName, password) => {
  const response = await axios.post(`${baseUrl}/api/auth/sign-in`, {
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
  return requestConfig.headers.Authorization;
};
