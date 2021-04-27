import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import Table from 'pages/Admin/components/Table/Table';
import BasicDropBox from 'pages/Admin/components/Form/BasicDropBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import { css } from 'styled-components';

const EditDeliveryTitlesCss = css`
  width: 100%;
  height: 7rem;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  padding-left: 4rem;
  border-top: 0px;
`;

const EditDeliveryTitles = styled.div`
  ${EditDeliveryTitlesCss};
`;

const EditDeliveryMenuBtn = styled.div`
  ${EditDeliveryTitlesCss};
  display: flex;
  align-items: center;
`;

const TitleTexts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const TitleText = styled.div`
  padding-right: 1rem;
  font-size: 15px;
`;

const TableStyled = styled(Table)``;

const BasicDropBoxStyled = styled(BasicDropBox)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-left: ${(props) => props.paddingleft};
  margin-left: ${(props) => props.marginleft};
  margin-right: 5rem;
`;

const onClickBtn = (e) => {
  alert(e.target.innerText);
};

const SetButton = (label) => {
  return <BasicButton onClick={onClickBtn} label={label}></BasicButton>;
};

const editTemplateProductTable = () => {
  return (
    <>
      <TableStyled />
      <EditDeliveryMenuBtn>
        {SetButton('등록')}
        {SetButton('선택삭제')}
      </EditDeliveryMenuBtn>
    </>
  );
};

export default editTemplateProductTable;
