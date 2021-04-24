import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import Table from 'compononets/Table/Table';
import BasicDropBox from 'compononets/Form/BasicDropBox';
import BasicButton from 'compononets/Form/BasicButton';
import { css } from 'styled-components';

const EditDeliveryTitlesCss = css`
  width: 100%;
  height: 7rem;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  padding-left: 4rem;
  border-bottom: 0px;
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

const SetButton = (label) => {
  return <BasicButton label={label}></BasicButton>;
};

const editDeliveryProductTable = () => {
  return (
    <>
      <EditDeliveryTitles>
        <TitleTexts>
          <TitleText>조회 건수 (총 N 건) </TitleText>
          <BasicDropBoxStyled label="50 개씩" />
        </TitleTexts>
      </EditDeliveryTitles>
      <EditDeliveryMenuBtn>{SetButton('+ 묶음그룹 추가')}</EditDeliveryMenuBtn>
      <TableStyled />
    </>
  );
};

export default editDeliveryProductTable;
