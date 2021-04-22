import { ROUTE_PATH } from 'configs/config';

export const leftNavigationMenuTitle = {
  manageProduct: '상품관리',
};

export const leftNavigationMenu = [
  {
    title: leftNavigationMenuTitle.manageProduct,
    submenuList: [
      { title: '상품 조회/수정', path: ROUTE_PATH.admin.editProduct },
      { title: '상품 등록', path: ROUTE_PATH.admin.registerProduct },
      { title: '상품 일괄등록', path: ROUTE_PATH.admin.registerAllProduct },
      { title: '배송정보 관리', path: ROUTE_PATH.admin.editDestination },
    ],
  },
];

export const DateFormat = {
  Default: 'YYYY-MM-DD',
};
