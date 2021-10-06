import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Button as OriginButton } from 'antd';

import LabelContents from 'pages/Admin/components/Label/LabelContents';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicTable from 'pages/Admin/components/Table/Table';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import OrderSheetPrintModal from 'pages/Admin/Contents/sale/OrderConfirm/OrderSheetPrintModal';
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

const Table = ({ tableData, count, limit, handleTableChange, loading }) => {
  const invoiceNumber = useRef(null);

  const [
    orderSheetPrintVisalbleState,
    setOrderSheetPrintVisualState,
  ] = useState(false);
  const [excelVisibleState, setExcelVisibleState] = useState(false);
  const [packingVisibleState, setPackingVisibleState] = useState(false);
  const [saleCancelVisibleState, setSaleCancelVisibleState] = useState(false);
  const [selectedTableKeysState, setSelectedTableKeysState] = useState([]);
  const [selectedTableRowsState, setSelectedTableRowsState] = useState([]);

  //Table Data SelectBox Data Array
  const [shipTypeState, setShipTypeState] = useState('select'); //배송방법
  const [shipCompanyState, setShipCompanyState] = useState('select'); //택배사
  const [invoiceNumberState, setInvoiceNumberState] = useState([]); //송장번호

  const [dataShipTypeState, setDataShipTypeState] = useState([]);
  const [dataShipCompanyState, setDataShipCompanyState] = useState([]);
  const [dataInvoiceNumberState, setDataInvoiceNumberState] = useState([]);
  const [tableDataState, setTableDataState] = useState();

  useEffect(() => {
    setTableDataState(tableData);
    resetData();
  }, [tableData]);

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
      width: 110,
    },
    {
      title: '배송방법',
      dataIndex: 'shiptype',
      render: (_, record) => (
        <BasicSelectBox
          value={dataShipTypeState[record.key]}
          onChange={(value) => {
            handleColumnsSetData(
              value,
              record.key,
              dataShipTypeState,
              setDataShipTypeState,
            );
          }}
          list={deliveryTypeList}
        />
      ),
      align: 'center',
      width: 200,
    },
    {
      title: '택배사',
      dataIndex: 'shipcompany',
      render: (_, record) => (
        <BasicSelectBox
          value={dataShipCompanyState[record.key]}
          onChange={(value) => {
            handleColumnsSetData(
              value,
              record.key,
              dataShipCompanyState,
              setDataShipCompanyState,
            );
          }}
          disabled={dataShipTypeState[record.key] !== 'delivery'}
          list={deliveryCompanyList}
        />
      ),
      align: 'center',
      width: 200,
    },
    {
      title: '송장번호',
      dataIndex: 'invoiceNumber',
      render: (_, record) => (
        <BasicTextInputBox
          value={dataInvoiceNumberState[record.key]}
          onChange={(value) => {
            handleColumnsSetData(
              value.target.value,
              record.key,
              dataInvoiceNumberState,
              setDataInvoiceNumberState,
            );
          }}
          disabled={
            dataShipTypeState[record.key] !== 'delivery' ||
            dataShipCompanyState[record.key] === 'select' ||
            dataShipCompanyState[record.key] === undefined
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
      width: 130,
    },
    {
      title: '구매자ID',
      dataIndex: 'buyer_id',
      align: 'center',
      width: 130,
    },
    {
      title: '수취인명',
      dataIndex: 'recipient_name',
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
      title: '결제일',
      dataIndex: 'paid_at',
      align: 'center',
    },
    {
      title: '상품번호',
      dataIndex: 'product_id',
      align: 'center',
      width: 150,
    },
    {
      title: '상품명',
      dataIndex: 'product_name',
      align: 'center',
      width: 150,
    },
    {
      title: '옵션정보',
      dataIndex: 'option_name',
      align: 'center',
      width: 130,
    },
    {
      title: '수량',
      dataIndex: 'count',
      align: 'center',
      width: 110,
    },
    {
      title: '옵션가격',
      dataIndex: 'option_add_price',
      align: 'center',
      width: 130,
    },
    {
      title: '상품가격',
      dataIndex: 'price',
      align: 'center',
      width: 130,
    },
    {
      title: '총 주문금액',
      dataIndex: 'total_price',
      align: 'center',
      width: 150,
    },
    {
      title: '발주확인일',
      dataIndex: 'order_confirmed_at',
      align: 'center',
      width: 150,
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
      width: 200,
    },
    {
      title: '배송지',
      dataIndex: 'ship_address_main',
      align: 'center',
      width: 200,
    },
    {
      title: '구매자 연락처',
      dataIndex: 'buyer_phone',
      align: 'center',
      width: 150,
    },
    {
      title: '우편번호',
      dataIndex: 'released_zip_code',
      align: 'center',
      width: 130,
    },
    {
      title: '배송메세지',
      dataIndex: 'ship_message',
      align: 'center',
      width: 200,
    },
    {
      title: '출고지',
      dataIndex: 'released_address_main',
      align: 'center',
      width: 200,
    },
    {
      title: '주문일시',
      dataIndex: 'created_at',
      align: 'center',
      width: 150,
    },
  ];

  const handleTableBtn = (id) => {
    switch (id) {
      case 'order': {
        if (selectedTableRowsState.length > 0) {
          let allOrder = selectedTableRowsState.length;
          let order = selectedTableRowsState.length;
          var returnValue = window.confirm(
            `선택하신 ${allOrder}개의 주문 건 중 ${order}개를 발송처리했습니다.`,
          );
        } else {
          alert('배송정보를 선택해주세요.');
        }

        break;
      }
      case 'orderExcel': {
        setExcelVisibleState(true);
        break;
      }
      case 'orderCombinedPacking': {
        if (selectedTableRowsState.length > 0) {
          setPackingVisibleState(true);
        } else {
          alert('배송정보를 선택해주세요.');
        }
        break;
      }
      case 'saleCancel': {
        if (selectedTableRowsState.length < 1) {
          alert('배송정보를 선택해주세요.');
        } else if (selectedTableRowsState.length > 1) {
          alert('배송정보를 하나만 선택해주세요.');
        } else {
          setSaleCancelVisibleState(true);
        }
        break;
      }
      case 'pickup': {
        if (selectedTableRowsState.length > 0) {
          let allOrder = selectedTableRowsState.length;
          let order = selectedTableRowsState.length;
          var returnValue = window.confirm(
            `${allOrder}개 송장 출력건에 대해 택배사에 집하취소 요청을 하시겠습니까?\n요청시 동일 송장번호 내 모든 주문건에 대해 집하 취소 처리가 진행됩니다.`,
          );
          if (returnValue) {
            alert(
              `${allOrder}건 중 ${order}건의 집하취소 처리가 완료되었습니다.`,
            );
          }
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
    console.log('selectedRowKeys', selectedRowKeys);
    setSelectedTableKeysState(selectedRowKeys);
    setSelectedTableRowsState(selectedRows);
  };

  const handleOrderSheetPrint = () => {
    if (selectedTableRowsState.length > 0) {
      setOrderSheetPrintVisualState(true);
    } else {
      alert('배송정보를 선택해주세요');
    }
  };

  const handleShipTypeSelectOnChange = (value) => {
    setShipTypeState(value);
  };

  const handleShipCompanySelectOnChange = (value) => {
    setShipCompanyState(value);
  };

  const handleApplyClick = () => {
    let shipType = [...dataShipTypeState];
    let shipCompany = [...dataShipCompanyState];
    let invoiceNumber = [...dataInvoiceNumberState];

    selectedTableRowsState.map((item, index) => {
      let { key } = item;
      shipType[item.key] = shipTypeState;
      shipCompany[item.key] = shipCompanyState;
      invoiceNumber[item.key] = invoiceNumberState;
    });

    setDataShipTypeState(shipType);
    setDataShipCompanyState(shipCompany);
    setDataInvoiceNumberState(invoiceNumber);
  };

  const handleInvoiceNumChange = (value) => {
    setInvoiceNumberState(value.target.value);
  };

  const resetData = () => {
    setShipTypeState('select');
    setShipCompanyState('select');
    setInvoiceNumberState('');

    setSelectedTableKeysState([]);
    setSelectedTableRowsState([]);
  };

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
        title="합포장 일괄 발송처리"
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
        deliveryTypeList={deliveryTypeList}
        deliveryCompanyList={deliveryCompanyList}
        selectedTableRowsState={selectedTableRowsState}
      ></PackingModal>

      <OrderSheetPrintModal
        centered
        visible={orderSheetPrintVisalbleState}
        onOk={() => {
          setOrderSheetPrintVisualState(true);
        }}
        onCancel={() => {
          setOrderSheetPrintVisualState(false);
        }}
        width={500}
        okText="확인"
        cancelText="취소"
        selectedTableRowsState={selectedTableRowsState}
      ></OrderSheetPrintModal>

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
      ></SaleCancelModal>

      <SearchContainer>
        <LabelContents title="배송정보 한번에 입력하기">
          <PeirodSelectBox
            value={shipTypeState}
            onChange={handleShipTypeSelectOnChange}
            list={deliveryTypeList}
          />
          <PeirodSelectBox
            value={shipCompanyState}
            onChange={handleShipCompanySelectOnChange}
            list={deliveryCompanyList}
            disabled={shipTypeState === 'delivery' ? '' : 'disabled'}
          />
          <BasicTextInputBoxStyled
            value={invoiceNumberState}
            onChange={handleInvoiceNumChange}
            disabled={
              shipTypeState !== 'delivery' ||
              shipCompanyState === 'select' ||
              shipCompanyState === undefined
                ? 'disabled'
                : ''
            }
          />
          <Button onClick={handleApplyClick}>적용</Button>
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
        <Button
          onClick={() => {
            handleOrderSheetPrint();
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
