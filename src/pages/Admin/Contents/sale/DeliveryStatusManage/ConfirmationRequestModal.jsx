import { Modal, Table } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const ConfirmationRequestModal = (property) => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

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
      title: '발송처리일',
      dataIndex: 'date',
    },
    {
      title: '상품명',
      dataIndex: 'name',
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
        okText="구매확정 요청"
        cancelText="취소"
      >
        <Table columns={columns} />
      </Modal>
    </>
  );
};
export default ConfirmationRequestModal;
