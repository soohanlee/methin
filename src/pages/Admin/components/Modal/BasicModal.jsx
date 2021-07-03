import React from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';

const BasicModal = ({ visible, children, width, onCancel, onOk }) => {
  return (
    <>
      <Modal
        centered
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
        width={width}
      >
        {children}
      </Modal>
    </>
  );
};
export default BasicModal;
