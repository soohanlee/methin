import axios from 'axios';

const productUrl = `/api/admin/product`;

export const getProductList = async () => {
  return await axios.get(`${productUrl}`);
};

export const getProductDetail = async (id) => {
  return await axios.get(`${productUrl}/${id}`);
};

export const getProductRelatedList = async (id) => {
  return await axios.get(`${productUrl}/${id}/related`);
};

export const getProductQNA = async (id) => {
  return await axios.get(`${productUrl}/${id}/qna`);
};

export const getProductReview = async (id) => {
  return await axios.get(`${productUrl}/${id}/review`);
};

export const registerProduct = async (data) => {
  // - name: string ⇒ 상품이름
  // - description: string (default: null. optional) ⇒ 상품설명
  // - status: number (default: 0. optional) ⇒ 상품 판매상태
  //     - 0: 미설정
  // - count: number ⇒ 상품 재고수량
  // - main_image_id: number (default: null. optional) ⇒ 이미지 ID
  // - ship_info_id: number (default: null. optional) ⇒ 상품 배송정보 ID
  // - **price**: number ⇒ 상품 가격
  // - preview_status: number (default: 0. optional) ⇒ 상품 노출정보
  //     - 0: 미리보기
  //     - 1: 노출

  console.log(data);
  return await axios.post(`${productUrl}`, data);
};

export const registerRelatedProduct = async (id, data) => {
  // related_product_id: number ⇒ 연관상품 ID
  // type: number (default 0, optional) ⇒ 연관타입
  return await axios.post(`${productUrl}/${id}/related`, data);
};

export const updateProductDetail = async (id, data) => {
  //   - **name**: string ⇒ 상품이름
  // - description: string ⇒ 상품설명
  // - status: number ⇒ 상품 판매상태
  //     - 0: 미설정
  // - **count**: number ⇒ 상품 재고수량
  // - main_image_id: number ⇒ 이미지 ID
  // - ship_info_id: number ⇒ 상품 배송정보 ID
  // - **price**: number ⇒ 상품 가격
  // - preview_status: number ⇒ 상품 노출정보
  //     - 0: 미리보기
  //     - 1: 노출
  return await axios.patch(`${productUrl}/${id}`, data);
};

export const answerQNA = async (id, qna_id, data) => {
  //   - **answer_title**: string ⇒ 답변 제목
  // - **answer_body**: string ⇒ 답변 내용
  console.log(id);
  console.log(qna_id);
  console.log(data);
  return await axios.patch(`${productUrl}/${id}/qna/${qna_id}/answer`, data);
};

export const deleteProduct = async (id) => {
  return await axios.delete(`${productUrl}/${id}`);
};

export const deleteRelatedProduct = async (id, related_product_id) => {
  return await axios.delete(
    `${productUrl}/${id}/related/${related_product_id}`,
  );
};
