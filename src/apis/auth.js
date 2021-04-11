import axios from 'axios';
import { requestConfig } from 'apis/config';

export const logInWithCreds = async (userName, password) => {
  const response = await axios.post('/api/auth/sign-in', {
    userName: userName,
    password: password,
  });
  const accessToken = response.data;
  requestConfig.headers.Authorization = accessToken;
  return accessToken;
};

export const logInWithToken = async (accessToken) => {
  const response = await axios.post('/api/users/login-with-token', {
    accessToken: accessToken,
  });
  requestConfig.headers.Authorization = accessToken;
  return response.data;
};
