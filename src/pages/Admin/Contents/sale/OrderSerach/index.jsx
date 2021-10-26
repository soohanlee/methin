import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Radio, Input } from 'antd';
import { getPaymentList } from 'apis/payment';

import LabelContents from 'pages/Admin/components/Label/LabelContents';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicDatePicker from 'pages/Admin/components/Form/BasicDatePicker';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import BasicTable from 'pages/Admin/components/Table/Table';
import { notification } from 'utils/notification';
import moment from 'moment';
import { DateFormat } from 'configs/config';

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
  const limit = 16;
  const [searchTypeState, setSearchTypeState] = useState(0); //조회기간 드랍박스
  const [datePeriodState, setDatePeriodState] = useState(0); //조회기간 기간버튼
  const [startDateState, setStartDateState] = useState(moment()); //시작날짜
  const [endDateState, setEndDateState] = useState(moment()); //종료날짜
  const [selectedTableKeysState, setSelectedTableKeysState] = React.useState(
    [],
  );
  const [searchDateTypeState, setSearchDateTypeState] = useState(0); //조회타입
  const searchInputRef = useRef(null); //조회타입인풋

  const [tableDataState, setTableDataState] = useState([]);
  const [tableCountState, setTableCountState] = useState(0);
  const [productOffset, setProductOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getApiPaymentData(productOffset);
  }, [productOffset]);

  useEffect(() => {
    async function fetchAndSetUser() {
      await getApiPaymentData();
    }
    fetchAndSetUser();
  }, []);

  const getApiPaymentData = async (offset = 0) => {
    try {
      setLoading(true);
      const result = await getPaymentList(offset);
      const list = result.data.data.list;
      const count = result.data.data.list.length;

      const newResult = list.map((item, index) => {
        let { status, created_at } = item;
        if (status === 0) {
          status = '결제대기';
        } else if (status === 1) {
          status = '결제완료';
        } else if (status === 2) {
          status = '상품준비';
        } else if (status === 3) {
          status = '배송중';
        } else if (status === 4) {
          status = '배송완료';
        } else if (status === 5) {
          status = '취소완료';
        } else {
          status = '반품완료';
        }
        return {
          ...item,
          status: status,
          created_at: moment(created_at).format(DateFormat.Default),
          key: index,
        };
      });

      setTableDataState(newResult);
      setTableCountState(count);

      notification.success('주문조회 검색성공');
    } catch (e) {
      notification.error('주문조회 검색실패');
    }
    setLoading(false);
  };

  const handleSearchType = (value) => {
    setSearchTypeState(value);
  };
  const handleStartDateChange = (value) => {
    setStartDateState(value);
  };

  const handleEndDateChange = (value) => {
    setEndDateState(value);
  };

  const handleSearchInput = (value) => {
    setSearchDateTypeState(value);
  };

  const handleSearchOnClick = () => {
    getApiPaymentData();
  };
  const handleTableChange = (pagination, filter, sort) => {
    setProductOffset(pagination.current - 1);
  };
  const handleChange = (selectedRowKeys, selectedRows) => {
    console.log('selectedRowKeys', selectedRowKeys);
    setSelectedTableKeysState(selectedRowKeys);
  };
  return (
    <Container>
      <HeaderContainer>
        <LabelContents title="조회기간">
          <ItemContainer>
            <ItemWrap>
              <PeirodSelectBox
                value={searchTypeState}
                onChange={handleSearchType}
                list={peirodList}
              />
            </ItemWrap>
            <ItemWrap>
              <ButtonContainer>
                <Radio.Group
                  value={datePeriodState}
                  onChange={(e) => setDatePeriodState(e.target.value)}
                >
                  <Radio.Button value={0}>오늘</Radio.Button>
                  <Radio.Button value={1}>1주일</Radio.Button>
                  <Radio.Button value={2}>1개월</Radio.Button>
                  <Radio.Button value={3}>3개월</Radio.Button>
                </Radio.Group>
              </ButtonContainer>
            </ItemWrap>
            <ItemWrap>
              <BasicDatePicker
                value={startDateState}
                onChange={handleStartDateChange}
              />
              {`　~　`}
              <BasicDatePicker
                value={endDateState}
                onChange={handleEndDateChange}
              />
            </ItemWrap>
          </ItemContainer>
        </LabelContents>
        <LabelContents title="조회기간">
          <ItemWrap>
            <SearhSelectBox
              value={searchDateTypeState}
              list={detailList}
              onChange={handleSearchInput}
            />
            <Input ref={searchInputRef} />
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
          <Title>목록 (총{tableCountState}개)</Title>
        </BodyHeaderContainer>

        <BasicTable
          scroll={{ x: '120vw', y: 500 }}
          data={tableDataState}
          columns={columns}
          onChange={handleChange}
          onTableChange={handleTableChange}
          loading={loading}
          total={tableCountState}
          pageSize={limit}
        />
      </BodyContainer>
    </Container>
  );
};

export default OrderSerach;

const peirodList = [
  { label: '결제일', value: 0 },
  { label: '발주 확인일', value: 1 },
  { label: '발송처리일', value: 2 },
];

const detailList = [
  { label: '전체', value: 0 },
  { label: '수취인명', value: 1 },
  { label: '구매자명', value: 2 },
  { label: '구매자연락처', value: 3 },
  { label: '구매자ID', value: 4 },
  { label: '주문번호', value: 5 },
  { label: '상품주문번호', value: 6 },
  { label: '상품번호', value: 7 },
  { label: '송장번호', value: 8 },
];

const columns = [
  {
    title: '주문번호',
    dataIndex: 'id',
    render: (Text) => <a href="https://www.naver.com">{Text}</a>,
    align: 'center',
    width: 100,
  },
  {
    title: '주문날짜',
    dataIndex: 'created_at',
    align: 'center',
    width: 130,
  },
  {
    title: '주문상태',
    dataIndex: 'status',
    align: 'center',
    width: 130,
  },
  {
    title: '상품번호',
    dataIndex: 'product_id',
    render: (Text) => <a href="https://www.naver.com">{Text}</a>,
    align: 'center',
    width: 100,
  },
  {
    title: '상품명',
    dataIndex: 'product_name',
    align: 'center',
    width: 150,
  },
  {
    title: '옵션',
    dataIndex: 'option_name',
    align: 'center',
    width: 100,
  },
  {
    title: '수량',
    dataIndex: 'total_product_count',
    align: 'center',
    width: 100,
  },
  {
    title: '구매자명',
    dataIndex: 'buyer_name',
    align: 'center',
    width: 100,
  },
  {
    title: '구매자 ID',
    dataIndex: 'buyer_id',
    align: 'center',
    width: 130,
  },
  {
    title: '수취인명',
    dataIndex: 'recipient_name',
    align: 'center',
    width: 100,
  },
];
