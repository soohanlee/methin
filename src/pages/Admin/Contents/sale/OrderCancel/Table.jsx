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
const setSuccessCancel = () => {
  alert('취소완료');
};
const setRejectCancel = () => {
  alert('취소거부');
};

const setBuyCancel = () => {
  alert('구매 확정후 취소처리 바로가기');
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
      <HeaderContainer>
        <ButtonContainer>
          <Button onClick={setSuccessCancel}>취소완료</Button>
          <Button onClick={setRejectCancel}>취소거부</Button>
        </ButtonContainer>
        <Button onClick={setBuyCancel}>구매 확정 후 취소처리 바로가기</Button>
      </HeaderContainer>

      <OriginTable data={data} columns={columns} selectionType="checkbox" />

      <ButtomContainer>
        <LabelContents title="취소처리">
          <Button onClick={setSuccessCancelProcess}>취소 완료처리</Button>
          <Button onClick={setRejectCancelProcess}>취소 거부처리</Button>
        </LabelContents>
      </ButtomContainer>
    </Container>
  );
};

export default Table;

const columns = [
  {
    title: '주문번호',
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
    title: '취소사유',
    dataIndex: 'cancelReason',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];
