import axios from 'axios';

export const getUserInformation = async () => {
  return await axios.get(`api/user/info`);
};

export const updateUserInfomation = async (data) => {
  // old_password
  // password
  // nickname
  // phone

  return await axios.patch(`api/user/info`, data);
};

export const deleteUserInfo = async () => {
  return await axios.delete(`api/user`);
};
