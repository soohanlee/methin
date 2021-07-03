import React from 'react';
import styled from 'styled-components';
import BorderTitleContainer from 'components/container/BorderTitleContainer';
import CollapseList from 'components/Collapse/CollapseList';

const Container = styled.div``;
const FAQ = () => {
  return (
    <Container>
      <BorderTitleContainer title="FAQ" titleComponent={<div>전체 필터</div>}>
        <CollapseList list={list} />
      </BorderTitleContainer>
    </Container>
  );
};

export default FAQ;

const list = [
  {
    productName: '맛있는 상품',
    date: '2029.20.20',
    desc: '존나 맛잇은 상품',
  },
];
