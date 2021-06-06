import { Modal, Table } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import TextAreaBox from 'pages/Admin/components/Form/BasicTextArea';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';

const LabelBoxContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const TextAreaBoxContainer = styled(TextAreaBox)`
  width: ${(props) => props.width};
  margin-left: ${(props) => props.left};
`;

const BasicTextInputBoxContainer = styled(BasicTextInputBox)`
  width: ${(props) => props.width};
  margin-left: ${(props) => props.left};
`;
const BasicSelectBoxContainer = styled(BasicSelectBox)`
  width: ${(props) => props.width};
  margin-left: ${(props) => props.left};
`;

const ReturnHoldModal = (property) => {
  const onChange = (pagination, filters, sorter, extra) => {};

  const okClick = () => {
    property.onOk();
  };

  const columns = [
    {
      title: '상품 주문번호',
      dataIndex: 'ProductOrderNumber',
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
        width={900}
        okText="보류설정"
        cancelText="닫기"
      >
        <Table columns={columns} />

        <LabelBoxContainer>
          <div>반품요청 사유</div>
          <BasicTextInputBoxContainer disabled width="54rem" left="5rem" />
          <BasicButton label="수정" />
        </LabelBoxContainer>

        <LabelBoxContainer>
          <div>반품요청 상세사유</div>
          <TextAreaBoxContainer disabled width="60rem" left="3.1rem" />
        </LabelBoxContainer>
        <LabelBoxContainer>
          <div>보류사유 선택</div>
          <BasicSelectBoxContainer
            list={ReturnResasonSelect}
            width="60rem"
            left="6rem"
          />
        </LabelBoxContainer>
        <LabelBoxContainer>
          <div>반품배송비 금액</div>
          <BasicTextInputBoxContainer disabled width="60rem" left="3.5rem" />
        </LabelBoxContainer>
        <LabelBoxContainer>
          <div>기타 반품비용 금액</div>
          <BasicSelectBoxContainer
            list={holdingReasonSelect}
            width="60rem"
            left="2.7rem"
          />
        </LabelBoxContainer>
        <LabelBoxContainer>
          <div>사유 입력</div>
          <TextAreaBoxContainer width="60rem" left="8.9rem" />
        </LabelBoxContainer>
      </Modal>
    </>
  );
};
export default ReturnHoldModal;

const ReturnResasonSelect = [
  { value: '0', label: '환불보류 사유' },
  { value: '1', label: '뭐들어가지' },
  { value: '2', label: '뭐들어가지2' },
  { value: '3', label: '뭐들어가지3' },
];

const holdingReasonSelect = [
  { value: '0', label: '보류사유 선택' },
  { value: '1', label: '뭐들어가지' },
  { value: '2', label: '뭐들어가지2' },
  { value: '3', label: '뭐들어가지3' },
];
