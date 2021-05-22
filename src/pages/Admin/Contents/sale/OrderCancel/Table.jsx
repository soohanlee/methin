import React from 'react';
import styled from 'styled-components';
import { Button as OriginButton } from 'antd';

import LabelContents from 'pages/Admin/components/Label/LabelContents';
import OriginTable from 'pages/Admin/components/Table/Table';

const Container = styled.div`
  background: #fff;
  padding: 3rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
`;

const Title = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled(OriginButton)`
  margin-right: 0.5rem;
`;

const ButtomContainer = styled.div`
  margin-top: 4rem;
`;

const setExcelDown = () => {
  alert('엑셀다운');
};

const setSuccessCancelProcess = () => {
  alert('취소완료처리');
};

const setRejectCancelProcess = () => {
  alert('취소거부처리');
};

const Table = () => {
  return (
    <Container>
      <HeaderContainer>
        <Title>목록(총 0개)</Title>
        <ButtonContainer>
          <Button onClick={setExcelDown}>엑셀다운</Button>
        </ButtonContainer>
      </HeaderContainer>

      <OriginTable data={data} columns={columns} selectionType="checkbox" />

      <ButtomContainer>
        <Button onClick={setSuccessCancelProcess}>취소 완료처리</Button>
        <Button onClick={setRejectCancelProcess}>취소 거부처리</Button>
      </ButtomContainer>
    </Container>
  );
};

export default Table;

const columns = [
  {
    title: '상품주문번호',
    dataIndex: 'productOrderNumber',
  },
  {
    title: '상품주문번호',
    dataIndex: 'orderNumber',
  },
  {
    title: '주문상태',
    dataIndex: 'orderState',
  },
  {
    title: '취소 처리상태',
    dataIndex: 'orderCancelState',
  },
  {
    title: '결제일',
    dataIndex: 'settlementDay',
  },
  {
    title: '취소요청일',
    dataIndex: 'orderCancelDate',
  },
  {
    title: '접수채널',
    dataIndex: 'receptionChannel',
  },
  {
    title: '톡톡하기',
    dataIndex: 'talktalk',
  },
  {
    title: '취소사유',
    dataIndex: 'cancelReason',
  },
];

const data = [
  {
    key: '0',
    productOrderNumber: '2021',
    orderNumber: '',
    orderState: '',
    orderCancelState: '',
    settlementDay: '',
    orderCancelDate: '',
    receptionChannel: '',
    talktalk: '',
    cancelReason: '',
  },
];
