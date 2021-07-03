import { useRef, useState } from 'react';
import styled from 'styled-components';
import { Button as OriginButton } from 'antd';

import LabelContents from 'pages/Admin/components/Label/LabelContents';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicTable from 'pages/Admin/components/Table/Table';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';

import OrderSheetModal from './OrderSheetModal';
import ExcelModal from './ExcelModal';
import PackingModal from './PackingModal';
import SaleCancelModal from './SaleCancelModal';

const Container = styled.div`
  background: #fff;
  padding: 3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled(OriginButton)`
  margin-right: 0.5rem;
`;

const SearchContainer = styled.div`
  margin-bottom: 2rem;
`;

const SelectBox = styled(BasicSelectBox)`
  width: 20rem;
`;

const PeirodSelectBox = styled(SelectBox)`
  margin-right: 1rem;
`;

const BasicTextInputBoxStyled = styled(BasicTextInputBox)`
  width: 40rem;
`;
const ButtomContainer = styled.div`
  margin-top: 4rem;
`;

const Table = ({ sheetList, tableData }) => {
  const invoiceNumber = useRef(null);

  const [sheetVisibleState, setSheetVisibleState] = useState(false);
  const [excelVisibleState, setExcelVisibleState] = useState(false);
  const [packingVisibleState, setPackingVisibleState] = useState(false);
  const [saleCancelVisibleState, setSaleCancelVisibleState] = useState(false);

  const statusWord = [
    '결제대기',
    '결제완료',
    '상품준비',
    '배송중',
    '배송완료',
    '취소완료',
    '반품완료',
  ];

  const shipPayTypeWord = ['선불', '착불'];

  const shipCategoryWord = ['무료', '유료'];
  const NumDataToWord = () => {
    for (var i = 0; i < tableData.length; i++) {
      tableData[i].status[i] = statusWord[tableData[i].status[i]];
      tableData[i].ship_pay_type = shipPayTypeWord[tableData[i].ship_pay_type];
      tableData[i].ship_ship_category =
        shipCategoryWord[tableData[i].ship_ship_category];
    }
  };

  const handleTableBtn = (id) => {
    switch (id) {
      case 'order': {
        alert('선택하신 1개의 주문 건 중 1개를 발송처리했습니다.');
        break;
      }
      case 'orderExcel': {
        setExcelVisibleState(true);
        break;
      }
      case 'orderCombinedPacking': {
        setPackingVisibleState(true);
        break;
      }
      case 'saleCancel': {
        setSaleCancelVisibleState(true);
        break;
      }
      case 'pickup': {
        const result = window.confirm(
          '2개 송장 출력건에 대해 택배사에 집하취소 요청을 하시겠습니까?\n요청시 동일 송장번호 내 모든 주문건에 대해 집하 취소 처리가 진행됩니다.',
        );
        if (result) {
          alert('2건 중 2건의 집하취소 처리가 완료되었습니다.');
        }

        break;
      }
      default: {
        break;
      }
    }
  };
  NumDataToWord();
  return (
    <Container>
      <ExcelModal
        title="송장번호 일괄등록"
        centered
        visible={excelVisibleState}
        onOk={() => {
          setExcelVisibleState(false);
        }}
        onCancel={() => {
          setExcelVisibleState(false);
        }}
        width={500}
        okText="확인"
        cancelText="취소"
      ></ExcelModal>

      <PackingModal
        title="묶음그룹 일괄 발송처리"
        centered
        visible={packingVisibleState}
        onOk={() => {
          setPackingVisibleState(false);
        }}
        onCancel={() => {
          setPackingVisibleState(false);
        }}
        width={500}
        okText="확인"
        cancelText="취소"
      ></PackingModal>

      <OrderSheetModal
        centered
        visible={sheetVisibleState}
        onOk={() => {
          setSheetVisibleState(true);
        }}
        onCancel={() => {
          setSheetVisibleState(false);
        }}
        width={500}
        okText="확인"
        cancelText="취소"
        sheetList={sheetList}
      ></OrderSheetModal>

      <SaleCancelModal
        centered
        title="선택건 판매취소"
        visible={saleCancelVisibleState}
        onOk={() => {
          setSaleCancelVisibleState(false);
        }}
        onCancel={() => {
          setSaleCancelVisibleState(false);
        }}
        width={500}
        okText="확인"
        cancelText="취소"
        sheetList={sheetList}
      ></SaleCancelModal>

      <SearchContainer>
        <LabelContents title="배송정보 한번에 입력하기">
          <PeirodSelectBox list={deliveryTypeList} />
          <PeirodSelectBox list={deliveryCompanyList} />
          <BasicTextInputBoxStyled ref={invoiceNumber} />
          <Button>검색</Button>
        </LabelContents>
      </SearchContainer>

      <BasicTable
        scroll={{ x: '300vw', y: 500 }}
        data={tableData}
        columns={columns}
        selectionType="checkbox"
        onChange={() => {}}
      />

      <ButtonContainer>
        <Button
          onClick={() => {
            setSheetVisibleState(true);
          }}
        >
          선택건 주문서 출력
        </Button>
      </ButtonContainer>

      <ButtomContainer>
        <LabelContents title="발송처리">
          <Button
            onClick={() => {
              handleTableBtn('order');
            }}
          >
            발송처리
          </Button>
          <Button
            onClick={() => {
              handleTableBtn('orderExcel');
            }}
          >
            엑셀 일괄 발송처리
          </Button>
          <Button
            onClick={() => {
              handleTableBtn('orderCombinedPacking');
            }}
          >
            합포장 일괄 발송처리
          </Button>
        </LabelContents>

        <LabelContents title="취소처리">
          <Button
            onClick={() => {
              handleTableBtn('saleCancel');
            }}
          >
            판매취소
          </Button>
          <Button
            onClick={() => {
              handleTableBtn('pickup');
            }}
          >
            집하취소
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
  },
  {
    title: '배송방법',
    dataIndex: 'ship_type',
    render: () => <BasicSelectBox list={selctBoxList} />,
  },
  {
    title: '택배사',
    dataIndex: 'ship_company_name',
    render: () => <BasicSelectBox list={selctBoxList} disabled />,
  },
  {
    title: '송장번호',
    dataIndex: 'ship_number',
    render: () => <BasicTextInputBox list={selctBoxList} disabled />,
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
    title: '주문상태',
    dataIndex: 'status',
  },
  {
    title: '결제일',
    dataIndex: 'paid_at',
  },
  {
    title: '상품번호',
    dataIndex: 'product_id',
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
    title: '옵션가격',
    dataIndex: 'option_add_price',
  },
  {
    title: '상품가격',
    dataIndex: 'price',
  },
  {
    title: '총 주문금액',
    dataIndex: 'total_price',
  },
  {
    title: '발주확인일',
    dataIndex: 'order_confirmed_at',
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
    title: '배송비 할인액',
    dataIndex: 'ship_discount_amount',
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
    dataIndex: 'released_zip_code',
  },
  {
    title: '배송메세지',
    dataIndex: 'ship_message',
  },
  {
    title: '출고지',
    dataIndex: 'released_address_main',
  },
  {
    title: '주문일시',
    dataIndex: 'created_at',
  },
];

const selctBoxList = [
  { value: '1', label: '선택' },
  { value: '2', label: '택배,등기,소포' },
  { value: '3', label: '퀵서비스' },
  { value: '4', label: '방문수령' },
  { value: '4', label: '직접전달' },
];

const deliveryTypeList = [
  { label: '선택', value: 'select' },
  { label: '택배,등기,소포', value: 'delivery' },
  { label: '퀵서비스', value: 'quick' },
  { label: '방문수령', value: 'visit' },
  { label: '직접전달', value: 'direct' },
];

const deliveryCompanyList = [
  { label: '선택', value: 'select' },
  { label: 'CJ 대한통운', value: 'cj' },
];
