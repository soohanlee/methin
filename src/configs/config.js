export const ROUTE_PATH = {
  main: '/main',
  login: '/login',
  signup: '/signup',
  findId: '/findId',
  product: '/product',
  deliveryTracking: '/delivery-tracking',
  mypage: {
    main: '/mypage',
    destination: '/destination',
    cancel: '/cancel',
    review: '/review',
    myInformation: '/my-information',
    ask: '/ask',
    qna: '/qna',
    faq: '/faq',
    mobileMenu: '/menu',
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
    productSearch: '/product-Search',
    registerProduct: '/register-product',
    registerProductAll: '/register-product-all',
    deliveryProduct: '/delivery-product',
    noticeManage: '/notice-manage',
    orderSearch: '/order-search',
    checkOutstanding: '/check-outstanding',
    orderConfirm: '/order-confirm',
    orderManage: '/order-manage',
    orderCancel: '/order-cancel',
    orderDisturb: '/order-disturb',
    deliveryStatusManage: '/delivery-status-manage',
    qnaManage: '/qna-manage',
    reviewManage: '/review-manage',
    registerNotice: '/register-notice',
    menuManage: '/menu-manage',
    displayManage: '/display-manage',
  },

  mobile: {
    mypage: '/mobile/mypage',
  },
};

export const LOCAL_STORAGE_KEYS = {
  UserLoginRemember: '__is_user_remember__',
};

export const COOKIE_KEYS = {
  UserRefreshToken: '__user_refresh_token__',
  UserAccessToken: '__user_access_token__',
  cart: 'CART',
  CheckOutStandingPaymentTargetKeys: 'CheckOutStandingPaymentTargetKeys',
  CheckOutStandingPaymentGridCount: 'CheckOutStandingPaymentGridCount',
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
