export const ROUTE_PATH = {
  main: '/',
  login: '/login',
  signup: '/console',
  findId: '/findId',
  admin: {
    main: '/admin',
    test: '/test',
    editProduct: '/edit-product',
    registerProduct: '/register-product',
    registerAllProduct: '/register-all-product',
    connectProduct: '/connect-product',
    deliveryProduct: '/delivery-product',
    noticeManage: '/notice-manage',
    manageSale: '/manage-sale',
  },
};

export const LOCAL_STORAGE_KEYS = {
  UserLoginRemember: '__is_user_remember__',
};

export const COOKIE_KEYS = {
  UserRefreshToken: '__user_refresh_token__',
  UserAccessToken: '__user_access_token__',
};
