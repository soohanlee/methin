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

const Table = () => {
  return (
    <Container>
      <HeaderContainer>
        <Title>목록(총 0개)</Title>
        <ButtonContainer>
          <Button>조회항목 설정</Button>
          <Button>엑셀다운</Button>
        </ButtonContainer>
      </HeaderContainer>
      <HeaderContainer>
        <ButtonContainer>
          <Button>송장수정</Button>
          <Button>판매자 직접 반품</Button>
          <Button>판매자 직접교환</Button>
        </ButtonContainer>
        <Button>구매 확정 후 취소처리 바로가기</Button>
      </HeaderContainer>

      <OriginTable data={data} columns={columns} selectionType="checkbox" />

      <ButtomContainer>
        <LabelContents title="구매확정 관리">
          <Button>구매확정 요청</Button>
          <Button>구매확정 연장</Button>
        </LabelContents>

        <LabelContents title="교환/반품">
          <Button>판매자 직접 반품</Button>
          <Button>판매자 직접 교환</Button>
        </LabelContents>

        <LabelContents title="정보 수정">
          <Button>송장수정</Button>
        </LabelContents>
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
    title: '주문번호',
    dataIndex: 'orderNumber',
  },
  {
    title: '배송방법(구매자 요청)',
    dataIndex: 'deliveryWayBuyer',
  },
  {
    title: '배송방법',
    dataIndex: 'deliveryWay',
  },
  {
    title: '택배사',
    dataIndex: 'address',
  },
  {
    title: '송장번호',
    dataIndex: 'address',
  },
  {
    title: '배송추적',
    dataIndex: 'address',
  },
  {
    title: '발송일',
    dataIndex: 'address',
  },
  {
    title: '판매채널',
    dataIndex: 'address',
  },
  {
    title: '톡톡하기',
    dataIndex: 'address',
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