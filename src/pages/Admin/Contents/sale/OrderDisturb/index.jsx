import React, { useRef } from 'react';

import styled from 'styled-components';

// import Filter from './Filter';
import Table from './Table';
import { Input } from 'antd';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicCheckBox from 'pages/Admin/components/Form/BasicCheckBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';

const RegistertBox = styled.div`
  background-color: white;
`;

const SelectBox = styled(BasicSelectBox)`
  width: ${(props) => props.width};
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

// 발주 확인/발송관리
const OrderDisturb = () => {
  const registrationConditionsRef = useRef(null);
  const disturbSalesRef = useRef(null);

  const renderRegistertionConditions = () => {
    const handleRegistBtn = () => {
      alert('등록');
    };

    return (
      <RegistertBox>
        <div>등록하기</div>
        <Registert>
          <Box>
            <Title>등록조건</Title>
            <Content>
              <SelectBox
                list={ResisterTypeList}
                width="15rem"
                marginbottom="1rem"
              />
              <InputBox
                ref={registrationConditionsRef}
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
                <BasicCheckBox label="구매의사 없는 반복구매" />
                <BasicCheckBox label="언어폭력" />
                <BasicCheckBox label="영업방해" />
                <BasicCheckBox label="기타" />
              </SelectCheckBox>
              <InputBox
                ref={registrationConditionsRef}
                height="10rem"
                marginbottom="1rem"
              />
              <div>제한 상세 사유를 입력하실 수 있습니다.</div>
            </Content>
          </Box>
        </Registert>
        <ButtonBox>
          <BasicButtonStyled
            onClick={handleRegistBtn}
            label="등록"
            width="8rem"
            height="4rem"
          />
        </ButtonBox>
      </RegistertBox>
    );
  };

  const handleSearchBtn = () => {
    alert('조회하기');
  };
  const renderDisturbSales = () => {
    return (
      <DisturbSalesBox>
        <div>판매방해 고객 리스트 [총 0건]</div>
        <InquiryConditionsBox>
          <InquiryConditions>
            <div>조회조건</div>
            <SelectBox width="10rem" list={InquiryConditionsTypeList} />
            <InputBox ref={disturbSalesRef} width="30rem" />
            <BasicButtonStyled
              onClick={handleSearchBtn}
              label="조회하기"
              width="10rem"
            />
          </InquiryConditions>
        </InquiryConditionsBox>
      </DisturbSalesBox>
    );
  };

  return (
    <div>
      <div>{renderRegistertionConditions()}</div>
      <div>{renderDisturbSales()}</div>
      <Table data={data} />
    </div>
  );
};

export default OrderDisturb;
const ResisterTypeList = [
  { label: '구매자ID', value: 'buyerID' },
  { label: '상품주문번호', value: 'productOrderNumber' },
];
const InquiryConditionsTypeList = [
  { label: '전체', value: 'all' },
  { label: '구매자ID', value: 'buyerID' },
  { label: '상품주문번호', value: 'productOrderNumber' },
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
