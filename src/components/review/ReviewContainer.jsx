import React from 'react';
import styled from 'styled-components';

import { Label as OriginLabel } from 'components/styled/Form';
import { SubButton as OriginSubButton } from 'components/styled/Button';

const Container = styled.div`
  width: 100%;
`;

const Count = styled.div`
  color: ${(props) => props.theme.SIGNITURE_MAIN};
`;

const Header = styled.div`
  border-top: 0.1rem solid ${(props) => props.theme.TEXT_MAIN};
  padding-top: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Label = styled(OriginLabel)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.TEXT_INFORMATION};
`;

const Title = styled(Label)`
  font-size: 2.3rem;
  color: ${(props) => props.theme.TEXT_MAIN};
`;

const SubButton = styled(OriginSubButton)`
  width: 15rem;
  line-height: 2.5rem;
  margin-left: 2rem;
`;

const ReviewContainer = ({ reviewCount }) => {
  return (
    <Container>
      <Title>
        상품후기<Count>{reviewCount}</Count>
      </Title>
      <Header>
        <Label>상품을 구매한 다른 사람들의 평가를 확인하세요.</Label>
        <SubButton>리뷰쓰기</SubButton>
      </Header>
    </Container>
  );
};

export default ReviewContainer;
