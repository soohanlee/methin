import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { Modal } from 'antd';

const BasicModal = (visible) => {
  return (
    <>
      <Modal
        title="title"
        centered
        visible={visible.visible}
        onOk={() => {
          visible.setVisible(false);
        }}
        onCancel={() => {
          visible.setVisible(false);
        }}
        width={1000}
      ></Modal>
    </>
  );
};
export default BasicModal;
