import React from 'react';
import styled from 'styled-components';
import Pagination from 'components/Pagination';
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
  margin-bottom: 3rem;
`;

const Label = styled(OriginLabel)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.TEXT_INFORMATION};
`;

const SubButton = styled(OriginSubButton)`
  width: 15rem;
  line-height: 3.5rem;
  margin-left: 2rem;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemBorderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:first-child {
    border-top: 0.1rem solid ${(props) => props.theme.LINE};
  }
  border-bottom: 0.1rem solid ${(props) => props.theme.LINE};
`;

const CategoryLabel = styled.div``;

const DescriptionLabel = styled.div``;

const AnswerLabel = styled.div``;

const UserIDLabel = styled.div``;

const DateLabel = styled.div``;

const QNAContainer = ({ reviewCount }) => {
  return (
    <Container>
      <BorderTitleContainer
        title={'상품 Q&A'}
        titleDesc={<Count>{reviewCount}</Count>}
      >
        <Header>
          <Label>상품을 구매한 다른 사람들의 평가를 확인하세요.</Label>
          <SubButton>질문하기</SubButton>
        </Header>
        <ItemContainer>
          <ItemBorderContainer>
            <CategoryLabel>상품 문의</CategoryLabel>
            <DescriptionLabel>새우 펜네 파스타 샐러드 문의</DescriptionLabel>
            <AnswerLabel>답변완료</AnswerLabel>
            <UserIDLabel>userid</UserIDLabel>
            <DateLabel>21021.12.17</DateLabel>
          </ItemBorderContainer>
        </ItemContainer>
      </BorderTitleContainer>
    </Container>
  );
};

export default QNAContainer;
