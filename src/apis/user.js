import axios from 'axios';

export const getUserInformation = async () => {
  return await axios.post(`api/user/info`);
};

export const updateUserInfo = async (data) => {
  // old_password
  // password
  // nickname
  // phone

  return await axios.patch(`api/user/info`, data);
};

export const deleteUserInfo = async () => {
  return await axios.delete(`api/user`);
};
