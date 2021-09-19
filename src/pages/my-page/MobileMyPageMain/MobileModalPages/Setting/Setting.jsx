import React from 'react';
import styled from 'styled-components';
import { Switch as OriginSwitch } from 'antd';

const Switch = styled(OriginSwitch)`
  &.ant-switch-checked {
    background-color: ${(props) => props.theme.MAIN};
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Label = styled.div`
  padding-bottom: 2rem;
  padding-right: 2rem;
`;

const LabelContainer = styled.div`
  display: flex;
`;

const Title = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: 0.2rem solid black;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const SubLabel = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.TEXT_INFORMATION};
  padding-bottom: 1rem;
`;

const Setting = () => {
  const [isDeliveryChecked, setIsDeliveryChecked] = React.useState(false);
  const [isEventChecked, setIsEventChecked] = React.useState(false);

  const handleDeliveryChange = (checked) => {
    setIsDeliveryChecked(checked);
  };

  const handleEventChange = (checked) => {
    setIsEventChecked(checked);
  };

  return (
    <Container>
      <Title>PUSH 알림</Title>
      <SubLabel>구매정보</SubLabel>
      <LabelContainer>
        <Label>
          구매한 상품의 배송, 문의에 대한 답변을 실시간으로 받을 수 있습니다.
        </Label>
        <Switch checked={isDeliveryChecked} onChange={handleDeliveryChange} />
      </LabelContainer>

      <SubLabel>이벤트 혜택</SubLabel>
      <LabelContainer>
        <Label>이벤트 및 다양한 정보를 빠르게 만나실 수 있습니다.</Label>
        <Switch checked={isEventChecked} onChange={handleEventChange} />
      </LabelContainer>
    </Container>
  );
};

export default Setting;
