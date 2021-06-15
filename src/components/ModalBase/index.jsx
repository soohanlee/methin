import React from 'react';
import { Modal } from 'antd';

const Modalbase = ({
  isOpen,
  onOk,
  onCancel,
  children,
  className,
  ...props
}) => {
  return (
    <Modal
      centered
      onCancel={onCancel}
      visible={isOpen}
      {...props}
      footer={null}
      className={className}
    >
      {children}
    </Modal>
  );
};

export default Modalbase;
