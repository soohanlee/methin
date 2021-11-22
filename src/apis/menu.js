import axios from 'axios';

export const getCategoryList = async () => {
  return await axios.get(`api/category`);
};
