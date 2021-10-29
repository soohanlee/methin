import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button as OriginButton } from 'antd';

import LabelContents from 'pages/Admin/components/Label/LabelContents';
import BasicTable from 'pages/Admin/components/Table/Table';
import DirectReturnModal from './DirectReturnModal';
import DirectExchangeModal from './DirectExchangeModal';
import ModifyInvoiceModal from './ModifyInvoiceModal';
import { CSVLink } from 'react-csv';
const Container = styled.div`
  background: #fff;
  padding: 3rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
`;

const Title = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled(OriginButton)`
  margin-right: 0.5rem;
`;

const ButtomContainer = styled.div`
  margin-top: 4rem;
`;

const Table = ({
  shipCompanyDataState,
  tableData,
  count,
  limit,
  handleTableChange,
  loading,
}) => {
  const [directReturnVisibleState, setDirectReturnVisibleState] = useState(
    false,
  );
  const [directExchangeVisibleState, setDirectExchangeVisibleState] = useState(
    false,
  );
  const [modifyInvoiceVisibleState, setModifyInvoiceVisibleState] = useState(
    false,
  );
  const [selectedTableKeysState, setSelectedTableKeysState] = useState([]);
  const [selectedTableRowsState, setSelectedTableRowsState] = useState([]);

  const handleButtonClick = (type) => {
    switch (type) {
      case 'directReturn':
        if (selectedTableRowsState.length < 1) {
          alert('배송정보를 선택해주세요.');
        } else if (selectedTableRowsState.length > 1) {
          alert('배송정보를 하나만 선택해주세요.');
        } else {
          setDirectReturnVisibleState(true);
        }
        break;
      case 'directExchange':
        if (selectedTableRowsState.length < 1) {
          alert('배송정보를 선택해주세요.');
        } else if (selectedTableRowsState.length > 1) {
          alert('배송정보를 하나만 선택해주세요.');
        } else {
          setDirectExchangeVisibleState(true);
        }
        break;
      case 'modifyInvoice':
        if (selectedTableRowsState.length > 0) {
          let isShipping = true;
          selectedTableRowsState.forEach((item) => {
            if (item.status !== '배송중') {
              isShipping = false;
            }
          });

          if (isShipping === true) {
            setModifyInvoiceVisibleState(true);
          } else {
            alert(
              "송장수정은 주문상태가 '배송중'인 경우에만 가능합니다.\n 선택하신 주문 건은 '배송중' 상태가 아니므로 송장수정이 불가능 합니다.",
            );
          }
          return;
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (selectedRowKeys, selectedRows) => {
    console.log('selectedRowKeys', selectedRowKeys);
    setSelectedTableKeysState(selectedRowKeys);
    setSelectedTableRowsState(selectedRows);
  };

  return (
    <Container>
      <DirectReturnModal
        centered
        title="판매자 직접 반품접수"
        visible={directReturnVisibleState}
        onOk={() => {
          setDirectReturnVisibleState(false);
        }}
        onCancel={() => {
          setDirectReturnVisibleState(false);
        }}
        width={500}
        selectedTableRowsState={selectedTableRowsState}
      ></DirectReturnModal>

      <DirectExchangeModal
        centered
        title="판매자 직접 교환접수"
        visible={directExchangeVisibleState}
        onOk={() => {
          setDirectExchangeVisibleState(false);
        }}
        onCancel={() => {
          setDirectExchangeVisibleState(false);
        }}
        width={500}
        selectedTableRowsState={selectedTableRowsState}
      ></DirectExchangeModal>

      <ModifyInvoiceModal
        centered
        title="송장수정 처리"
        visible={modifyInvoiceVisibleState}
        onOk={() => {
          setModifyInvoiceVisibleState(false);
        }}
        onCancel={() => {
          setModifyInvoiceVisibleState(false);
        }}
        width={500}
        selectedTableRowsState={selectedTableRowsState}
        shipCompanyDataState={shipCompanyDataState}
      ></ModifyInvoiceModal>

      <HeaderContainer>
        <Title>목록(총 {count}개)</Title>
        <ButtonContainer>
          <CSVLink
            data={tableData}
            headers={columns}
            filename={'배송현황 목록.csv'}
          >
            <Button>엑셀다운</Button>
          </CSVLink>
        </ButtonContainer>
      </HeaderContainer>

      <BasicTable
        scroll={{ x: 'max-content', y: '20vw' }}
        data={tableData}
        columns={columns}
        selectionType="checkbox"
        onChange={handleChange}
        onTableChange={handleTableChange}
        loading={loading}
        total={count}
        pageSize={limit}
      />

      <ButtomContainer>
        <LabelContents title="교환/반품">
          <Button
            onClick={() => {
              handleButtonClick('directReturn');
            }}
          >
            판매자 직접 반품
          </Button>
          <Button
            onClick={() => {
              handleButtonClick('directExchange');
            }}
          >
            판매자 직접 교환
          </Button>
        </LabelContents>

        <LabelContents title="정보 수정">
          <Button
            onClick={() => {
              handleButtonClick('modifyInvoice');
            }}
          >
            송장수정
          </Button>
        </LabelContents>
      </ButtomContainer>
    </Container>
  );
};

export default Table;

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
    label: '발송처리일',
    key: 'ship_confirmedProcess_at',
    title: '발송처리일',
    dataIndex: 'ship_confirmedProcess_at',
    align: 'center',
    width: 160,
  },
  {
    label: '주문상태',
    key: 'status',
    title: '주문상태',
    dataIndex: 'status',
    align: 'center',
    width: 130,
  },
  {
    label: '배송방법',
    key: 'ship_type',
    title: '배송방법',
    dataIndex: 'ship_type',
    align: 'center',
    width: 150,
  },
  {
    label: '택배사',
    key: 'ship_company_name',
    title: '택배사',
    dataIndex: 'ship_company_name',
    align: 'center',
    width: 130,
  },
  {
    label: '송장번호',
    key: 'ship_number',
    title: '송장번호',
    dataIndex: 'ship_number',
    align: 'center',
  },
  {
    label: '발송일',
    key: 'ship_confirmed_at',
    title: '발송일',
    dataIndex: 'ship_confirmed_at',
    align: 'center',
    width: 130,
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
    width: 130,
  },
  {
    label: '옵션정보',
    key: 'option_name',
    title: '옵션정보',
    dataIndex: 'option_name',
    align: 'center',
    width: 130,
  },
  {
    label: '수량',
    key: 'total_product_count',
    title: '수량',
    dataIndex: 'total_product_count',
    align: 'center',
    width: 130,
  },
  {
    label: '상품가격',
    key: 'final_paid_amount',
    title: '상품가격',
    dataIndex: 'final_paid_amount',
    align: 'center',
    width: 130,
  },
  {
    label: '총 주문금액',
    key: 'final_paid_amount',
    title: '총 주문금액',
    dataIndex: 'final_paid_amount',
    align: 'center',
    width: 130,
  },
  {
    label: '결제일',
    key: 'paid_at',
    title: '결제일',
    dataIndex: 'paid_at',
    align: 'center',
    width: 130,
  },
  {
    label: '배송비 형태',
    key: 'ship_pay_type',
    title: '배송비 형태',
    dataIndex: 'ship_pay_type',
    align: 'center',
    width: 130,
  },
  {
    label: '배송비 유형',
    key: 'ship_category',
    title: '배송비 유형',
    dataIndex: 'ship_category',
    align: 'center',
    width: 130,
  },
  {
    label: '배송비 합계',
    key: 'ship_amount',
    title: '배송비 합계',
    dataIndex: 'ship_amount',
    align: 'center',
    width: 130,
  },
  {
    label: '제주/도서 추가배송비',
    key: 'ship_add_amount',
    title: '제주/도서 추가배송비',
    dataIndex: 'ship_add_amount',
    align: 'center',
    width: 200,
  },
  {
    label: '수취인 연락처',
    key: 'recipient_phone',
    title: '수취인 연락처',
    dataIndex: 'recipient_phone',
    align: 'center',
  },
  {
    label: '배송지',
    key: 'ship_address_main',
    title: '배송지',
    dataIndex: 'ship_address_main',
    align: 'center',
  },
  {
    label: '구매자 연락처',
    key: 'buyer_phone',
    title: '구매자 연락처',
    dataIndex: 'buyer_phone',
    align: 'center',
  },
  {
    label: '우편번호',
    key: 'ship_zip_code',
    title: '우편번호',
    dataIndex: 'ship_zip_code',
    align: 'center',
    width: 130,
  },
];
