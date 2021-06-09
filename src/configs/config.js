export const ROUTE_PATH = {
  main: '/main',
  login: '/login',
  signup: '/signup',
  findId: '/findId',
  product: '/product',
  mypage: {
    main: '/mypage',
    destination: '/destination',
    cancel: '/cancel',
    review: '/review',
    myInformation: '/my-information',
    ask: '/ask',
    qna: '/qna',
    faq: '/faq',
  },
  serviceCenter: {
    main: '/service-center',
    notice: '/notice',
    faq: '/faq',
  },
  cart: '/cart',
  order: '/order',
  subscribe: '/subscribe',
  category: '/category',
  admin: {
    main: '/admin',
    test: '/test',
    editProduct: '/edit-product',
    registerProduct: '/register-product',
    registerAllProduct: '/register-all-product',
    deliveryProduct: '/delivery-product',
    noticeManage: '/notice-manage',
    manageSale: '/manage-sale',
    checkOutstanding: '/check-outstanding',
    orderConfirm: '/order-confirm',
    orderManage: '/order-manage',
    orderCancel: '/order-cancel',
    orderDisturb: '/order-disturb',
    deliveryStatusManage: '/delivery-status-manage',
    reviewManage: '/review-manage',
    registerNotice: '/register-notice',
  },
};

export const LOCAL_STORAGE_KEYS = {
  UserLoginRemember: '__is_user_remember__',
};

export const COOKIE_KEYS = {
  UserRefreshToken: '__user_refresh_token__',
  UserAccessToken: '__user_access_token__',
  cart: 'CART',
};

export const DateFormat = {
  Default: 'YYYY-MM-DD',
};

export const BreakPoint = {
  xl: 1200,
  l: 1024,
  m: 768,
  s: 640,
};

export const SEPCIAL_CONTAINER_ID_LIST = Object.freeze({
  MODAL: 'modal-container',
});
