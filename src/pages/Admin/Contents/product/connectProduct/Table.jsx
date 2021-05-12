import React from 'react';
import styled from 'styled-components';
import { Button as OriginButton } from 'antd';

import OriginTable from 'pages/Admin/components/Table/Table';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';

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

const setExcelDown = () => {
  alert('엑셀다운');
};
const setSlectDelete = () => {
  alert('선택삭제');
};
const setRegistConnectProduct = () => {
  alert('연관상품 등록');
};

const Table = () => {
  return (
    <Container>
      <HeaderContainer>
        <Title>상품목록(총 0개)</Title>
        <ButtonContainer>
          <BasicSelectBox list={sortViewList}></BasicSelectBox>
          <BasicSelectBox list={CountList}></BasicSelectBox>
          <Button onClick={setExcelDown}>엑셀다운</Button>
        </ButtonContainer>
      </HeaderContainer>
      <HeaderContainer>
        <ButtonContainer>
          <Button onClick={setSlectDelete}>선택삭제</Button>
        </ButtonContainer>
        <Button onClick={setRegistConnectProduct}>연관상품 등록</Button>
      </HeaderContainer>

      <OriginTable data={data} columns={columns} selectionType="checkbox" />
    </Container>
  );
};

export default Table;

const columns = [
  {
    title: '수정',
    dataIndex: 'modify',
    render: (text) => (
      <BasicButton  label={text}></BasicButton>
    ),
  },
  {
    title: '연관상품 ID',
    dataIndex: 'connectProductID',
  },
  {
    title: '유형',
    dataIndex: 'type',
  },
  {
    title: '이미지',
    dataIndex: 'image',
  },
  {
    title: '연관상품 전시상태',
    dataIndex: 'relatedProductExhibitionStatus',
  },
  {
    title: '상품번호',
    dataIndex: 'ProductNumber',
  },
  {
    title: '대표 상품명',
    dataIndex: 'representativeProductName',
  },
  {
    title: '판매상태',
    dataIndex: 'saleStatus',
  },
  {
    title: '전시상태',
    dataIndex: 'exhibitionStatus',
  },
  {
    title: '판매가',
    dataIndex: 'salePrice',
  },
  {
    title: '할인가',
    dataIndex: 'reducedPrice',
  },
  {
    title: '카테고리',
    dataIndex: 'category',
  },
  {
    title: '연관상품 등록일',
    dataIndex: 'connectProductRegistrationDate',
  },
  {
    title: '연관상품 수정일',
    dataIndex: 'connectProductModifyDate',
  },
];

const data = [
  {
    key: '1',
    modify: '수정',
    connectProductID: '1',
    type: 'type',
    image: 'image',
    relatedProductExhibitionStatus: '연관상품전시상태',
    ProductNumber: '상품번호',
    representativeProductName: '대표상품명',
    saleStatus: '판매상태',
    exhibitionStatus: '전시상태',
    salePrice: '판매가',
    reducedPrice: '할인가',
    category: '카테고리',
    connectProductRegistrationDate: '연관상품 등록일',
    connectProductModifyDate: '연관상품 수정일',
  },
];

const sortViewList = [
  { label: '연관상품 ID순', value: 'associatedProductID' },
  { label: '대표 상품명순', value: 'representativeProduct' },
  { label: '등록일순', value: 'registrationDate' },
  { label: '최종수정일순', value: 'lastModifiedDate' },
];

const CountList = [
  { label: '50개씩', value: 'fiftyCount' },
  { label: '100개씩', value: 'hundredCount' },
  { label: '300개씩', value: 'threeHundredCount' },
  { label: '500개씩', value: 'fiveHundredCount' },
];

