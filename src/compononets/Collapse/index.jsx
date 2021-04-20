import React from 'react';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const { Panel } = Collapse;

const Container = styled.div`
  margin-bottom: 1rem;
`;

const CustonCollapse = ({ header, extra, children }) => {
  return (
    <Container>
      <Collapse defaultActiveKey={['1']} expandIconPosition={'right'}>
        <Panel header={header} key={'1'} extra={extra}>
          {children}
        </Panel>
      </Collapse>
    </Container>
  );
};

export default CustonCollapse;
