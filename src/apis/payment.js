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
export const patchShipCancelConfirm = async (id,data) => {
//   - from_admin: boolean (optional)
//     - true ⇒ 판매자 직접취소
// - cancel_reason: string (optional) ⇒ 취소사유
//     - from_admin: true일 경우에만 사용
  return await axios.patch(`${baseUrl}/${id}/cancel/confirm`,data);
};

// 발주
export const patchConfirm = async (id) => {
  return await axios.patch(`${baseUrl}/${id}/payment-confirm`);
};

//고객 배송지 정보수정
export const patchAdress = async (id,data) => {
  // - recipient_name: string (optional) ⇒ 수취인명
  // - recipient_phone: string (optional) ⇒ 수취인연락처
  // - recipient_phone2: string (optional) ⇒ 수취인연락처2
  // - ship_zip_code: string (optional) ⇒ 배송지 우편번호
  // - ship_address_main: string (optional) ⇒ 배송지
  // - ship_address_sub: string (optional) ⇒ 배송지 추가정보
  // - ship_message: string (optional) ⇒ 배송메시지
  // - ship_company_id: number (optional) ⇒ 택배사ID
  // - ship_number: string (optional) ⇒ 운송장번호
  return await axios.patch(`${baseUrl}/${id}/ship-info`,data);
};

