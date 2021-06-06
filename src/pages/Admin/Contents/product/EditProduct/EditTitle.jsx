import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import QuestionCircleOutlined from '@ant-design/icons/QuestionCircleOutlined';
import PageHeaderBtn from 'pages/Admin/components/Form/PageHeaderBtn';

const EditTitlesStyled = styled.div`
  width: 100%;
  height: 7rem;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  padding-left: 40px;
  margin-bottom: 1.5rem;
`;

const TitleTextsStyled = styled.div`
  padding-top: 2rem;
  display: flex;
`;

const TitleTextStyled = styled.div`
  padding-right: 1rem;
  font-size: 25px;
`;

const QuestionIconStyled = styled(QuestionCircleOutlined)`
  font-size: 25px;
`;

const PageBtnStyled = styled(PageHeaderBtn)`
  padding: 0px;
`;

const EditTitle = () => {
  return (
    <EditTitlesStyled>
      <TitleTextsStyled>
        <PageBtnStyled />
        <TitleTextStyled>상품 조회/수정 </TitleTextStyled>
        <QuestionIconStyled />
      </TitleTextsStyled>
    </EditTitlesStyled>
  );
};

export default EditTitle;
