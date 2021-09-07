import { ROUTE_PATH } from 'configs/config';

export const leftNavigationMenuTitle = {
  manageProduct: '상품관리',
  manageSale: '판매관리',
  reviewManage: '리뷰/문의 관리',
  manageMenu : '메뉴관리'
};

export const leftNavigationMenu = [
  {
    title: leftNavigationMenuTitle.manageProduct,
    submenuList: [
      { title: '상품 조회/수정', path: ROUTE_PATH.admin.productSearch },
      { title: '상품 등록', path: ROUTE_PATH.admin.registerProduct },
      { title: '상품 일괄등록', path: ROUTE_PATH.admin.registerProductAll },
      { title: '배송정보 관리', path: ROUTE_PATH.admin.deliveryProduct },
      { title: '공지사항 관리', path: ROUTE_PATH.admin.noticeManage },
    ],
  },
  {
    title: leftNavigationMenuTitle.manageSale,
    submenuList: [
      { title: '주문조회', path: ROUTE_PATH.admin.orderSearch },
      { title: '미결제 확인', path: ROUTE_PATH.admin.checkOutstanding },
      { title: '발송(주문)확인', path: ROUTE_PATH.admin.orderConfirm },
      { title: '발송관리', path: ROUTE_PATH.admin.orderManage },
      { title: '배송현황 관리', path: ROUTE_PATH.admin.deliveryStatusManage },
      { title: '취소관리', path: ROUTE_PATH.admin.orderCancel },
      { title: '판매방해 고객관리', path: ROUTE_PATH.admin.orderDisturb },
    ],
  },
  {
    title: leftNavigationMenuTitle.reviewManage,
    submenuList: [
      { title: '문의관리', path: ROUTE_PATH.admin.qnaManage },
      { title: '리뷰관리', path: ROUTE_PATH.admin.reviewManage },
    ],
  },
  {
    title: leftNavigationMenuTitle.manageMenu,
    submenuList: [
      { title: '메뉴관리', path: ROUTE_PATH.admin.menuManage},
      { title: '진열관리', path: ROUTE_PATH.admin.displayManage}
    ]
  }
];

export const adminLeftNavigationSize = 256;
