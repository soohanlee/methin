import { Modal, Table } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicTextAreaBox from 'pages/Admin/components/Form/TextAreaBox';

const DirectReturnModal = (property) => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const BasicTextInputBoxStyled = styled(BasicTextInputBox)`
    width: 20rem;
  `;

  const BasicTextAreaBoxStyled = styled(BasicTextAreaBox)`
    margin-left: 5rem;
    width: 90rem;
  `;
  const BasicSelectBoxStyled = styled(BasicSelectBox)`
    margin-left: ${(props) => props.left};
    width: 20rem;
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
      title: '상품번호',
      dataIndex: 'ProductNum',
    },
    {
      title: '상품주문번호',
      dataIndex: 'delete',
    },
    {
      title: '배송방법',
      dataIndex: 'id',
    },
    {
      title: '택배사',
      dataIndex: 'id',
    },
    {
      title: '송장번호',
      dataIndex: 'id',
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
        okText="반품접수"
        cancelText="취소"
      >
        <Table columns={columns} />
        <SelectBoxLabelContainer>
          <div>반품요청사유</div>
          <BasicSelectBoxStyled left="8rem" list={ReasonSelect} />
        </SelectBoxLabelContainer>

        <SelectBoxLabelContainer>
          <div>반품요청상세사유</div>
          <BasicTextAreaBoxStyled />
        </SelectBoxLabelContainer>

        <SelectBoxLabelContainer>
          <div>반품수거방법</div>
          <BasicSelectBoxStyled left="8rem" list={companySelect} />
        </SelectBoxLabelContainer>

        <SelectBoxLabelContainer>
          <div>반품택배사</div>
          <BasicSelectBoxStyled left="9.4rem" list={pickupWaySelect} />
          <SelectBoxLabelContainer left="5rem">
            <div>반품송장번호</div>
            <BasicTextInputBoxStyled disabled />
          </SelectBoxLabelContainer>
        </SelectBoxLabelContainer>
      </Modal>
    </>
  );
};
export default DirectReturnModal;

const ReasonSelect = [
  { value: '0', label: '선택' },
  { value: '1', label: '뭐들어가지' },
  { value: '2', label: '뭐들어가지2' },
  { value: '3', label: '뭐들어가지3' },
];

const pickupWaySelect = [
  { value: '0', label: '택배명' },
  { value: '1', label: '뭐들어가지' },
  { value: '2', label: '뭐들어가지2' },
  { value: '3', label: '뭐들어가지3' },
];

const companySelect = [
  { value: '0', label: '택배방법' },
  { value: '1', label: '뭐들어가지' },
  { value: '2', label: '뭐들어가지2' },
  { value: '3', label: '뭐들어가지3' },
];
