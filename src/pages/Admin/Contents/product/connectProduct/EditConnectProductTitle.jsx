import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import QuestionCircleOutlined from '@ant-design/icons/QuestionCircleOutlined';
import PageHeaderBtn from 'compononets/Form/PageHeaderBtn';

const EditTitles = styled.div`
  width: 100%;
  height: 7rem;
  background-color: #ffffff;
  border: 1px solid gray;
  padding-left: 40px;
  margin-bottom: 1.5rem;
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

const EditConnectProductTitle = () => {
  return (
    <EditTitles>
      <TitleTexts>
        <PageBtn />
        <TitleText>연관상품 조회/수정 </TitleText>
        <QuestionIcon />
      </TitleTexts>
    </EditTitles>
  );
};

export default EditConnectProductTitle;
