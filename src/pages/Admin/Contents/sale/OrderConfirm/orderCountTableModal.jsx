import { Modal, Table } from 'antd';
import 'antd/dist/antd.css';

const orderCountTable = (property) => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const okClick = () => {};

  return (
    <>
      <Modal
        title={property.title}
        centered
        visible={property.visible}
        onOk={okClick}
        onCancel={property.onCancel}
        width={1500}
        okText="선택건 상세조회"
        cancelText="취소"
      >
        <Table
          rowSelection
          columns={property.orderCountTableColumns}
          dataSource={property.orderCountTableData}
          onChange={onChange}
        />
      </Modal>
    </>
  );
};
export default orderCountTable;
