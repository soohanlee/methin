import { useEffect, useState } from 'react';
import styled from 'styled-components';

import BasicTable from 'pages/Admin/components/Table/Table';
import { Button } from 'antd';
import QueryItemModal from './QueryItemModal';
import { getPaymentUnpaidList } from 'apis/payment';
import { notification } from 'utils/notification';
import moment from 'moment';
import { DateFormat, COOKIE_KEYS } from 'configs/config';
import { CSVLink } from 'react-csv';
import { get, set } from 'js-cookie';
// 미결제 확인

const Container = styled.div`
  background: #fff;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

const ButtonContainer = styled.div`
  > button {
    &:last-child {
      margin-left: 1rem;
    }
  }
`;

const Title = styled.div`
  font-size: 2rem;
`;

const CheckOutStandingPayment = () => {
  const limit = 16;
  const [QueryItemVisibleState, setQueryItemVisibleState] = useState(false);
  const [tableDataState, setTableDataState] = useState([]);
  const [tableCountState, setTableCountState] = useState(0);
  const [productOffset, setProductOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedTableKeysState, setSelectedTableKeysState] = useState([]);
  const [selectColumnState, setSelectColumnState] = useState([]);
  const [columnFixedCountState, setColumnFixedCountState] = useState(0);

  useEffect(() => {
    setColumnFixedCountState(getGridCountCookie());
  }, []);

  useEffect(() => {
    getPaymentUnpaidListData(productOffset);
  }, [productOffset]);

  useEffect(() => {
    async function fetchAndSetUser() {
      await getPaymentUnpaidListData();
    }
    fetchAndSetUser();
  }, []);

  const getPaymentUnpaidListData = async (offset = 0) => {
    try {
      setLoading(true);
      const result = await getPaymentUnpaidList(offset);
      const list = result.data.data.list;
      const count = result.data.data.list.length;

      const newResult = list.map((item, index) => {
        let { created_at } = item;
        return {
          ...item,
          created_at: moment(created_at).format(DateFormat.Default),
          key: index,
        };
      });

      setTableDataState(newResult);
      setTableCountState(count);
      notification.success('미결제 정보를 가져왔습니다.');
    } catch (e) {
      notification.error('상품 정보를 가져오지 못했습니다.');
    }
    setLoading(false);
  };
  const handleTableChange = (pagination) => {
    setProductOffset(pagination.current - 1);
  };

  const handleChange = (selectedRowKeys, selectedRows) => {
    console.log('selectedRowKeys', selectedRowKeys);
    setSelectedTableKeysState(selectedRowKeys);
  };

  const selectColumn = () => {
    console.log(COOKIE_KEYS.CheckOutStandingPaymentTargetKeys);
    setSelectColumnState(get(COOKIE_KEYS.CheckOutStandingPaymentTargetKeys));
  };

  function getGridCountCookie() {
    const key = get(COOKIE_KEYS.CheckOutStandingPaymentGridCount);
    return key || null;
  }

  const handleQueryItemVisibleClick = () => {
    setQueryItemVisibleState(true);
    setColumnFixedCountState(getGridCountCookie());
  };

  return (
    <Container>
      <QueryItemModal
        visible={QueryItemVisibleState}
        setVisible={() => {
          setQueryItemVisibleState(false);
        }}
        onClick={() => {
          setQueryItemVisibleState(false);
        }}
        title="조회항목 설정(미결제확인)"
        selectColumn={selectColumn}
      />
      <TitleContainer>
        <Title>목록 (총 {tableCountState}개)</Title>
        <ButtonContainer>
          <Button onClick={handleQueryItemVisibleClick}>조회항목 설정</Button>
          <CSVLink
            data={tableDataState}
            headers={columns}
            filename={'미결제 상품 목록.csv'}
          >
            <Button>엑셀양식다운로드</Button>
          </CSVLink>
        </ButtonContainer>
      </TitleContainer>

      <BasicTable
        scroll={{ x: 'max-content', y: '35vw' }}
        data={tableDataState}
        columns={columns}
        onChange={handleChange}
        onTableChange={handleTableChange}
        loading={loading}
        total={tableCountState}
        pageSize={limit}
        fixedCount={columnFixedCountState}
      />

      <Button
        onClick={() => {
          set(COOKIE_KEYS.test, '1');
        }}
      >
        Save
      </Button>
      <Button
        onClick={() => {
          const getCount = get(COOKIE_KEYS.test);
          console.log(getCount);
        }}
      >
        Load
      </Button>
    </Container>
  );
};

export default CheckOutStandingPayment;

const columns = [
  {
    label: '주문번호',
    key: 'id',
    title: '주문번호',
    dataIndex: 'id',
    render: (Text) => <a href="https://www.naver.com">{Text}</a>,
    align: 'center',
    width: 130,
  },
  {
    label: '주문날짜',
    key: 'created_at',
    title: '주문날짜',
    dataIndex: 'created_at',
    align: 'center',
    width: 150,
  },
  {
    label: '구매자명',
    key: 'buyer_name',
    title: '구매자명',
    dataIndex: 'buyer_name',
    align: 'center',
    width: 130,
  },
  {
    label: '구매자ID',
    key: 'buyer_id',
    title: '구매자ID',
    dataIndex: 'buyer_id',
    align: 'center',
    width: 130,
  },
  {
    label: '수취인명',
    key: 'recipient_name',
    title: '수취인명',
    dataIndex: 'recipient_name',
    align: 'center',
    width: 130,
  },
  {
    label: '상품번호',
    key: 'product_id',
    title: '상품번호',
    dataIndex: 'product_id',
    render: (Text) => <a href="https://www.naver.com">{Text}</a>,
    align: 'center',
    width: 130,
  },
  {
    label: '상품명',
    key: 'product_name',
    title: '상품명',
    dataIndex: 'product_name',
    align: 'center',
    width: 150,
  },
  {
    label: '옵션',
    key: 'option_name',
    title: '옵션',
    dataIndex: 'option_name',
    align: 'center',
    width: 100,
  },
  {
    label: '수량',
    key: 'count',
    title: '수량',
    dataIndex: 'count',
    align: 'center',
    width: 100,
  },
  {
    label: '상품가격',
    key: 'price',
    title: '상품가격',
    dataIndex: 'price',
    align: 'center',
    width: 150,
  },
  {
    label: '옵션가격',
    key: 'option_add_price',
    title: '옵션가격',
    dataIndex: 'option_add_price',
    align: 'center',
    width: 150,
  },
  {
    label: '총 주문금액',
    key: 'total_price',
    title: '총 주문금액',
    dataIndex: 'total_price',
    align: 'center',
    width: 200,
  },
];
