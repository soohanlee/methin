import React from 'react';
import styled from 'styled-components';

import { Label as OriginLabel } from 'components/styled/Form';
import { SubButton as OriginSubButton } from 'components/styled/Button';
import BorderTitleContainer from 'components/container/BorderTitleContainer';

const Container = styled.div`
  width: 100%;
`;

const Count = styled.div`
  color: ${(props) => props.theme.SIGNITURE_MAIN};
`;

const Header = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
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

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemBorderContainer = styled.div`
 &:first-child{
  border-top: 0.1rem solid ${(props) => props.theme.LINE};
 }
  border-bottom: 0.1rem solid ${(props) => props.theme.LINE};
`;

const ProductInfoContainer = styled.div`
  display:flex;
`

const ReviewContainer = ({ reviewCount }) => {
  return (
    <Container>
      <BorderTitleContainer
        title={'상품후기'}
        titleDesc={<Count>{reviewCount}</Count>}
      >
        <Header>
          <Label>상품을 구매한 다른 사람들의 평가를 확인하세요.</Label>
          <SubButton>리뷰쓰기</SubButton>
        </Header>
        <ItemContainer>
          <ItemBorderContainer>
            <ProductInfoContainer>   
               <Label>2021.12.17</Label>
              <Label>2021.12.17</Label>
            </ProductInfoContainer>
        
          </ItemBorderContainer>
        </ItemContainer>
      </BorderTitleContainer>
    </Container>
  );
};

export default ReviewContainer;
