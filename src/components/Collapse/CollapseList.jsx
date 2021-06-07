import React from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';

const { Panel } = Collapse;

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

const Category = styled.div`
  width: 15%;
`;

const CollapseList = ({ list }) => {
  return (
    <CustomCollapse expandIconPosition="right">
      {list &&
        list.map((item, index) => {
          const { productName, date, desc, category } = item;
          return (
            <Panel
              header={
                <CollapseHeader>
                  <Index>{index + 1}</Index>
                  {category && <Category>{category}</Category>}
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

export default CollapseList;
