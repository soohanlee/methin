import { useRef, useState } from 'react';
import styled from 'styled-components';
import { Button as OriginButton, Modal, Input } from 'antd';

import LabelContents from 'pages/Admin/components/Label/LabelContents';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicTable from 'pages/Admin/components/Table/Table';

import OrderSheetModal from 'pages/Admin/Contents/sale/OrderConfirm/orderSheetModal';
import OrderCountTableModal from 'pages/Admin/Contents/sale/OrderConfirm/orderCountTableModal';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';

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
  width: 300px;
`;

const PeirodSelectBox = styled(SelectBox)`
  margin-right: 1rem;
`;

const ButtomContainer = styled.div`
  margin-top: 4rem;
`;

const Table = ({
  data,
  orderCountTableColumns,
  orderCountTableData,
  orderSheetList,
  tableData,
}) => {
  const invoiceNumber = useRef(null);

  const [orderVisible, setOrderVisible] = useState(false);
  const [orderSheetVisible, setOrderSheetVisible] = useState(false);
  const [orderCountTableVisible, setOrderCountTableVisible] = useState(false);

  const [orderFunction, setOrderFunction] = useState(false);

  const [orderConfirmFunction, setOrderConfirmFunction] = useState(false);
  const [orderDelayFunction, setOrderDelayFunction] = useState(false);
  const [orderAdressChangeFunction, setOrderAdressChangeFunction] = useState(
    false,
  );
  const [orderDateChangeFunction, setOrderDateChangeFunction] = useState(false);
  const [orderProcessFunction, setOrderProcessFunction] = useState(false);
  const [orderExcelFunction, setOrderExcelFunction] = useState(false);
  const [
    orderCombinedPackingFunction,
    setOrderCombinedPackingFunction,
  ] = useState(false);
  const [orderGoodsflowFunction, setOrderGoodsflowFunction] = useState(false);
  const [orderModifyFunction, setOrderModifyFunction] = useState(false);
  const [saleCancelFunction, setOrderCancelFunction] = useState(false);
  const [collectionCancelFunction, setCollectionFunction] = useState(false);
  const [label, setLabel] = useState('');

  const tableBtn = (id) => {
    setOrderVisible(true);

    switch (id) {
      case 'OrderConfirmation': {
        setLabel(
          '선택하신 1개의 주문 건 중 1개 발주확인 처리 가능합니다. 발송기한 내 발송처리가 진행되지 않을 경우, 판매관리 패널티가 부여되며 구매고객에게는 상품준비중으로 노출됩니다. 발주확인 처리를 하시겠습니까?',
        );
        setOrderFunction(orderConfirmFunction);
        break;
      }
      case 'orderDelay': {
        setLabel(
          '선택하신 1개의 주문 건 중 1개 발송지연 처리 가능합니다. 발송지연 처리는 1회만 가능하며 이후 수정(추가)이 불가합니다. 발송지연 처리를 진행하시겠습니까?',
        );
        setOrderFunction(orderDelayFunction);
        break;
      }
      case 'orderAdressChange': {
        setLabel(
          '선택하신 1개의 주문 건 중 1개 발주확인 처리 가능합니다. 발송기한 내 발송처리가 진행되지 않을 경우, 판매관리 패널티가 부여되며 구매고객에게는 상품준비중으로 노출됩니다. 발주확인 처리를 하시겠습니까?',
        );
        setOrderFunction(orderAdressChangeFunction);

        break;
      }
      case 'orderDateChange': {
        setLabel(
          '배송희망일 변경이 불가한 주문 건 입니다. 배송희망일 적용 상품 중 발송처리 하지 않은 주문 건만 변경 가능합니다.(단, 배송희망일 당일 이후 변경 불가)',
        );
        setOrderFunction(orderDateChangeFunction);
        break;
      }
      case 'order': {
        setLabel(
          '배송방법이 선택되지 않은 주문 건이 있습니다. 발송처리하실 배송방법을 선택해주세요.',
        );
        setOrderFunction(orderProcessFunction);

        break;
      }
      case 'orderExcel': {
        setLabel(
          '선택하신 1개의 주문 건 중 1개 발주확인 처리 가능합니다. 발송기한 내 발송처리가 진행되지 않을 경우, 판매관리 패널티가 부여되며 구매고객에게는 상품준비중으로 노출됩니다. 발주확인 처리를 하시겠습니까?',
        );
        setOrderFunction(orderExcelFunction);

        break;
      }
      case 'orderCombinedPacking': {
        setLabel(
          '선택하신 1개의 주문 건 중 1개 합포장 일괄 발송처리 가능합니다. 합포장 일괄 발송처리를 계속 진행하시겠습니까?',
        );
        setOrderFunction(orderCombinedPackingFunction);

        break;
      }
      case 'orderGoodsflow': {
        setLabel(
          '선택하신 1개의 주문 건 중 1개 발주확인 처리 가능합니다. 발송기한 내 발송처리가 진행되지 않을 경우, 판매관리 패널티가 부여되며 구매고객에게는 상품준비중으로 노출됩니다. 발주확인 처리를 하시겠습니까?',
        );
        setOrderFunction(orderGoodsflowFunction);

        break;
      }
      case 'orderModify': {
        setLabel(
          "송장수정은 주문사태가 '배송중'인 경우에만 가능합니다. 선택하신 주문 건은 '배송중' 상태가 아니므로 송장수정이 불가능 합니다.",
        );
        setOrderFunction(orderModifyFunction);

        break;
      }
      case 'saleCancel': {
        setLabel(
          '선택하신 1개의 주문 건 중 1개 발주확인 처리 가능합니다. 발송기한 내 발송처리가 진행되지 않을 경우, 판매관리 패널티가 부여되며 구매고객에게는 상품준비중으로 노출됩니다. 발주확인 처리를 하시겠습니까?',
        );
        setOrderFunction(saleCancelFunction);

        break;
      }
      case 'collectionCancel': {
        setLabel(
          "선택하신 1개의 주문 건 중 1개 판매취소 가능합니다. 실제 취소사유와 다르게 취소가 되는 경우, '고의적 부당행위'로 불이익이 발생할 수 있으므로 주의해주세요. 판매취소를 진행하시겠습니까?",
        );
        setOrderFunction(collectionCancelFunction);

        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <Container>
      <Modal
        title="주문서 출력"
        centered
        visible={orderVisible}
        onOk={() => {
          setOrderVisible(true);
        }}
        onCancel={() => {
          setOrderVisible(false);
        }}
        width={500}
        okText="확인"
        cancelText="취소"
      >
        {label}
      </Modal>

      <OrderSheetModal
        centered
        visible={orderSheetVisible}
        onOk={() => {
          setOrderSheetVisible(true);
        }}
        onCancel={() => {
          setOrderSheetVisible(false);
        }}
        width={500}
        okText="확인"
        cancelText="취소"
        orderSheetList={orderSheetList}
      >
        {label}
      </OrderSheetModal>

      <OrderCountTableModal
        centered
        visible={orderCountTableVisible}
        onOk={() => {
          setOrderCountTableVisible(true);
        }}
        onCancel={() => {
          setOrderCountTableVisible(false);
        }}
        width={500}
        okText="확인"
        cancelText="취소"
        orderCountTableColumns={orderCountTableColumns}
        orderCountTableData={orderCountTableData}
      >
        {label}
      </OrderCountTableModal>

      <SearchContainer>
        <LabelContents title="배송정보 한번에 입력하기">
          <PeirodSelectBox list={deliveryTypeList} />
          <PeirodSelectBox list={deliveryCompanyList} />
          <Input ref={invoiceNumber} />
        </LabelContents>
      </SearchContainer>

      <BasicTable data={tableData} columns={columns} selectionType="checkbox" />

      <ButtonContainer>
        <Button
          onClick={() => {
            setOrderSheetVisible(true);
          }}
        >
          선택건 주문서 출력
        </Button>
        <Button
          onClick={() => {
            setOrderCountTableVisible(true);
          }}
        >
          선택건 출고지/옵션별 주문수량 보기
        </Button>
      </ButtonContainer>

      <ButtomContainer>
        <LabelContents title="주문확인">
          <Button
            onClick={() => {
              tableBtn('OrderConfirmation');
            }}
          >
            발주확인
          </Button>
          <Button
            onClick={() => {
              tableBtn('orderDelay');
            }}
          >
            발송지연 처리
          </Button>
          <Button
            onClick={() => {
              tableBtn('orderAdressChange');
            }}
          >
            고객 배송지 정보수정
          </Button>
          <Button
            onClick={() => {
              tableBtn('orderDateChange');
            }}
          >
            배송희망일 변경
          </Button>
        </LabelContents>

        <LabelContents title="발송처리">
          <Button
            onClick={() => {
              tableBtn('order');
            }}
          >
            발송처리
          </Button>
          <Button
            onClick={() => {
              tableBtn('orderExcel');
            }}
          >
            엑셀 일괄 발송처리
          </Button>
          <Button
            onClick={() => {
              tableBtn('orderCombinedPacking');
            }}
          >
            합포장 일괄 발송처리
          </Button>
          <Button
            onClick={() => {
              tableBtn('orderGoodsflow');
            }}
          >
            굿스플로 송장출력
          </Button>
          <Button
            onClick={() => {
              tableBtn('orderModify');
            }}
          >
            송장수정
          </Button>
        </LabelContents>

        <LabelContents title="취소처리">
          <Button
            onClick={() => {
              tableBtn('saleCancel');
            }}
          >
            판매취소
          </Button>
          <Button
            onClick={() => {
              tableBtn('collectionCancel');
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
    title: '배송방법(구매자요청)',
    dataIndex: '',
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
    title: '배송추적',
    dataIndex: '',
  },
  {
    title: '발송일',
    dataIndex: '',
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
    title: '상품종류',
    dataIndex: '',
  },
  {
    title: '옵션정보',
    dataIndex: '',
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
    title: '발송기한',
    dataIndex: '',
  },
  {
    title: '발송처리일',
    dataIndex: '',
  },
  {
    title: '송장출력일',
    dataIndex: '',
  },
  {
    title: '배송비 형태',
    dataIndex: 'ship_pay_type',
  },
  {
    title: '배송비 묶음번호',
    dataIndex: '',
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
    title: '결제수단',
    dataIndex: '',
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
