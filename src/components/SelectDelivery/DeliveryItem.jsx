import React from 'react';
import styled, { css } from 'styled-components';

import { SubButton as MainSubButton } from 'components/styled/Button';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${(props) => props.theme.LINE};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
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
  margin-left: 2rem;
`;

const SubButton = styled(MainSubButton)`
  width: 8rem;
`;

const Checkbox = styled.input.attrs({ type: 'radio' })``;

const DeliveryItem = ({ name, phone, address, id }) => {
  return (
    <Container>
      <Checkbox id={name} for={name} />
      <ColumnContainer>
        <InfoContainer>
          <Name>김애용</Name>
          <Label>010.1234.7854</Label>
        </InfoContainer>
        <FlexContainer>경기도 광주시 퇴촌면 도수길 11-2 레츠빌</FlexContainer>
      </ColumnContainer>
      <SubButton>변경</SubButton>
    </Container>
  );
};

export default DeliveryItem;
