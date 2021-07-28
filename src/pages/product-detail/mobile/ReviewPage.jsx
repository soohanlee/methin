import React from 'react';
import styled from 'styled-components';

import { SubButton as OriginSubButton } from 'components/styled/Button';

import { Collapse, Empty as OriginEmpty } from 'antd';
import { Label as OriginLabel } from 'components/styled/Form';

const { Panel } = Collapse;

const Label = styled(OriginLabel)`
  font-size: 1.6rem;
`;

const SubButton = styled(OriginSubButton)`
  line-height: 3.5rem;
`;

const InnerContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  > label {
    margin-bottom: 2rem;
    &:last-child {
      margin-bottom: 0rem;
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
`;

const CustomCollapse = styled(Collapse)`
  background: #fff;
  border: 0;
  &&& .ant-collapse-header {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  &&& .ant-collapse-arrow {
    top: calc(50% - 6px);
    padding: 0;
  }
  &&& .ant-collapse-item {
    border: 0;
  }
`;
const ReviewPage = ({ reviewList }) => {
  const renderCollapse = () => {
    return reviewList.map((item) => {
      return (
        <Panel
          showArrow={false}
          key={item.key}
          header={<Label>{item.title}</Label>}
        >
          <InnerContainer>
            <Label>{item.desc}</Label>
          </InnerContainer>
        </Panel>
      );
    });
  };

  return (
    <Container>
      <SubButton>후기 작성</SubButton>
      <CustomCollapse>{renderCollapse()}</CustomCollapse>
    </Container>
  );
};

export default ReviewPage;
