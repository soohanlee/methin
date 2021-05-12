import React from 'react';
import styled from 'styled-components';
import { Button as OriginButton } from 'antd';

import OriginTable from 'pages/Admin/components/Table/Table';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';

const BasicSelectBoxStyled = styled(BasicSelectBox)`
  width: 12rem;
  margin-right: 0.5rem;
`;

const Container = styled.div`
  background: #fff;
  padding: 3rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.width};
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

const setSelectDelete = () => {
  alert('선택삭제');
};
const setDiscount = () => {
  alert('즉시할인 설정');
};
const setChangeSalePrice = () => {
  alert('판매가 변경');
};
const setChangeSaleDate = () => {
  alert('판매기간 변경');
};
const setModifySave = () => {
  alert('수정저장');
};

const Table = ({ table, count }) => {
  return (
    <Container>
      <HeaderContainer>
        <Title>상품목록(총 {count}개)</Title>
        <ButtonContainer>
          <BasicSelectBoxStyled list={SortViewList}></BasicSelectBoxStyled>
          <BasicSelectBoxStyled list={CountList}></BasicSelectBoxStyled>
          <Button onClick={setExcelDown}>엑셀다운</Button>
        </ButtonContainer>
      </HeaderContainer>
      <HeaderContainer>
        <ButtonContainer>
          <Button onClick={setSelectDelete}>선택삭제</Button>
        </ButtonContainer>
      </HeaderContainer>

      <OriginTable data={table} columns={columns} selectionType="checkbox" />
    </Container>
  );
};

export default Table;

const columns = [
  {
    title: '수정',
    dataIndex: 'modify',
  },
  {
    title: '상품번호',
    dataIndex: 'ProductNumber',
  },
  {
    title: '상품명',
    dataIndex: 'productName',
  },
  {
    title: '판매상태',
    dataIndex: 'saleStatus',
  },
  {
    title: '전시상태',
    dataIndex: 'exhibitionStatus',
  },
  //-------
  {
    title: '재고수량',
    dataIndex: 'inventoryCount',
  },
  {
    title: '판매가',
    dataIndex: 'salePrice',
  },
  {
    title: '할인가',
    dataIndex: ' reducedPrice',
  },
  {
    title: '판매자할인',
    dataIndex: 'sellerDiscount',
  },
  {
    title: '옵션',
    dataIndex: 'option',
  },
  {
    title: '추가상품',
    dataIndex: 'addProduct',
  },
  {
    title: '상품속성',
    dataIndex: 'ProductProperty',
  },
  ,
  {
    title: '최소구매수량',
    dataIndex: 'minimumPurchaseQuantity',
  },
  {
    title: '최대구매수량',
    dataIndex: 'maxmumPurchaseQuantity',
  },
  {
    title: '배송비유형',
    dataIndex: 'deliveryPriceType',
  },
  ,
  {
    title: '배송비결제방식',
    dataIndex: 'deliveryPriceMethod',
  },
  ,
  {
    title: '기본배송비',
    dataIndex: 'defaultPrice',
  },
  {
    title: '반품배송비',
    dataIndex: 'returnPrice',
  },
  {
    title: '교환배송비',
    dataIndex: 'changePrice',
  },
  ,
  {
    title: '대분류',
    dataIndex: 'largeClassification',
  },
  ,
  {
    title: '중분류',
    dataIndex: 'middleClassification',
  },
  {
    title: '소분류',
    dataIndex: 'smallClassification',
  },
  {
    title: '판매시작일',
    dataIndex: 'startSaleDate',
  },
  {
    title: '판매종료일',
    dataIndex: 'endSaleDate',
  },
  {
    title: '상품등록일',
    dataIndex: 'addProductDate',
  },
  {
    title: '최종수정일',
    dataIndex: 'finalModifyDate',
  },
];

const ExhibitionList = [
  { label: '전시변경', value: 'changeExhibition' },
  { label: '전시중', value: 'exhibitioning' },
  { label: '전시중지', value: 'stopExhibition' },
];

const SaleList = [
  { label: '판매변경', value: 'saleCheange' },
  { label: '판매중', value: 'onSale' },
  { label: '판매중지', value: 'saleStop' },
];

const SelectizeControlList = [
  { label: '일괄변경', value: 'batchChange' },
  { label: '이벤트문구', value: 'eventPhrase' },
  { label: '구매/혜택', value: 'purchaseBenefits' },
  { label: '구매수량제한', value: 'purchaseQuantityLimit' },
  { label: '상품정보제공고시', value: 'productInformationSupplyNotice' },
  { label: '원산지', value: 'countryOfOrigin' },
  { label: 'A/S,특이사항', value: 'a&s' },
  { label: '브랜드/제조사', value: 'brand&Fabrication' },
  { label: '가격비교사이트 설정', value: 'priceComparisonSite' },
  { label: '모바일미리보기 설정', value: 'mobilePreview' },
];

const DriveList = [
  { label: '배송변경', value: 'driveChange' },
  { label: '배송중', value: 'driveing' },
  { label: '배송속성', value: 'driveProperty' },
];

const SortViewList = [
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