import { useRef, useState } from 'react';
import styled from 'styled-components';
import { Button as OriginButton } from 'antd';

import LabelContents from 'pages/Admin/components/Label/LabelContents';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicTable from 'pages/Admin/components/Table/Table';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';

import OrderSheetPrintModal from './OrderSheetPrintModal';
import AdressModifyModal from './AddressModifyModal';
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

const Table = ({
  sheetList,
  count,
  tableData,
  limit,
  handleTableChange,
  loading,
}) => {
  const allShipSearchInputRef = useRef(null);

  //Visible
  const [orderSheetPrintVisible, setOrderSheetPrintVisible] = useState(false); //선택건 주문서 출력
  const [adressModifyVisible, setAdressModifyVisible] = useState(false); //고객 배송지 정보수정
  const [saleCancelVisible, setSaleCancelVisible] = useState(false); //판매취소

  //Table Select Key/ Data
  const [selectedTableKeysState, setSelectedTableKeysState] = useState([]);
  const [selectedTableRowsState, setSelectedTableRowsState] = useState([]);

  //Table Data SelectBox Data Array
  const [shipTypeState, setShipTypeState] = useState([]); //배송방법
  const [shipcompanyState, setShipCompanyState] = useState([]); //택배사
  const [invoiceNumberState, setInvoiceNumberState] = useState([]); //송장번호

  //배송정보 한번에 입력
  const [allShipTypeState, setAllShipTypeState] = useState(); //배송방법
  const [allShipCompanyState, setAllShipCompanyState] = useState(); //배송회사

  const handleColumnsSetData = (value, index, state, setState) => {
    let _array = [...state];

    if (_array.length <= index) {
      _array = [..._array, value];
    } else {
      _array[index] = value;
    }
    setState(_array);
  };

  const columns = [
    {
      title: '주문번호',
      dataIndex: 'id',
      align: 'center',
      width: 100,
    },
    {
      title: '배송방법',
      dataIndex: 'ship_type',
      render: (_, record) => (
        <BasicSelectBox
          value={shipTypeState[record.key]}
          onChange={(value) => {
            handleColumnsSetData(
              value,
              record.key,
              shipTypeState,
              setShipTypeState,
            );
          }}
          list={deliveryTypeList}
        />
      ),
      align: 'center',
    },
    {
      title: '택배사',
      dataIndex: 'ship_company_name',
      render: (_, record) => (
        <BasicSelectBox
          list={deliveryCompanyList}
          value={shipcompanyState[record.key]}
          onChange={(value) => {
            handleColumnsSetData(
              value,
              record.key,
              shipcompanyState,
              setShipCompanyState,
            );
          }}
          disabled={shipTypeState[record.key] === 'delivery' ? '' : 'disabled'}
        />
      ),
      align: 'center',
    },
    {
      title: '송장번호',
      dataIndex: 'ship_number',
      render: (_, record) => (
        <BasicTextInputBox
          value={invoiceNumberState[record.key]}
          onChange={(value) => {
            handleColumnsSetData(
              value.target.value,
              record.key,
              invoiceNumberState,
              setInvoiceNumberState,
            );
          }}
          disabled={
            shipTypeState[record.key] !== 'delivery' ||
            shipcompanyState[record.key] === 'select' ||
            shipcompanyState[record.key] === undefined
              ? 'disabled'
              : ''
          }
        />
      ),
      align: 'center',
    },
    {
      title: '구매자명',
      dataIndex: 'buyer_name',
      align: 'center',
      width: 100,
    },
    {
      title: '구매자ID',
      dataIndex: 'buyer_id',
      align: 'center',
    },
    {
      title: '수취인명',
      dataIndex: 'recipient_name',
      align: 'center',
      width: 100,
    },
    {
      title: '주문상태',
      dataIndex: 'status',
      align: 'center',
      width: 100,
    },
    {
      title: '결제일',
      dataIndex: 'paid_at',
      align: 'center',
    },
    {
      title: '상품번호',
      dataIndex: 'product_id',
      align: 'center',
    },
    {
      title: '상품명',
      dataIndex: 'product_name',
      align: 'center',
    },
    {
      title: '옵션정보',
      dataIndex: 'option_name',
      align: 'center',
      width: 100,
    },
    {
      title: '수량',
      dataIndex: 'count',
      align: 'center',
      width: 100,
    },
    {
      title: '옵션가격',
      dataIndex: 'option_add_price',
      align: 'center',
      width: 100,
    },
    {
      title: '상품가격',
      dataIndex: 'price',
      align: 'center',
      width: 100,
    },
    {
      title: '총 주문금액',
      dataIndex: 'total_price',
      align: 'center',
      width: 130,
    },
    {
      title: '발주확인일',
      dataIndex: 'order_confirmed_at',
      align: 'center',
    },
    {
      title: '배송비 형태',
      dataIndex: 'ship_pay_type',
      align: 'center',
      width: 130,
    },
    {
      title: '배송비 유형',
      dataIndex: 'ship_category',
      align: 'center',
      width: 130,
    },
    {
      title: '배송비 합계',
      dataIndex: 'total_ship_amount',
      align: 'center',
      width: 130,
    },
    {
      title: '배송비 할인액',
      dataIndex: 'ship_discount_amount',
      align: 'center',
      width: 130,
    },
    {
      title: '수취인 연락처',
      dataIndex: 'recipient_phone',
      align: 'center',
    },
    {
      title: '배송지',
      dataIndex: 'ship_address_main',
      align: 'center',
    },
    {
      title: '구매자 연락처',
      dataIndex: 'buyer_phone',
      align: 'center',
    },
    {
      title: '우편번호',
      dataIndex: 'released_zip_code',
      align: 'center',
    },
    {
      title: '배송메세지',
      dataIndex: 'ship_message',
      align: 'center',
    },
    {
      title: '출고지',
      dataIndex: 'released_address_main',
      align: 'center',
    },
    {
      title: '주문일시',
      dataIndex: 'created_at',
      align: 'center',
    },
  ];

  const handleTableBtn = (id) => {
    switch (id) {
      case 'OrderConfirmation': {
        if (selectedTableRowsState.length > 0) {
          let allOrder = selectedTableRowsState.length;
          let order = selectedTableRowsState.length;
          var returnValue = window.confirm(
            `선택하신 ${allOrder}개의 주문 건 중 ${order}개 발주확인 처리 가능합니다. 발송기한 내 발송처리가 진행되지 않을 경우, 판매관리 패널티가 부여되며 구매고객에게는 상품준비중으로 노출됩니다. 발주확인 처리를 하시겠습니까?`,
          );
        } else {
          alert('배송정보를 선택해주세요.');
        }

        if (returnValue) {
          let allOrder = selectedTableRowsState.length;
          let order = selectedTableRowsState.length;
          alert(
            `${allOrder}건 중 ${order}건의 발주확인 처리가 완료되었습니다.`,
          );
        }
        break;
      }
      case 'orderAdressChange': {
        if (selectedTableRowsState.length === 1) {
          setAdressModifyVisible(true);
        } else if (selectedTableRowsState.length > 0) {
          alert('배송정보를 하나만 선택해주세요.');
        } else {
          alert('배송정보를 선택해주세요.');
        }

        break;
      }
      case 'saleCancel': {
        if (selectedTableRowsState.length > 0) {
          setSaleCancelVisible(true);
        } else {
          alert('배송정보를 선택해주세요.');
        }
        break;
      }
      default: {
        break;
      }
    }
  };
  const handleChange = (selectedRowKeys, selectedRows) => {
    console.log('selectedRows', selectedRows);
    setSelectedTableKeysState(selectedRowKeys);
    setSelectedTableRowsState(selectedRows);
  };

  const handleOrderSheetPrint = () => {
    if (selectedTableRowsState.length > 0) {
      setOrderSheetPrintVisible(true);
    } else {
      alert('배송정보를 선택해주세요');
    }
  };

  const handleAllShipTypeSelectOnChange = (value) => {
    setAllShipTypeState(value);
  };

  const handleAllShipCompanySelectBoxOnChange = (value) => {
    setAllShipCompanyState(value);
  };

  return (
    <Container>
      <SearchContainer>
        <LabelContents title="배송정보 한번에 입력하기">
          <PeirodSelectBox
            value={allShipTypeState}
            onChange={handleAllShipTypeSelectOnChange}
            list={deliveryTypeList}
          />
          <PeirodSelectBox
            value={allShipCompanyState}
            onChange={handleAllShipCompanySelectBoxOnChange}
            list={deliveryCompanyList}
            disabled={allShipTypeState === 'delivery' ? '' : 'disabled'}
          />
          <BasicTextInputBoxStyled ref={allShipSearchInputRef} />
          <Button>검색</Button>
        </LabelContents>
      </SearchContainer>

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

      <ButtonContainer>
        <Button onClick={handleOrderSheetPrint}>선택건 주문서 출력</Button>
      </ButtonContainer>

      <ButtomContainer>
        <LabelContents title="주문확인">
          <Button
            onClick={() => {
              handleTableBtn('OrderConfirmation');
            }}
          >
            발주확인
          </Button>
          <Button
            onClick={() => {
              handleTableBtn('orderAdressChange');
            }}
          >
            고객 배송지 정보수정
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
        </LabelContents>
      </ButtomContainer>

      <OrderSheetPrintModal
        centered
        visible={orderSheetPrintVisible}
        onOk={() => {
          setOrderSheetPrintVisible(true);
        }}
        onCancel={() => {
          setOrderSheetPrintVisible(false);
        }}
        width={500}
        okText="확인"
        cancelText="취소"
        selectedTableRowsState={selectedTableRowsState}
      ></OrderSheetPrintModal>

      <AdressModifyModal
        centered
        title="고객 배송지 정보수정"
        visible={adressModifyVisible}
        onOk={() => {
          setAdressModifyVisible(true);
        }}
        onCancel={() => {
          setAdressModifyVisible(false);
        }}
        width={500}
        okText="확인"
        cancelText="취소"
        selectedTableRowsState={selectedTableRowsState}
      ></AdressModifyModal>

      <SaleCancelModal
        centered
        title="선택건 판매취소"
        visible={saleCancelVisible}
        onOk={() => {
          setSaleCancelVisible(false);
        }}
        onCancel={() => {
          setSaleCancelVisible(false);
        }}
        width={500}
        okText="확인"
        cancelText="취소"
      ></SaleCancelModal>
    </Container>
  );
};

export default Table;

// const deliveryTypeList = [
//   { label: '선택', value: 'select' },
//   { label: '택배,등기,소포', value: 'delivery' },
//   { label: '퀵서비스', value: 'quick' },
//   { label: '방문수령', value: 'visit' },
//   { label: '직접전달', value: 'direct' },
// ];

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
