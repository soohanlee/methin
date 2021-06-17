import axios from 'axios';

export const postNotice = async (data) => {
  return await axios.post(`api/admin/notice`,data);
};

export const getNotice = async () => {
  return await axios.get(`api/admin/notice`);
};