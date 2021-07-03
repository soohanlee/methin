import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Radio, Input } from 'antd';
import { getPaymentList } from 'apis/payment';

import LabelContents from 'pages/Admin/components/Label/LabelContents';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicDatePicker from 'pages/Admin/components/Form/BasicDatePicker';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
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
  justify-content: center;
  margin-bottom: 5rem;
`;

const BodyHeaderContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.div`
  font-size: 2rem;
`;

const BasicButtonStyled = styled(BasicButton)`
  width: 10rem;
`;
const OrderSerach = () => {
  const limite = 16;
  const [datePeriodState, setDatePeriodStat] = useState('');
  const [tableDataStat, setTableDataStat] = useState([]);
  const [tableCountStat, setTableCountStat] = useState(0);
  const periodRef = useRef(null);

  const wordData = [
    '결제대기',
    '결제완료',
    '상품준비',
    '배송중',
    '배송완료',
    '취소완료',
    '반품완료',
  ];

  useEffect(() => {
    async function fetchData() {
      await getApiPaymentData();
    }
    fetchData();
  }, []);

  const getApiPaymentData = async () => {
    try {
      const result = await getPaymentList(0);

      const count = result.data.data.count;
      const maxOffset = Math.floor(count / limite) + 1;
      let customList = [];
      for (let i = 0; i < maxOffset; i++) {
        const _result = await getPaymentList(i);
        customList = customList.concat(_result.data.data.list);
      }

      setTableDataStat(customList);
      setTableCountStat(customList.length);

      notification.success('검색 성공');
    } catch (e) {
      notification.error(e);
    }
  };

  const handleStartDateChange = (value) => {
    console.log(value);
  };

  const handleEndDateChange = (value) => {
    console.log(value);
  };

  const handleSearchOnClick = () => {
    getApiPaymentData();
  };

  const NumDataToWord = () => {
    for (var i = 0; i < tableDataStat.length; i++) {
      tableDataStat[i].status = wordData[i];
    }
  };

  NumDataToWord();

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
                  value={datePeriodState}
                  onChange={(e) => setDatePeriodStat(e.target.value)}
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
          <ButtonContainer>
            <BasicButtonStyled
              onClick={handleSearchOnClick}
              label="검색"
            ></BasicButtonStyled>
          </ButtonContainer>
          <Title>목록 (총{tableCountStat}개)</Title>
        </BodyHeaderContainer>

        <Table
          scroll={{ x: '120vw', y: 500 }}
          selectionType="checkbox"
          data={tableDataStat}
          columns={columns}
          onChange={() => {}}
        />
      </BodyContainer>
    </Container>
  );
};

export default OrderSerach;

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
    title: '옵션',
    dataIndex: 'option_name',
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
