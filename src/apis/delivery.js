import axios from 'axios';

export const allDeliveryProduct = async () => {
  return await axios.get(`api/admin/ship`);
};

export const searchDeliveryProduct = async (id) => {
  return await axios.get(`api/admin/ship/${id}`);
};

export const updateDelivery = async (data) => {
  //   - **body**: string ⇒ 배송정보 이름
  // - **amount1**: number ⇒ 일반 배송비
  // - **amount2**: number ⇒ 제주,산간지역 배송비
  return await axios.post(`api/admin/ship`, data);
};

export const updateDeliveryDetail = async (id, data) => {
  //   - **body**: string ⇒ 배송정보 이름
  // - **amount1**: number ⇒ 일반 배송비
  // - **amount2**: number ⇒ 제주,산간지역 배송비
  return await axios.patch(`api/admin/ship/${id}`, data);
};

export const deleteDeliveryDetail = async (id) => {
  return await axios.delete(`api/admin/ship/${id}`);
};

export const getUserAddressList = (data) => {
  return axios.get(`/api/address`, data);
};

export const addUserAddress = (data) => {
  return axios.post(`/api/address`, data);
};

export const updateUserAddress = (id, data) => {
  return axios.patch(`/api/address/${id}`, data);
};

export const deleteUserAddress = (id) => {
  return axios.delete(`/api/address/${id}`);
};
