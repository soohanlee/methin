import BorderTitleContainer from 'components/container/BorderTitleContainer';
import React from 'react';
import styled from 'styled-components';

import { Collapse } from 'antd';

const { Panel } = Collapse;
const Container = styled.div``;

const CustomCollapse = styled(Collapse)`
  background: #fff;
  border-left: 0;
  border-right: 0;
  &&& .ant-collapse-header {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  &&& .ant-collapse-arrow {
    top: calc(50% - 6px);
    padding: 0;
  }
`;

const CollapseHeader = styled.div`
  display: flex;
  align-items: center;
`;

const Index = styled.div`
  width: 5%;
`;

const ProductName = styled.div`
  width: 70%;
`;

const Date = styled.div`
  width: 15%;
`;

const ProductQNA = () => {
  const renderCollapse = (list) => {
    return (
      <CustomCollapse expandIconPosition="right">
        {list.map((item, index) => {
          const { productName, date, desc } = item;
          return (
            <Panel
              header={
                <CollapseHeader>
                  <Index>{index + 1}</Index>
                  <ProductName>{productName}</ProductName>
                  <Date>{date}</Date>
                </CollapseHeader>
              }
              key={index}
            >
              {desc}
            </Panel>
          );
        })}
      </CustomCollapse>
    );
  };
  return (
    <Container>
      <BorderTitleContainer title="QNA" titleComponent={<div>전체 필터</div>}>
        {renderCollapse(list)}
      </BorderTitleContainer>
    </Container>
  );
};

export default ProductQNA;

const list = [
  {
    productName: '맛있는 상품',
    date: '2029.20.20',
    desc: '존나 맛잇은 상품',
  },
];
