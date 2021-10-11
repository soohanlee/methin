import React from 'react';
import styled, { css } from 'styled-components';
import { Input } from 'components/styled/Form';
import { MainButton } from 'components/styled/Button';
import { Empty } from 'antd';

const Container = styled.div``;

const CustomInput = styled(Input)`
  width: 210px;
  height: 34px;
  padding: 0 10px;
  margin-right: 10px;
  border: 1px solid #514859;
  font-size: 12px;
  color: #000;
  line-height: 32px;
  outline: none;
  letter-spacing: -0.6px;
  display: inline-block;
  &::placeholder {
    font-size: 1.2rem;
  }
`;

const Button = styled(MainButton)`
  width: 140px;
  height: 34px;
  border: none;
  font-size: 12px;
  color: #fff;
  line-height: 32px;
  display: inline-block;
`;

const Span = styled.span`
  display: block;
  padding-top: 13px;
  font-size: 12px;
  color: #f03f40;
  line-height: 18px;
`;

const Title = styled.div`
  font-size: 2.3rem;
  margin-bottom: 3rem;
`;

const RegisterContainer = styled.div`
  padding: 19px 0 14px 29px;
  border: 1px solid #ddd;
`;

const CouponList = styled.section``;

const CouponTableDescription = styled.div`
  display: flex;
  justify-content: space-between;
  color: #666;
  font-weight: 400;
  padding: 35px 0 15px;
`;

const Info = styled.span`
  font-size: 12px;
`;

const CouponCount = styled(Info)``;

const Table = styled.table`
  width: 100%;
`;

const Caption = styled.caption`
  display: none;
`;

const Thead = styled.thead`
  border-top: 2px solid #333;
  border-bottom: 1px solid #333;
  font-size: 14px;
  font-weight: 700;
  color: #333;
  letter-spacing: -0.5px;
  line-height: 20px;
  width: 100%;
`;

const Tr = styled.tr`
  width: 100%;
  > th:nth-child(1) {
    min-width: 400px;
    padding-left: 20px;
  }
  > th:nth-child(2) {
    min-width: 70px;
  }
  > th:nth-child(3) {
    min-width: 100px;
  }
  > th:nth-child(4) {
    min-width: 150px;
  }
  > th:nth-child(5) {
    min-width: 100px;
  }
  > th,
  td {
    word-break: break-word;
    &:nth-child(1) {
      padding-left: 20px;
      text-align: left;
    }
  }
  > th {
    padding: 20px 0;
    border-bottom: 1px solid #f4f4f4;
  }
  > td {
    text-align: center;
    padding: 20px 0;
    border-bottom: 1px solid #f4f4f4;
  }
`;

const Th = styled.th`
  text-align: center;
`;

const NameTh = styled(Th)`
  padding-left: 20px;
`;

const Tbody = styled.tbody``;

const Td = styled.td``;

const list = [
  {
    id: '1',
    title: '쿠폰이름',
    option: '할인',
    sale: '10%',
    date: '2014-05-10 - 2015-05-10',
    isUsed: false,
  },
  {
    id: '2',
    title: '쿠폰이름',
    option: '할인',
    sale: '10%',
    date: '2014-05-10 - 2015-05-10',
    isUsed: false,
  },
];

const Coupon = () => {
  const renderTbody = () => {
    if (list.length === 0) {
      return <Empty />;
    } else {
      return list.map((item) => {
        const { id, title, option, sale, date, isUsed } = item;
        return (
          <Tr key={id}>
            <Td>{title}</Td>
            <Td>{option}</Td>
            <Td>{sale}</Td>
            <Td>{date}</Td>
            <Td>{isUsed ? '사용' : '미사용'}</Td>
          </Tr>
        );
      });
    }
  };

  return (
    <Container>
      <Title>쿠폰</Title>

      <RegisterContainer>
        <CustomInput placeholder={'쿠폰을 입력해주세요'} />
        <Button>쿠폰 등록</Button>
        <Span>
          쿠폰에 하이픈("-")이 포함되어 있을 경우 하이픈("-")을 반드시
          입력해주세요.
        </Span>
      </RegisterContainer>
      <CouponList>
        <CouponTableDescription>
          <Info>
            쿠폰은 적용 가능한 상품이 따로 적용되어 있는 경우 해당 상품 구매
            시에만 사용이 가능합니다.
          </Info>
          <CouponCount>사용가능쿠폰: 0장</CouponCount>
        </CouponTableDescription>
        <Table>
          <Caption>쿠폰 상세 내역</Caption>
          <Thead>
            <Tr>
              <NameTh>쿠폰명</NameTh>
              <Th>기능</Th>
              <Th>할인/적립</Th>
              <Th>사용가능기간</Th>
              <Th>사용여부</Th>
            </Tr>
          </Thead>
          <Tbody>{renderTbody()}</Tbody>
        </Table>
      </CouponList>
    </Container>
  );
};

export default Coupon;
