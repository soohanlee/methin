import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

import { SubButton as MainSubButton } from 'components/styled/Button';

const Container = styled.label`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${(props) => props.theme.LINE};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  align-items: center;
`;

const Label = styled.div`
  font-size: 1.55rem;
  font-weight: ${(props) => (props.bold ? 500 : 300)};
  color: ${(props) =>
    props.grey ? props.theme.TEXT_INFORMATION : props.theme.TEXT_MAIN};

  ${(props) =>
    props.highlight &&
    css`
      color: ${props.theme.SIGNITURE_MAIN};
    `}
`;

const Name = styled(Label)`
  margin-right: 2rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 1rem;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 2rem;
`;

const SubButton = styled(MainSubButton)`
  width: 6rem;
  line-height: 4rem;
`;

const Radiobox = styled.input.attrs({ type: 'radio' })``;

const DefaultDelivery = styled.div`
  font-size: 1.55rem;
  color: ${(props) => props.theme.SIGNITURE_MAIN};
  margin-left: 3rem;
  margin-bottom: 2rem;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ItemWrap = styled.div`
  width: 100%;
`;

const DeliveryItem = (props) => {
  const {
    id,
    user_id,
    name,
    zip_code,
    address_main,
    address_sub,
    is_default,
    created_at,
  } = props.item;
  const {
    onClickChangeButton,
    selectedItem,
    onChange,
    setSelectedItem,
  } = props;

  useEffect(() => {
    if (is_default) {
      setSelectedItem(id);
    }
  }, []);

  return (
    <ItemContainer>
      <ItemWrap>
        <DefaultDelivery>{is_default ? '기본배송지' : ''}</DefaultDelivery>
        <Container key={id}>
          <Radiobox
            id={id}
            for={id}
            name="delivery"
            value={id}
            checked={id == selectedItem}
            onChange={onChange}
          />
          <ColumnContainer>
            <InfoContainer>
              <Name>{name}</Name>
              <Label>{user_id}</Label>
            </InfoContainer>
            <FlexContainer>{address_main}</FlexContainer>
            <FlexContainer>{address_sub}</FlexContainer>
          </ColumnContainer>
          <SubButton onClick={() => onClickChangeButton(id)}>수정</SubButton>
        </Container>
      </ItemWrap>
    </ItemContainer>
  );
};

export default DeliveryItem;
