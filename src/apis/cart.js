import axios from 'axios';

export const getCartList = async () => {
  return await axios.get(`api/cart`);
};

export const addCartItem = async (data) => {
  // - **product_id**: number ⇒ 상품ID
  // - **count**: number ⇒ 수량
  return await axios.post(`api/cart`, data);
};

export const updateCartItemCount = async (id, data) => {
  return await axios.patch(`api/cart/${id}/count`, data);
};

export const deleteCartItem = async (id) => {
  return await axios.delete(`api/cart/${id}`);
};
