import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BorderTitleContainer from 'components/container/BorderTitleContainer';
import CollapseList from 'components/Collapse/CollapseList';
import { getClientPageFaq } from 'apis/notice';

const Container = styled.div``;
const FAQ = () => {
  const [faqList, setFaqList] = useState([]);

  const getFaqList = async () => {
    const result = await getClientPageFaq();
    setFaqList(result.data.data.list);
  };

  useEffect(() => {
    getFaqList();
  }, []);
  return (
    <Container>
      <BorderTitleContainer title="FAQ" titleComponent={<div>전체 필터</div>}>
        <CollapseList description={'FAQ가 없습니다.'} list={faqList} />
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
