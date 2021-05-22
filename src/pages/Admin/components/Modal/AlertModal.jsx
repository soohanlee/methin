import { Modal } from 'antd';
import React from 'react';

const AlertModal = ({ type, children }) => {
  // type: info success error warning

  if (type === 'info') {
    return <Modal.info>{children}</Modal.info>;
  } else if (type === 'success') {
    return <Modal.success>{children}</Modal.success>;
  } else if (type === 'error') {
    return <Modal.error>{children}</Modal.error>;
  } else if (type === 'warning') {
    return <Modal.warning>{children}</Modal.warning>;
  }
};

export default AlertModal;
