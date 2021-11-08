import axios from 'axios';

export const getMenu = async () => {
  return await axios.get(`api/admin/menu`);
};