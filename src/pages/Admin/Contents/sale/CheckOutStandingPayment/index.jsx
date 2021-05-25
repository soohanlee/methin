import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Table from 'pages/Admin/components/Table/Table';
import { Button } from 'antd';
import QueryItemModal from 'pages/Admin/Contents/sale/CheckOutStandingPayment/QueryItemModal';
import { getPaymentUnpaidList } from 'apis/payment';
import { notification } from 'utils/notification';

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
  const [QueryItemVisible, setQueryItemVisible] = useState(false);

  const [table, setTable] = useState([]);
  const [tableCount, setTableCount] = useState(0);

  useEffect(() => {
    async function fetchAndSetUser() {
      try {
        const result = await getPaymentUnpaidList();
        const customList = result.data.data.list.map((item) => {
          return { ...item, key: item.id };
        });
        // antd 에서 선택을 하려면 key라는 이름의 key값이 있어야하여 key를 주입

        setTable(customList);
        setTableCount(result.data.data.count);
      } catch (e) {
        notification.error('상품 정보를 가져오지 못했습니다.');
      }
    }
    fetchAndSetUser();
  }, []);

  return (
    <Container>
      <QueryItemModal
        visible={QueryItemVisible}
        setVisible={() => {
          setQueryItemVisible(false);
        }}
        onClick={() => {
          setQueryItemVisible(false);
        }}
        title="조회항목 설정(미결제확인)"
      />
      <TitleContainer>
        <Title>목록 (총 {tableCount}개)</Title>
        <ButtonContainer>
          <Button
            onClick={() => {
              setQueryItemVisible(true);
            }}
          >
            조회항목 설정
          </Button>
          <Button>엑셀다운</Button>
        </ButtonContainer>
      </TitleContainer>

      <Table data={table} columns={columns} />
    </Container>
  );
};

export default CheckOutStandingPayment;

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
    title: '구매자명',
    dataIndex: 'buyer_name',
  },
  {
    title: '구매자ID',
    dataIndex: 'buyer_id',
  },
  {
    title: '수취인명',
    dataIndex: 'recipient_name',
  },
  {
    title: '결제/입금기한',
    dataIndex: '',
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
    dataIndex: '',
  },
  {
    title: '수량',
    dataIndex: 'count',
  },
  {
    title: '상품가격',
    dataIndex: 'price',
  },
  {
    title: '옵션가격',
    dataIndex: 'option_add_price',
  },
  {
    title: '총 주문금액',
    dataIndex: 'total_price',
  },
  {
    title: '배송비 형태',
    dataIndex: '',
  },
  {
    title: '배송비 묶음번호',
    dataIndex: '',
  },
  {
    title: '배송비 유형',
    dataIndex: '',
  },
  {
    title: '배송비 합계',
    dataIndex: '',
  },
  {
    title: '배송비 할인액',
    dataIndex: '',
  },
  {
    title: '결제수단',
    dataIndex: '',
  },
];
