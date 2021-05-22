import React from 'react';
import styled, { css } from 'styled-components';

import Filter from './Filter';
import Table from './Table';
import BoardHeader from 'pages/Admin/components/BoardHeader';
import AppstoreTwoTone from '@ant-design/icons/AppstoreTwoTone';
import DollarCircleTwoTone from '@ant-design/icons/DollarCircleTwoTone';

const Icon = css`
  font-size: 4rem;
  margin-right: 1rem;
`;

const AppstoreTwoToneIcon = styled(AppstoreTwoTone)`
  ${Icon}
`;
const DollarCircleTwoToneIcon = styled(DollarCircleTwoTone)`
  ${Icon}
`;
// 발주 확인/발송관리
const OrderConfirm = () => {
  const handleClick = (value) => {
    switch (value) {
      case 'todayDelay':
        console.log('todayDelay');
        break;
      case 'preOrderDelay':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
      case 'newOrderDelay':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
      case 'deliveryPreparationDelay':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
      case 'cancleRequest':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
      case 'changeDelivery':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
      case 'autoProcessing':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
      case 'todayStart':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
      case 'prePurchase':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
      case 'newOrder':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
      case 'confirmOrderCheck':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;

      default:
        console.log(`Sorry, we are out of .`);
    }
  };

  const data = [{ value: 1 }, { value: 2 }, { value: 3 }];

  return (
    <div>
      <BoardHeader list={list} onClick={handleClick} data={data} />
      <Filter />
      <Table
        orderCountTableColumns={orderCountTableColumns}
        orderCountTableData={orderCountTableData}
        orderSheetList={orderSheetList}
        tableData={tableData}
      />
    </div>
  );
};

export default OrderConfirm;

const list = [
  {
    title: '먼저 확인해주세요!',
    itemList: [
      {
        label: '오늘 출발 지연',
        value: 'todayDelay',
        img: <AppstoreTwoToneIcon />,
      },
      {
        label: '신규주문 지연',
        value: 'newOrderDelay',
        img: <AppstoreTwoToneIcon />,
      },
      {
        label: '배송준비 지연',
        value: 'deliveryPreparationDelay',
        img: <AppstoreTwoToneIcon />,
      },
      {
        label: '발송전 취소요청',
        value: 'cancleRequest',
        img: <AppstoreTwoToneIcon />,
      },
      {
        label: '발송전 배송지변경',
        value: 'changeDelivery',
        img: <AppstoreTwoToneIcon />,
      },
    ],
  },
  {
    title: '발송처리를 진행해 주세요!',
    itemList: [
      { label: '오늘출발', value: 'todayStart', img: <AppstoreTwoToneIcon /> },
      { label: '신규주문', value: 'newOrder', img: <AppstoreTwoToneIcon /> },
      {
        label: '발주확인 완료',
        value: 'confirmOrderCheck',
        img: <AppstoreTwoToneIcon />,
      },
    ],
  },
];

const orderCountTableColumns = [
  {
    title: '출고지',
    dataIndex: 'location',
  },
  {
    title: '상품번호',
    dataIndex: 'productNum',
  },
  {
    title: '상품명',
    dataIndex: 'productName',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: '옵션값',
    dataIndex: 'optionValue',
  },
  {
    title: '수량',
    dataIndex: 'count',
  },
];

const orderCountTableData = [
  {
    key: '1',
    location: '(21040) 인천광역시 계양구 주부토로 573-1 B동 1층',
    productNum: '5359856047',
    productName:
      '자연산광호야X미띤 국내산 한돈1+ 돼지안심, 양념안심, 닭가슴살 냉장',
    optionValue: '패키지: 돼지안심 4개',
    count: 1,
  },
  {
    key: '2',
    location: '(21040) 인천광역시 계양구 주부토로 573-1 B동 1층',
    productNum: '5359856047',
    productName:
      '자연산광호야X미띤 국내산 한돈1+ 돼지안심, 양념안심, 닭가슴살 냉장',
    optionValue: '패키지: 돼지안심 4개',
    count: 1,
  },
  {
    key: '3',
    location: '(21040) 인천광역시 계양구 주부토로 573-1 B동 1층',
    productNum: '5359856047',
    productName:
      '자연산광호야X미띤 국내산 한돈1+ 돼지안심, 양념안심, 닭가슴살 냉장',
    optionValue: '패키지: 돼지안심 4개',
    count: 1,
  },
  {
    key: '4',
    location: '(21040) 인천광역시 계양구 주부토로 573-1 B동 1층',
    productNum: '5359856047',
    productName:
      '자연산광호야X미띤 국내산 한돈1+ 돼지안심, 양념안심, 닭가슴살 냉장',
    optionValue: '패키지: 돼지안심 4개',
    count: 1,
  },
];

const orderSheetList = [
  {
    date: '2021.05.20 2021052098897071',
    productName:
      '국내산 한돈1+ 돼지안심 수비드 미띤(2021052064444061) 옵션 패키지: 양념돼지안심 7개',
    price: '34,300원 (1개)',
    process: '선결제',
    name: '한명서 (한명서)',
    adress:
      '(650759) 경상남도 통영시 무전동 한진로즈힐 1054/2 한진로즈힐 106동 1406호',
    phoneNum: '010-6295-1039 / 010-8541-1039 (010-6295-1039)',
  },
];

const tableData = [
  {
    key: '0',
    productOrderNumber: '2021',
    orderNumber: '2021',
    buyerDeliveryType: '택배,등기,소포',
    deliveryType: '',
    courier: '',
    invoiceNumber: '',
    trackingShipping: '',
    shipmentDate: '2021.05.22',
    salesChannel: '스마트스토어',
    talktalk: '톡톡하기',
  },
];
