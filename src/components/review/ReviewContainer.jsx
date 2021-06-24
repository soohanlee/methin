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

const Title = styled(Label)`
  font-size: 2.3rem;
  color: ${(props) => props.theme.TEXT_MAIN};
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

const DateContainer = styled.div`
  display: flex;
`;

const ReviewCommentContainer = styled.div`
  margin-top: 1rem;
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

const ProductInfoContainer = styled.div``;

const ImgContainer = styled.div`
  width: 10%;
`;

const Img = styled.img`
  width: 100%;
`;

const StarContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Star = styled.div`
  width: 1rem;
  height: 1rem;
  background: red;
`;

const UserID = styled.div`
  margin-left: 3rem;
`;

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
              <StarContainer>
                <Star />
                <UserID>CADSA*****</UserID>
              </StarContainer>
              <DateContainer>
                <Label>2021.12.17</Label>
                <Label>구매옵션: 리코타 치즈 샐러드</Label>
              </DateContainer>
              <ReviewCommentContainer>
                너무 맛있게 잘 먹고 있어요. 운동하려고 먹는건데 이렇게 맛있게
                먹어도 되나 싶을 정도로 정말 맛있습니다.
              </ReviewCommentContainer>
            </ProductInfoContainer>

            <ImgContainer>
              <Img src="/assets/images/60-px-review-img.png" />
            </ImgContainer>
          </ItemBorderContainer>
        </ItemContainer>
        <PaginationContainer>
          <Pagination />
        </PaginationContainer>
      </BorderTitleContainer>
    </Container>
  );
};

export default ReviewContainer;
