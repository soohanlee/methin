import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Radio, Input } from 'antd';
import { getPaymentList } from 'apis/payment';

import LabelContents from 'pages/Admin/components/Label/LabelContents';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicDatePicker from 'pages/Admin/components/Form/BasicDatePicker';
import Table from 'pages/Admin/components/Table/Table';
import { notification } from 'utils/notification';

// 주문통합검색
const SelectBox = styled(BasicSelectBox)`
  width: 300px;
`;

const PeirodSelectBox = styled(SelectBox)`
  margin-bottom: 1rem;
`;

const SearhSelectBox = styled(SelectBox)`
  margin-right: 1rem;
`;

const Container = styled.div``;

const HeaderContainer = styled.div`
  background: #fff;
  padding: 3rem;
  margin-bottom: 2rem;
`;

const BodyContainer = styled.div`
  background: #fff;
  padding: 3rem;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemWrap = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const BodyHeaderContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.div`
  font-size: 2rem;
`;

const OrderManage = () => {
  const [datePeriod, setDatePeriod] = useState('');
  const [table, setTable] = useState([]);
  const [tableLength, setTableLength] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getPaymentList();
        console.log(result);
        setTable(result.data.data.list);
        setTableLength(result.data.data.count);
      } catch (e) {
        notification.error(e);
      }
    }
    fetchData();
  }, []);

  const handleStartDateChange = (value) => {
    console.log(value);
  };

  const handleEndDateChange = (value) => {
    console.log(value);
  };

  const periodRef = useRef(null);

  return (
    <Container>
      <HeaderContainer>
        <LabelContents title="조회기간">
          <ItemContainer>
            <ItemWrap>
              <PeirodSelectBox list={peirodList} />
            </ItemWrap>
            <ItemWrap>
              <ButtonContainer>
                <Radio.Group
                  value={datePeriod}
                  onChange={(e) => setDatePeriod(e.target.value)}
                >
                  <Radio.Button value="today">오늘</Radio.Button>
                  <Radio.Button value="1week">1주일</Radio.Button>
                  <Radio.Button value="1month">1개월</Radio.Button>
                  <Radio.Button value="3month">3개월</Radio.Button>
                </Radio.Group>
              </ButtonContainer>
            </ItemWrap>
            <ItemWrap>
              <BasicDatePicker onChange={handleStartDateChange} />
              {`　~　`}
              <BasicDatePicker onChange={handleEndDateChange} />
            </ItemWrap>
          </ItemContainer>
        </LabelContents>
        <LabelContents title="조회기간">
          <ItemWrap>
            <SearhSelectBox list={detailList} />
            <Input ref={periodRef} />
          </ItemWrap>
        </LabelContents>
      </HeaderContainer>

      <BodyContainer>
        <BodyHeaderContainer>
          <Title>목록 (총{table.length}개)</Title>
        </BodyHeaderContainer>
        <Table selectionType="checkbox" data={table} columns={columns} />
      </BodyContainer>
    </Container>
  );
};

export default OrderManage;

const peirodList = [
  { label: '결제일', value: 'pament' },
  { label: '발주 확인일', value: 'orderConfirm' },
  { label: '발송처리일', value: 'orderProcess' },
];

const detailList = [
  { label: '전체', value: 'all' },
  { label: '수취인명', value: 'nameOfRecipient' },
  { label: '구매자명', value: 'buyerName' },
  { label: '구매자연락처', value: 'buyerContact' },
  { label: '구매자ID', value: 'buyerID' },
  { label: '주문번호', value: 'orderNumber' },
  { label: '상품주문번호', value: 'productOrderNumber' },
  { label: '상품번호', value: 'productNumber' },
  { label: '송장번호', value: 'invoiceNumber' },
];

const columns = [
  {
    title: '주문번호',
    dataIndex: 'id',
    render: (Text) => <a href="https://www.naver.com">{Text}</a>,
  },
  {
    title: '주문날짜',
    dataIndex: 'created_at',
  },
  {
    title: '주문상태',
    dataIndex: 'status',
  },
  {
    title: '상품번호',
    dataIndex: 'product_id',
    render: (Text) => <a href="https://www.naver.com">{Text}</a>,
  },
  {
    title: '상품명',
    dataIndex: 'product_name',
  },

  {
    title: '수량',
    dataIndex: 'count',
  },
  {
    title: '구매자명',
    dataIndex: 'buyer_name',
  },
  {
    title: '구매자 ID',
    dataIndex: 'buyer_id',
  },
  {
    title: '수취인명',
    dataIndex: 'recipient_name',
  },
];
