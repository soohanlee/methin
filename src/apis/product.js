import axios from 'axios';

export const registerProduct = async (data) => {
  return await axios.post(`api/admin/produc?id=${id}`, data);
};
