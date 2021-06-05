import { Modal, Table } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicTextAreaBox from 'pages/Admin/components/Form/BasicTextArea';

const DirectExchangeModal = (property) => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const BasicTextInputBoxStyled = styled(BasicTextInputBox)`
    margin-left: ${(props) => props.left};

    width: 90rem;
  `;

  const BasicTextAreaBoxStyled = styled(BasicTextAreaBox)`
    margin-left: 5rem;
    width: 90rem;
  `;
  const BasicSelectBoxStyled = styled(BasicSelectBox)`
    margin-left: ${(props) => props.left};
    width: 90rem;
  `;

  const SelectBoxLabelContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: ${(props) => props.left};
    margin-top: 1rem;
  `;

  const okClick = () => {
    property.onOk();
  };

  const columns = [
    {
      title: '상품주문번호',
      dataIndex: 'orderNumber',
    },
    {
      title: '상품명',
      dataIndex: 'name',
    },
    {
      title: '판매가',
      dataIndex: 'price',
    },
  ];

  return (
    <>
      <Modal
        title={property.title}
        centered
        visible={property.visible}
        onOk={okClick}
        onCancel={property.onCancel}
        width={1200}
        okText="교환접수"
        cancelText="취소"
      >
        <Table columns={columns} />
        <SelectBoxLabelContainer>
          <div>교환 요청사유</div>
          <BasicSelectBoxStyled left="8rem" list={ReasonSelect} />
        </SelectBoxLabelContainer>

        <SelectBoxLabelContainer>
          <div>교환 요청상세사유</div>
          <BasicTextAreaBoxStyled />
        </SelectBoxLabelContainer>

        <SelectBoxLabelContainer>
          <div>교환 수거방법</div>
          <BasicSelectBoxStyled left="8rem" list={companySelect} />
        </SelectBoxLabelContainer>

        <SelectBoxLabelContainer>
          <div>교환 택배사</div>
          <BasicSelectBoxStyled left="9.4rem" list={pickupWaySelect} />
        </SelectBoxLabelContainer>
        <SelectBoxLabelContainer>
          <div>교환 송장번호</div>
          <BasicTextInputBoxStyled left="7rem" />
        </SelectBoxLabelContainer>
      </Modal>
    </>
  );
};
export default DirectExchangeModal;

const ReasonSelect = [
  { value: '0', label: '선택' },
  { value: '1', label: '뭐들어가지' },
  { value: '2', label: '뭐들어가지2' },
  { value: '3', label: '뭐들어가지3' },
];

const companySelect = [
  { value: '0', label: '수거요청안함' },
  { value: '1', label: '뭐들어가지' },
  { value: '2', label: '뭐들어가지2' },
  { value: '3', label: '뭐들어가지3' },
];

const pickupWaySelect = [
  { value: '0', label: '택배사명 선택' },
  { value: '1', label: '뭐들어가지' },
  { value: '2', label: '뭐들어가지2' },
  { value: '3', label: '뭐들어가지3' },
];