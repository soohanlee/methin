import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import QuestionCircleOutlined from '@ant-design/icons/QuestionCircleOutlined';
import PageHeaderBtn from 'compononets/Form/PageHeaderBtn';

const EditDeliveryTitles = styled.div`
  width: 100%;
  height: 7rem;
  background-color: #ffffff;
  border: 1px solid gray;
  padding-left: 40px;
`;

const TitleTexts = styled.div`
  padding-top: 2rem;
  display: flex;
`;

const TitleText = styled.div`
  padding-right: 1rem;
  font-size: 25px;
`;

const QuestionIcon = styled(QuestionCircleOutlined)`
  font-size: 25px;
`;

const PageBtn = styled(PageHeaderBtn)`
  padding: 0px;
`;

const editDeliveryProductTitle = () => {
  return (
    <EditDeliveryTitles>
      <TitleTexts>
        <PageBtn />
        <TitleText>배송정보 관리 </TitleText>
        <QuestionIcon />
      </TitleTexts>
    </EditDeliveryTitles>
  );
};

export default editDeliveryProductTitle;
