import { Modal, Table } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import TextAreaBox from 'pages/Admin/components/Form/TextAreaBox';

const LabelBoxContainer = styled.div`
  margin-top: 2rem;

  display: flex;
`;

const TextAreaBoxContainer = styled(TextAreaBox)`
  width: 80rem;
  margin-left: 2rem;
`;

const BasicSelectBoxContainer = styled(BasicSelectBox)`
  width: 80rem;
  margin-left: 1.6rem;
`;

const ReturnReasonModifyMadal = (property) => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

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
        width={1000}
        okText="반품 사유수정"
        cancelText="닫기"
      >
        <Table columns={columns} />
        <LabelBoxContainer>
          <div>반품사유 선택</div>
          <BasicSelectBoxContainer list={ReturnResasonSelect} />
        </LabelBoxContainer>
        <LabelBoxContainer>
          <div>상세사유입력</div>
          <TextAreaBoxContainer />
        </LabelBoxContainer>
      </Modal>
    </>
  );
};
export default ReturnReasonModifyMadal;
const ReturnResasonSelect = [
  { value: '0', label: '파손 및 불량' },
  { value: '1', label: '뭐들어가지' },
  { value: '2', label: '뭐들어가지2' },
  { value: '3', label: '뭐들어가지3' },
];
