import 'antd/dist/antd.css';
import React, { useState } from 'react';
import {  Modal  } from 'antd';
import styled from 'styled-components';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import CheckBoxLabel from 'pages/Admin/components/Form/CheckBoxLabel';

const DeliveryModalBox = styled.div`
padding : 2rem;
padding-bottom : 0px;
border : 1px solid #f0f0f0;

`;

const DeliveryModalContent = styled.div`
width : 100%;
display : flex;
margin-bottom : 2rem;
align-items : center;
`;

const ContentTitle = styled.div`
width : 11rem;
margin-right : 3rem;
`;

const DeliveryModifyModal = (property) => {
  console.log(property);

  const okClick=()=>{
    property.setVisible(false);
    property.onClick();
  }

  return (
    <>
      <Modal
        title={property.title}
        centered
        visible={property.visible}
        onOk={okClick}
        onCancel={()=>{property.setVisible(false);}}
        width={900}
        okText= '저장'
        cancelText= '닫기'
      >
        <DeliveryModalBox>
          <DeliveryModalContent>
            <ContentTitle>묶음그룹명</ContentTitle>
            <BasicTextInputBox></BasicTextInputBox>
          </DeliveryModalContent>
            
          <DeliveryModalContent>
          <ContentTitle>사용여부</ContentTitle>
          <CheckBoxLabel label = '사용'></CheckBoxLabel>
          <CheckBoxLabel label = '사용안함'></CheckBoxLabel>
          <CheckBoxLabel label = '기본 그룹으로 설정'></CheckBoxLabel>
          </DeliveryModalContent>

          <DeliveryModalContent>
          <ContentTitle>계산방식</ContentTitle>
          <CheckBoxLabel label = '묶음 그룹에서 가장 작은 배송비로 부가'></CheckBoxLabel>
          <CheckBoxLabel label = '묶음 그룹에서 가장 큰 배송비로 부가'></CheckBoxLabel>
          </DeliveryModalContent>

          <DeliveryModalContent>
          <ContentTitle>제주/도서산간 추가배송비</ContentTitle>
          <CheckBoxLabel label = '설정함'></CheckBoxLabel>
          <CheckBoxLabel label = '설정안함'></CheckBoxLabel>
          </DeliveryModalContent>
        </DeliveryModalBox>
      </Modal>
    </>
  );
};
export default DeliveryModifyModal;
