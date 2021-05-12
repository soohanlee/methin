import React, { useRef } from 'react';
import styled from 'styled-components';
import { Button as OriginButton, Input } from 'antd';

import LabelContents from 'pages/Admin/components/Label/LabelContents';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
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

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled(OriginButton)`
  margin-right: 0.5rem;
`;

const SearchContainer = styled.div`
  margin-bottom: 2rem;
`;

const SelectBox = styled(BasicSelectBox)`
  width: 300px;
`;

const PeirodSelectBox = styled(SelectBox)`
  margin-right: 1rem;
`;

const ButtomContainer = styled.div`
  margin-top: 4rem;
`;

const Table = ({ data }) => {
  const invoiceNumber = useRef(null);

  return (
    <Container>
      <SearchContainer>
        <LabelContents title="배송정보 한번에 입력하기">
          <PeirodSelectBox list={deliveryTypeList} />
          <PeirodSelectBox list={deliveryCompanyList} />
          <Input ref={invoiceNumber} />
        </LabelContents>
      </SearchContainer>

      <OriginTable
        data={data && data}
        columns={columns}
        selectionType="checkbox"
      />

      <ButtonContainer>
        <Button>선택건 주문서 출력</Button>
        <Button>선택건 출고지/옵션별 주문수량 보기</Button>
      </ButtonContainer>

      <ButtomContainer>
        <LabelContents title="주문확인">
          <Button>발주확인</Button>
          <Button>발송지연 처리</Button>
          <Button>고객 배송지 정보수정</Button>
          <Button>배송희망일 변경</Button>
        </LabelContents>

        <LabelContents title="발송처리">
          <Button>발송처리</Button>
          <Button>엑셀 일괄 발송처리</Button>
          <Button>합포장 일괄 발송처리</Button>
          <Button>굿스플로 송장출력</Button>
          <Button>송장수정</Button>
        </LabelContents>

        <LabelContents title="취소처리">
          <Button>판매취소</Button>
          <Button>집하취소</Button>
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
    title: '구매자명',
    dataIndex: 'address',
  },
  {
    title: '구매자ID',
    dataIndex: 'address',
  },
  {
    title: '수취인명',
    dataIndex: 'address',
  },
  {
    title: '주문상태',
    dataIndex: 'address',
  },
  {
    title: '결제일',
    dataIndex: 'address',
  },
  {
    title: '상품번호',
    dataIndex: 'address',
  },
  {
    title: '상품명',
    dataIndex: 'address',
  },
  {
    title: '상품종류',
    dataIndex: 'address',
  },
  {
    title: '옵션정보',
    dataIndex: 'address',
  },
  {
    title: '수량',
    dataIndex: 'address',
  },
  {
    title: '옵션가격',
    dataIndex: 'address',
  },
  {
    title: '상품가격',
    dataIndex: 'address',
  },
  {
    title: '총 주문 금액',
    dataIndex: 'address',
  },
  {
    title: '발주확인일',
    dataIndex: 'address',
  },
  {
    title: '발송기한',
    dataIndex: 'address',
  },
  {
    title: '발송처리일',
    dataIndex: 'address',
  },
  {
    title: '송장출력일',
    dataIndex: 'address',
  },
  {
    title: '배송비 형태',
    dataIndex: 'address',
  },
  {
    title: '배송비 묶음 번호',
    dataIndex: 'address',
  },
  {
    title: '배송비 유형',
    dataIndex: 'address',
  },
  {
    title: '배송비 합계',
    dataIndex: 'address',
  },
  {
    title: '배송비 할인액',
    dataIndex: 'address',
  },
  {
    title: '수취인 연락처',
    dataIndex: 'address',
  },
  {
    title: '배송지',
    dataIndex: 'address',
  },
  {
    title: '구매자 연락처',
    dataIndex: 'address',
  },
  {
    title: '우편번호',
    dataIndex: 'address',
  },
  {
    title: '배송메세지',
    dataIndex: 'address',
  },
  {
    title: '출고지',
    dataIndex: 'address',
  },
  {
    title: '결제수단',
    dataIndex: 'address',
  },
  {
    title: '주문일시',
    dataIndex: 'address',
  },
];

const deliveryTypeList = [
  { label: '선택', value: 'select' },
  { label: '택배,등기,소포', value: 'delivery' },
  { label: '퀵서비스', value: 'quick' },
  { label: '방문수령', value: 'visit' },
  { label: '직접전달', value: 'direct' },
];

const deliveryCompanyList = [
  { label: '선택', value: 'select' },
  { label: 'CJ 대한통운', value: 'cj' },
];
