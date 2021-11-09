import axios from 'axios';

export const getMenuList = async () => {
  return await axios.get(`api/category`);
};
