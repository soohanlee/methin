import axios from 'axios';

const baseUrl = '/api/admin/payment';

// 전체주문목록
export const getPaymentList = async (data) => {
  // offset: number
  // limit number
  return await axios.get(`${baseUrl}`, data);
};

// 미결제 목록
export const getPaymentUnpaidList = async (data) => {
  // - offset: number (default: 0, optional) ⇒ 페이지 번호
  // - limit: number (default: 16, optional) ⇒ 페이지별 개수
  return await axios.get(`${baseUrl}/unpaid`, data);
};

// 결제 완료 + 상품 준비중 주문 목록
export const getPaidWithPaymentConfirmedList = async (data) => {
  // - offset: number (default: 0, optional) ⇒ 페이지 번호
  // - limit: number (default: 16, optional) ⇒ 페이지별 개수
  return await axios.get(`${baseUrl}/paid-or-payment-confirmed`, data);
};

// 배송중 주문목록 => 배송현황 탭
export const getShipConfirmedList = async (data) => {
  // - offset: number (default: 0, optional) ⇒ 페이지 번호
  // - limit: number (default: 16, optional) ⇒ 페이지별 개수
  return await axios.get(`${baseUrl}/ship-confirmed`);
};

export const getCanceledPaymentList = async (data) => {
  // - offset: number (default: 0, optional) ⇒ 페이지 번호
  // - limit: number (default: 16, optional) ⇒ 페이지별 개수
  return await axios.get(`${baseUrl}/canceled`, data);
};

export const getRefundedPaymentList = async (data) => {
  // - offset: number (default: 0, optional) ⇒ 페이지 번호
  // - limit: number (default: 16, optional) ⇒ 페이지별 개수
  return await axios.get(`${baseUrl}/refunded`, data);
};
