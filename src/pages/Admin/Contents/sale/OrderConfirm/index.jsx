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
      <Table />
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
        label: '예약구매 지연',
        value: 'preOrderDelay',
        img: <DollarCircleTwoToneIcon />,
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
      {
        label: '자동처리 예정',
        value: 'autoProcessing',
        img: <AppstoreTwoToneIcon />,
      },
    ],
  },
  {
    title: '발송처리를 진행해 주세요!',
    itemList: [
      { label: '오늘출발', value: 'todayStart', img: <AppstoreTwoToneIcon /> },
      { label: '예약구매', value: 'prePurchase', img: <AppstoreTwoToneIcon /> },
      { label: '신규주문', value: 'newOrder', img: <AppstoreTwoToneIcon /> },
      {
        label: '발주확인 완료',
        value: 'confirmOrderCheck',
        img: <AppstoreTwoToneIcon />,
      },
    ],
  },
];
