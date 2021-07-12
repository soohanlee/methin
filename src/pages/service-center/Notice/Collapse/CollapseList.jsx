import React from 'react';
import styled from 'styled-components';
import { Collapse, Empty as OriginEmpty } from 'antd';
import moment from 'moment';
import { DateFormat } from 'configs/config';

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

const Empty = styled(OriginEmpty)`
  margin: 2rem;
`;

const CollapseList = ({ list, description }) => {
  if (list.length === 0) {
    return <Empty description={description} />;
  } else {
    return (
      <CustomCollapse expandIconPosition="right">
        {list &&
          list.map((item, index) => {
            const { title, created_at, answer, category, id } = item;
            return (
              <Panel
                key={id}
                header={
                  <CollapseHeader>
                    <Index>{index + 1}</Index>
                    {category && <Category>{category}</Category>}
                    <ProductName>{title}</ProductName>
                    <Date>{moment(created_at).format(DateFormat.Default)}</Date>
                  </CollapseHeader>
                }
                key={index}
              >
                {/* {answer} */}
              </Panel>
            );
          })}
      </CustomCollapse>
    );
  }
};

export default CollapseList;
