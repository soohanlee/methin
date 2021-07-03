import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Filter from './Filter';
import Table from './Table';
import BoardHeader from 'pages/Admin/components/BoardHeader';
import AppstoreTwoTone from '@ant-design/icons/AppstoreTwoTone';
import { notification } from 'utils/notification';
import { getPaidWithPaymentConfirmedList } from 'apis/payment';

const Icon = css`
  font-size: 4rem;
  margin-right: 1rem;
`;

const AppstoreTwoToneIcon = styled(AppstoreTwoTone)`
  ${Icon}
`;
// 발주 확인/발송관리
const OrderConfirm = () => {
  const limite = 16;
  const [tableDataState, setTableDataState] = useState([]);
  const [tableCountState, setTableCountState] = useState(0);

  useEffect(() => {
    async function fetchAndSetUser() {
      await getApiDeliveryData();
    }
    fetchAndSetUser();
  }, []);

  const getApiDeliveryData = async () => {
    try {
      const result = await getPaidWithPaymentConfirmedList(0);
      const count = result.data.data.count;
      const maxOffset = Math.floor(result.data.data.count / limite) + 1;
      let customList = [];
      for (let i = 0; i < maxOffset; i++) {
        const _result = await getPaidWithPaymentConfirmedList(i);
        customList = customList.concat(_result.data.data.list);
      }
      setTableDataState(customList);
      setTableCountState(customList.length);
      notification.success('검색 성공');
    } catch (e) {
      notification.error('발송 정보를 가져오지 못했습니다.');
    }
  };

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
      <Filter getApiDeliveryData={getApiDeliveryData} />
      <Table sheetList={sheetList} tableData={tableDataState} />
    </div>
  );
};

export default OrderConfirm;

const list = [
  {
    title: '먼저 확인해주세요!',
    itemList: [
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
      { label: '신규주문', value: 'newOrder', img: <AppstoreTwoToneIcon /> },
      {
        label: '발주확인 완료',
        value: 'confirmOrderCheck',
        img: <AppstoreTwoToneIcon />,
      },
    ],
  },
];

const sheetList = [
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
