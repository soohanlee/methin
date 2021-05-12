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
const setAllReturnProductProcess = () => {
  alert('반품처리 한번에 하기');
};
const setReturnComplete = () => {
  alert('반품완료처리');
};
const setChangeTrade = () => {
  alert('교환으로 변경');
};
const setConfirmationProductCancelProcess = () => {
  alert('구매 확정 후 취소처리 바로가기');
};
const setRegistReturnProduct = () => {
  alert('판매자 직접 반품 접수 바로가기');
};
const setCollectionComplete = () => {
  alert('수거 완료처리');
};
const setReturnComplete2 = () => {
  alert('반품 완료처리');
};
const setReturnReject = () => {
  alert('반품 거부처리');
};
const setChangeTrade2 = () => {
  alert('교환으로 변경');
};
const setRefundHold = () => {
  alert('환불보류 설정');
};
const setRefundHoldRelease = () => {
  alert('환불보류 해제');
};
const setModifyReturnReason = () => {
  alert('반품사유 수정');
};
const setModifyReturnCollection = () => {
  alert('수거정보 수정');
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
          <Button onClick={setAllReturnProductProcess}>
            반품처리 한번에 하기
          </Button>
          <Button onClick={setReturnComplete}>반품완료처리</Button>
          <Button onClick={setReturnReject}>반품거부처리</Button>
          <Button onClick={setChangeTrade}>교환으로 변경</Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={setConfirmationProductCancelProcess}>
            구매 확정 후 취소처리 바로가기
          </Button>
          <Button onClick={setRegistReturnProduct}>
            판매자 직접 반품 접수 바로가기
          </Button>
        </ButtonContainer>
      </HeaderContainer>

      <OriginTable data={data} columns={columns} selectionType="checkbox" />

      <ButtomContainer>
        <LabelContents title="반품처리">
          <Button onClick={setCollectionComplete}>수거 완료처리</Button>
          <Button onClick={setReturnComplete2}>반품 완료처리</Button>
          <Button onClick={setReturnReject}>반품 거부처리</Button>
          <Button onClick={setChangeTrade2}>교환으로 변경</Button>
        </LabelContents>
        <LabelContents title="환불 보류">
          <Button onClick={setRefundHold}>환불보류 설정</Button>
          <Button onClick={setRefundHoldRelease}>환불보류 해제</Button>
        </LabelContents>
        <LabelContents title="정보수정">
          <Button onClick={setModifyReturnReason}>반품사유 수정</Button>
          <Button onClick={setModifyReturnCollection}>수거정보 수정</Button>
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
    title: '반품 처리상태',
    dataIndex: 'orderReturnState',
  },
  {
    title: '수거방법',
    dataIndex: 'orderCollectWay',
  },
  {
    title: '수거상태',
    dataIndex: 'orderCollectState',
  },
  {
    title: '결제일',
    dataIndex: 'settlementDay',
  },
  {
    title: '반품요청일',
    dataIndex: 'orderReturnDate',
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