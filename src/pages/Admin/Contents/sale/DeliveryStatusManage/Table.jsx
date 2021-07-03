import React, { useState } from 'react';
import styled from 'styled-components';
import { Button as OriginButton } from 'antd';

import LabelContents from 'pages/Admin/components/Label/LabelContents';
import OriginTable from 'pages/Admin/components/Table/Table';
import DirectReturnModal from './DirectExchangeModal';
import DirectExchangeModal from './DirectExchangeModal';
import ModifyInvoiceModal from './ModifyInvoiceModal';

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

const Table = ({ tableData, count }) => {
  const [directReturnVisibleState, setDirectReturnVisibleState] = useState(
    false,
  );
  const [directExchangeVisibleState, setDirectExchangeVisibleState] = useState(
    false,
  );
  const [modifyInvoiceVisibleState, setModifyInvoiceVisibleState] = useState(
    false,
  );

  const NumDataToWord = () => {
    //주문상태
    for (var i = 0; i < tableData.length; i++) {
      switch (tableData[i].status) {
        case 0:
          tableData[i].status = '결제대기';
          break;
        case 1:
          tableData[i].status = '결제완료';
          break;
        case 2:
          tableData[i].status = '상품준비';
          break;
        case 3:
          tableData[i].status = '배송중';
          break;
        case 4:
          tableData[i].status = '배송완료';
          break;
        case 5:
          tableData[i].status = '취소완료';
          break;
        case 6:
          tableData[i].status = '반품완료';
          break;
        default:
          break;
      }
      //배송비형태
      switch (tableData[i].ship_pay_type) {
        case 0:
          tableData[i].ship_pay_type = '선불';
          break;
        case 1:
          tableData[i].ship_pay_type = '착불';
          break;
        default:
          break;
      }
      switch (tableData[i].ship_category) {
        case 0:
          tableData[i].ship_category = '무료';
          break;
        case 1:
          tableData[i].ship_category = '유료';
          break;
        default:
          break;
      }
    }
  };

  const handleButtonClick = (type) => {
    switch (type) {
      case 'directReturn':
        setDirectReturnVisibleState(true);
        break;
      case 'directExchange':
        setDirectExchangeVisibleState(true);
        break;
      case 'modifyInvoice':
        setModifyInvoiceVisibleState(true);
        break;
      default:
        break;
    }
  };

  NumDataToWord();
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
      ></ModifyInvoiceModal>

      <HeaderContainer>
        <Title>목록(총 {count}개)</Title>
        <ButtonContainer>
          <Button>엑셀다운</Button>
        </ButtonContainer>
      </HeaderContainer>

      <OriginTable
        scroll={{ x: '300vw', y: 500 }}
        data={tableData}
        columns={columns}
        selectionType="checkbox"
        onChange={() => {}}
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
    title: '주문번호',
    dataIndex: 'id',
    render: (Text) => <a href="https://www.naver.com">{Text}</a>,
  },
  {
    title: '발송처리일',
    dataIndex: 'ship_confirmed_at',
  },
  {
    title: '주문상태',
    dataIndex: 'status',
  },
  {
    title: '배송방법',
    dataIndex: 'ship_type',
  },
  {
    title: '택배사',
    dataIndex: 'ship_company_name',
  },
  {
    title: '송장번호',
    dataIndex: 'ship_number',
  },
  {
    title: '발송일',
    dataIndex: 'ship_confirmed_at',
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
    title: '상품번호',
    dataIndex: 'product_id',
    render: (Text) => <a href="https://www.naver.com">{Text}</a>,
  },
  {
    title: '상품명',
    dataIndex: 'product_name',
  },
  {
    title: '옵션정보',
    dataIndex: 'option_name',
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
    title: '결제일',
    dataIndex: 'paid_at',
  },
  {
    title: '배송비 형태',
    dataIndex: 'ship_pay_type',
  },
  {
    title: '배송비 유형',
    dataIndex: 'ship_category',
  },
  {
    title: '배송비 합계',
    dataIndex: 'total_ship_amount',
  },
  {
    title: '제주/도서 추가배송비',
    dataIndex: 'ship_add_amount',
  },
  {
    title: '수취인 연락처',
    dataIndex: 'recipient_phone',
  },
  {
    title: '배송지',
    dataIndex: 'ship_address_main',
  },
  {
    title: '구매자 연락처',
    dataIndex: 'buyer_phone',
  },
  {
    title: '우편번호',
    dataIndex: 'ship_zip_code',
  },
];
