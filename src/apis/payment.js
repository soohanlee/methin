import axios from 'axios';

const baseUrl = '/api/admin/payment';

// 전체주문목록
export const getPaymentList = async (offset) => {
  // offset: number
  // limit number
  return await axios.get(`${baseUrl}?offset=${offset}`);
};

// 미결제 목록
export const getPaymentUnpaidList = async (offset) => {
  // - offset: number (default: 0, optional) ⇒ 페이지 번호
  // - limit: number (default: 16, optional) ⇒ 페이지별 개수
  return await axios.get(`${baseUrl}/unpaid?offset=${offset}`);
};

// 결제 완료 + 상품 준비중 주문 목록
export const getPaidWithPaymentConfirmedList = async (offset) => {
  // - offset: number (default: 0, optional) ⇒ 페이지 번호
  // - limit: number (default: 16, optional) ⇒ 페이지별 개수
  return await axios.get(
    `${baseUrl}/paid-or-payment-confirmed?offset=${offset}`,
  );
};

// 배송중 주문목록 => 배송현황 탭
export const getShipConfirmedList = async (offset) => {
  // - offset: number (default: 0, optional) ⇒ 페이지 번호
  // - limit: number (default: 16, optional) ⇒ 페이지별 개수
  return await axios.get(`${baseUrl}/ship-confirmed?offset=${offset}`);
};

export const getCanceledPaymentList = async (offset) => {
  // - offset: number (default: 0, optional) ⇒ 페이지 번호
  // - limit: number (default: 16, optional) ⇒ 페이지별 개수
  return await axios.get(`${baseUrl}/canceled?offset=${offset}`);
};

export const getRefundedPaymentList = async (offset) => {
  // - offset: number (default: 0, optional) ⇒ 페이지 번호
  // - limit: number (default: 16, optional) ⇒ 페이지별 개수
  return await axios.get(`${baseUrl}/refunded?offset=${offset}`);
};

// 택배사 목록조회
export const getShipCompanyList = async () => {
  // offset: number
  // limit number
  return await axios.get(`${baseUrl}/ship-company`);
};

// 발송 취소완료
export const patchShipCancelConfirm = async (id) => {
  // offset: number
  // limit number
  console.log(`${baseUrl}/${id}/cancel/confirm`);
  return await axios.patch(`${baseUrl}/${id}/cancel/confirm`);
};
