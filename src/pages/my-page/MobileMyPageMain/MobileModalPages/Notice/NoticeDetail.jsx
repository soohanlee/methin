import React from 'react';
import styled from 'styled-components';

import { MobilePaddingContainer } from 'components/styled/Container';

const Contents = styled.div`
  padding: 3rem 2rem;
`;

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
`;

const Date = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const NoticeDetail = (props) => {
  console.log('selectedItem', props.selectedItem);
  const { title, createdAt, contents } = props.selectedItem;
  return (
    <div>
      <MobilePaddingContainer>
        <Title>{title}</Title>
        <Date>{createdAt}</Date>
      </MobilePaddingContainer>
      <Contents>{contents}</Contents>
    </div>
  );
};

export default NoticeDetail;
