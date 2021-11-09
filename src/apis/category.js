import axios from 'axios';

export const getCategory = async () => {
  return await axios.get(`api/admin/category`);
};