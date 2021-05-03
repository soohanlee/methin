import React, { useRef } from 'react';

import styled from 'styled-components';

// import Filter from './Filter';
import Table from './Table';
import { Input } from 'antd';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import CheckBoxLabel from 'pages/Admin/components/Form/CheckBoxLabel';
import BasicButton from 'pages/Admin/components/Form/BasicButton';

const RegistertBox = styled.div`
  background-color: white;
`;

const SelectBox = styled(BasicSelectBox)`
  width: 10rem;
  margin-bottom: ${(props) => props.marginbottom};
`;

const SelectCheckBox = styled.div`
  margin-bottom: 2rem;
  display: flex;
`;
const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const BasicButtonStyled = styled(BasicButton)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-left: ${(props) => props.marginleft};
  align-items: center;
`;

const InputBox = styled(Input)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-bottom: ${(props) => props.marginbottom};
`;

const Registert = styled.div`
  margin-top: 2rem;
  display: felx;
  width: 100%;
  height: 20rem;
  background-color: white;
  justify-content: space-between;
  border: 1px solid #f0f0f0;
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  display: felx;
`;
const Title = styled.div`
  width: 20%;
  background-color: #f9f9f9;
  padding: 2rem;
`;
const Content = styled.div`
  width: 80%;
  padding: 2rem;
`;
const RegistertionConditions = () => {
  const registrationConditions = useRef(null);

  return (
    <RegistertBox>
      <div>등록하기</div>
      <Registert>
        <Box>
          <Title>등록조건</Title>
          <Content>
            <SelectBox list={ResisterTypeList} marginbottom="1rem" />
            <InputBox
              ref={registrationConditions}
              height="10rem"
              marginbottom="1rem"
            />
            <div>복수 등록 (enter 또는 ","로 구분)</div>
          </Content>
        </Box>
        <Box>
          <Title>제한사유</Title>
          <Content>
            <SelectCheckBox>
              <CheckBoxLabel label="구매의사 없는 반복구매" />
              <CheckBoxLabel label="언어폭력" />
              <CheckBoxLabel label="영업방해" />
              <CheckBoxLabel label="기타" />
            </SelectCheckBox>
            <InputBox
              ref={registrationConditions}
              height="10rem"
              marginbottom="1rem"
            />
            <div>제한 상세 사유를 입력하실 수 있습니다.</div>
          </Content>
        </Box>
      </Registert>
      <ButtonBox>
        <BasicButtonStyled label="등록" width="8rem" height="4rem" />
      </ButtonBox>
    </RegistertBox>
  );
};

const DisturbSalesBox = styled.div`
  background-color: white;
  width: 100%;
`;
const InquiryConditionsBox = styled.div`
  width: 100%;
  height: 6rem;
  background-color: #f9f9f9;
  border: 1px solid #f0f0f0;
  border-left: 0px;
  margin-top: 1rem;
  border-right: 0px;
`;

const InquiryConditions = styled.div`
  width: 60rem;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DisturbSales = () => {
  const disturbSales = useRef(null);

  return (
    <DisturbSalesBox>
      <div>판매방해 고객 리스트 [총 0건]</div>
      <InquiryConditionsBox>
        <InquiryConditions>
          <div>조회조건</div>
          <SelectBox list={InquiryConditionsTypeList} />
          <InputBox ref={disturbSales} width="30rem" />
          <BasicButtonStyled label="조회하기" width="10rem" />
        </InquiryConditions>
      </InquiryConditionsBox>
    </DisturbSalesBox>
  );
};

// 발주 확인/발송관리
const SaleDisturb = () => {
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

  return (
    <div>
      <div>{RegistertionConditions()}</div>
      <div>{DisturbSales()}</div>
      <Table />
    </div>
  );
};

export default SaleDisturb;
const ResisterTypeList = [
  { label: '구매자ID', value: 'buyerID' },
  { label: '상품주문번호', value: 'productOrderNumber' },
];
const InquiryConditionsTypeList = [
  { label: '전체', value: 'all' },
  { label: '구매자ID', value: 'buyerID' },
  { label: '상품주문번호', value: 'productOrderNumber' },
];
