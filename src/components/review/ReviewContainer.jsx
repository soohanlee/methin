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

<<<<<<< HEAD
const ReviewContainer = ({ reviewCount, list }) => {
=======
const ReviewContainer = ({ count, list, onReviewChange }) => {
>>>>>>> 9cc17462d26afafdd7371c6a57fc4d0c7141f91a
  const renderReviewList = () => {
    if (!list || list.length === 0) {
      return '리뷰를 작성해주세요.';
    } else {
      return (
        list &&
        list.map((item) => {
          return (
            <ItemContainer key={item.id}>
              <ItemBorderContainer>
                <ProductInfoContainer>
                  <StarContainer>
                    <Star />
                    {item.grade}
                    <UserID>{item.product_id}</UserID>
                  </StarContainer>
                  <DateContainer>
                    <Label>{item.created_at}</Label>
                    <Label>구매옵션: 리코타 치즈 샐러드</Label>
                  </DateContainer>
                  <ReviewCommentContainer>{item.body}</ReviewCommentContainer>
                </ProductInfoContainer>

                <ImgContainer>
                  <Img src="/assets/images/60-px-review-img.png" />
                </ImgContainer>
              </ItemBorderContainer>
            </ItemContainer>
          );
        })
      );
    }
  };

  return (
    <Container>
      <BorderTitleContainer
        title={'상품후기'}
        titleDesc={<Count>{count}</Count>}
      >
        <Header>
          <Label>상품을 구매한 다른 사람들의 평가를 확인하세요.</Label>
          <SubButton>리뷰쓰기</SubButton>
        </Header>
        {list.length === 0 ? '리뷰를 남겨주세요.' : renderReviewList()}

        <PaginationContainer>
          <Pagination total={count} onChange={onReviewChange} />
        </PaginationContainer>
      </BorderTitleContainer>
    </Container>
  );
};

export default ReviewContainer;
