import React from 'react';
import styled from 'styled-components';
import Pagination from 'components/Pagination';
import { Label as OriginLabel } from 'components/styled/Form';
import { SubButton as OriginSubButton } from 'components/styled/Button';
import BorderTitleContainer from 'components/container/BorderTitleContainer';

const Container = styled.div`
  width: 100%;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

const Count = styled.div`
  color: ${(props) => props.theme.SIGNITURE_MAIN};
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;

const Label = styled(OriginLabel)`
  font-size: 1.5rem;
`;

const RightBorder = styled.div`
  border-right: 0.1rem solid ${(props) => props.theme.LINE};
  margin: 0 1rem;
  height: 1.5rem;
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
  > div {
    padding: 4rem 0;
  }
  &:first-child {
    border-top: 0.1rem solid ${(props) => props.theme.LINE};
  }
  border-bottom: 0.1rem solid ${(props) => props.theme.LINE};
`;

const CategoryLabel = styled.div`
  min-width: 10rem;
`;

const DescriptionLabel = styled.div`
  min-width: 50rem;
  width: 100%;
`;

const AnswerLabel = styled.div`
  min-width: 10rem;
  text-align: center;
`;

const UserIDLabel = styled.div`
  min-width: 10rem;
  text-align: center;
`;

const DateLabel = styled.div`
  min-width: 10rem;
  text-align: center;
`;

const QNAContainer = ({ reviewCount }) => {
  return (
    <Container>
      <BorderTitleContainer
        title={'상품 Q&A'}
        titleDesc={<Count>{reviewCount}</Count>}
      >
        <Header>
          <Label hightlight>전체</Label>
          <RightBorder />
          <Label grey>상품문의</Label>
          <RightBorder />
          <Label grey>재입고 문의</Label>
          <RightBorder />
          <Label grey>배송 문의</Label>
          <RightBorder />
          <Label grey>기타</Label>
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
        <PaginationContainer>
          <Pagination />
        </PaginationContainer>
      </BorderTitleContainer>
    </Container>
  );
};

export default QNAContainer;
