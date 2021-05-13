import 'antd/dist/antd.css';
import React, { useState } from 'react';
import {  Modal,Button  } from 'antd';
import styled from 'styled-components';


const DeliveryDeleteModal = (property) => {
  return (
    <>
      <Modal
        visible={property.visible}
        onCancel={()=>{property.setVisible(false);}}
        width={400}
        footer={[
          <Button onClick = {()=>{property.setVisible(false);}} key="back">
           닫기
          </Button>,
        ]}
      >
        {property.title}
      </Modal>
    </>
  );
};
export default DeliveryDeleteModal;
