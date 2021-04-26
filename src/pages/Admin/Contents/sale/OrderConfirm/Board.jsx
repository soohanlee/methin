import React from 'react';
import styled, { css } from 'styled-components';

import AppstoreTwoTone from '@ant-design/icons/AppstoreTwoTone';
import DollarCircleTwoTone from '@ant-design/icons/DollarCircleTwoTone';
import WarningTwoTone from '@ant-design/icons/WarningTwoTone';
import CloseCircleTwoTone from '@ant-design/icons/CloseCircleTwoTone';
import CheckCircleTwoTone from '@ant-design/icons/CheckCircleTwoTone';

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

const Container = styled.div`
  background: #fff;
  padding: 0 3rem;
  margin-bottom: 2rem;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  flex-wrap: wrap;
  padding: 2rem 0;
  :first-child {
    border-bottom: 1px solid #f0f0f0;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 1.3rem;
`;

const Length = styled.div``;

const IconContainer = styled.div``;

const Board = ({ tableData }) => {
  const firstList = [
    {
      label: '오늘 출발 지연',
      value: 'todayDelay',
      img: <AppstoreTwoToneIcon />,
      length: tableData.length,
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
  ];

  const secondList = [
    { label: '오늘출발', value: 'todayStart', img: <AppstoreTwoToneIcon /> },
    { label: '예약구매', value: 'prePurchase', img: <AppstoreTwoToneIcon /> },
    { label: '신규주문', value: 'newOrder', img: <AppstoreTwoToneIcon /> },
    {
      label: '발주확인 완료',
      value: 'confirmOrderCheck',
      img: <AppstoreTwoToneIcon />,
    },
  ];

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

  const renderItemList = (list) => {
    return list.map(({ label, value, img }) => {
      return (
        <ItemContainer onClick={() => handleClick(value)}>
          <IconContainer>{img}</IconContainer>
          <TextContainer>
            <Title>{label}</Title>
            <Length>{tableData.length || 0}건</Length>
          </TextContainer>
        </ItemContainer>
      );
    });
  };

  return (
    <Container>
      <ListContainer>{renderItemList(firstList)}</ListContainer>
      <ListContainer>{renderItemList(secondList)}</ListContainer>
    </Container>
  );
};

export default Board;
