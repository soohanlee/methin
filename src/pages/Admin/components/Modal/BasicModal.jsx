import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { Modal } from 'antd';

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
