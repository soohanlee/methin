import axios from 'axios';

export const allDeliveryProduct = async () => {
  return await axios.get(`api/admin/ship`);
};

export const searchDeliveryProduct = async (id) => {
  return await axios.get(`api/admin/ship?id=${id}`);
};