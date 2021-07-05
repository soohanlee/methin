import { useRef, useState } from 'react';
import styled from 'styled-components';
import { Button as OriginButton } from 'antd';

import LabelContents from 'pages/Admin/components/Label/LabelContents';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicTable from 'pages/Admin/components/Table/Table';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';

import OrderSheetModal from './OrderSheetModal';
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

const Table = ({ sheetList, tableData }) => {
  const invoiceNumber = useRef(null);

  const [adressModifyVisible, setAdressModifyVisible] = useState(false);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [saleCancelVisible, setSaleCancelVisible] = useState(false);

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

  const NumDataToData = () => {
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

  const handleTableBtn = (id) => {
    switch (id) {
      case 'OrderConfirmation': {
        var returnValue = window.confirm(
          '선택하신 1개의 주문 건 중 1개 발주확인 처리 가능합니다. 발송기한 내 발송처리가 진행되지 않을 경우, 판매관리 패널티가 부여되며 구매고객에게는 상품준비중으로 노출됩니다. 발주확인 처리를 하시겠습니까?',
        );
        if (returnValue) {
          alert('1건 중 1건의 발주확인 처리가 완료되었습니다.');
        }

        break;
      }
      case 'orderAdressChange': {
        setAdressModifyVisible(true);

        break;
      }
      case 'saleCancel': {
        setSaleCancelVisible(true);
        break;
      }
      default: {
        break;
      }
    }
  };
  NumDataToData();
  return (
    <Container>
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
        sheetList={sheetList}
      ></AdressModifyModal>
      <OrderSheetModal
        centered
        visible={sheetVisible}
        onOk={() => {
          setSheetVisible(true);
        }}
        onCancel={() => {
          setSheetVisible(false);
        }}
        width={500}
        okText="확인"
        cancelText="취소"
        sheetList={sheetList}
      ></OrderSheetModal>
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
        x="300vw"
        data={tableData}
        columns={columns}
        selectionType="checkbox"
        onChange={() => {}}
      />

      <ButtonContainer>
        <Button
          onClick={() => {
            setSheetVisible(true);
          }}
        >
          선택건 주문서 출력
        </Button>
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
    </Container>
  );
};

export default Table;

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
