import React from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';

const BasicModal = ({
  visible,
  children,
  width,
  onCancel,
  onOk,
  okText,
  cancelText,
  title,
  bodyStyle,
}) => {
  return (
    <>
      <Modal
        centered
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
        width={width}
        title={title}
        okText={okText}
        cancelText={cancelText}
        bodyStyle={bodyStyle}
      >
        {children}
      </Modal>
    </>
  );
};
export default BasicModal;
