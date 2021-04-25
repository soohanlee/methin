import { ROUTE_PATH } from 'configs/config';

export const leftNavigationMenuTitle = {
  manageProduct: '상품관리',
  manageSale: '판매관리',
};

export const leftNavigationMenu = [
  {
    title: leftNavigationMenuTitle.manageProduct,
    submenuList: [
      { title: '상품 조회/수정', path: ROUTE_PATH.admin.editProduct },
      { title: '상품 등록', path: ROUTE_PATH.admin.registerProduct },
      { title: '상품 일괄등록', path: ROUTE_PATH.admin.registerAllProduct },
      { title: '연관상품 관리', path: ROUTE_PATH.admin.connectProduct },
      { title: '배송정보 관리', path: ROUTE_PATH.admin.deliveryProduct },
      { title: '공지사항 관리', path: ROUTE_PATH.admin.noticeManage },
    ],
  },
  {
    title: leftNavigationMenuTitle.manageSale,
    submenuList: [
      { title: '주문조회', path: ROUTE_PATH.admin.manageSale },
      { title: '미결제 확인', path: ROUTE_PATH.admin.checkOutstanding },
    ],
  },
];

export const DateFormat = {
  Default: 'YYYY-MM-DD',
};
