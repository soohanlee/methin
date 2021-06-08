import React from 'react';
import styled from 'styled-components';

import ModalBase from 'components/ModalBase';
import DeliveryItem from 'components/SelectDelivery/DeliveryItem';

const Modal = styled(ModalBase)`
  .ant-modal-body {
    padding: 4rem 3rem;
  }
`;

const Title = styled.div`
  font-size: 2.4rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.LINE};
  padding-bottom: 2rem;
  margin-bottom: 3rem;
`;

const DefaultDelivery = styled.div`
  font-size: 1.55rem;
  color: ${(props) => props.theme.SIGNITURE_MAIN};
  margin-left: 3rem;
  margin-bottom: 2rem;
`;

const InfoText = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.TEXT_INFORMATION};
  margin-bottom: 1rem;
`;

const SelectDelivery = ({ isOpen }) => {
  return (
    <Modal isOpen={isOpen}>
      <Title>배송지 선택</Title>
      <DefaultDelivery>기본배송지</DefaultDelivery>
      <DeliveryItem />
      <InfoText>* 지역에 따라 추가배송비가 발생할 수 있습니다.</InfoText>
      <InfoText>
        * 주문 전, 배송지에 대한 정보를 정확하게 기입 후 확인해주시기 바랍니다.
      </InfoText>
    </Modal>
  );
};

export default SelectDelivery;
