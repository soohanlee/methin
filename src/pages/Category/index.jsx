import React from 'react';
import ResponsiveTemplate from 'template/ResponsiveTemplate';
import styled from 'styled-components';
import { Collapse } from 'antd';
import { useHistory } from 'react-router-dom';

import { Label as OriginLabel } from 'components/styled/Form';
const { Panel } = Collapse;

const Label = styled(OriginLabel)`
  font-size: 1.6rem;
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

const Category = () => {
  const history = useHistory();

  const handleMovePage = (path) => {
    history.push(`${path}`);
  };

  const renderMobileCategory = () => {
    return (
      <div>
        <CustomCollapse expandIconPosition="right">
          <Panel key={'a'} header={<Label>이벤트 기획상품</Label>}>
            <InnerContainer>
              <Label>닭가슴살</Label>
            </InnerContainer>
          </Panel>
        </CustomCollapse>
        <CustomCollapse expandIconPosition="right">
          <Panel key={'b'} header={<Label>닭가슴살</Label>}>
            <InnerContainer>
              <Label onClick={() => handleMovePage('padf')}>
                저염 닭가슴살
              </Label>
              <Label>맛있는 닭가슴살</Label>
              <Label>존맛 닭가슴살</Label>
            </InnerContainer>
          </Panel>
        </CustomCollapse>
        <CustomCollapse expandIconPosition="right">
          <Panel key={'c'} header={<Label>간편식</Label>}>
            <InnerContainer>
              <Label>고구마</Label>
              <Label>감자</Label>
              <Label>만두</Label>
            </InnerContainer>
          </Panel>
        </CustomCollapse>
        <CustomCollapse expandIconPosition="right">
          <Panel key={'d'} header={<Label>도시락 볶음밥 죽</Label>}>
            <InnerContainer>
              <Label>볶음밥</Label>
              <Label>도시락</Label>
              <Label>죽</Label>
            </InnerContainer>
          </Panel>
        </CustomCollapse>
      </div>
    );
  };

  return (
    <div>
      <ResponsiveTemplate NonPCContents={renderMobileCategory()} />
    </div>
  );
};

export default Category;
