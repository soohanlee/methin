import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import Table from 'pages/Admin/components/Table/Table';
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

const EditDeliveryMenuBtn = styled.div`
  ${EditDeliveryTitlesCss};
  display: flex;
  align-items: center;
`;

const TableStyled = styled(Table)``;

const onClickBtn = (e) => {
  alert(e.target.innerText);
};

const SetButton = (label) => {
  return <BasicButton onClick={onClickBtn} label={label}></BasicButton>;
};

const editTemplateProductTable = () => {
  return (
    <>
      <TableStyled  columns={columns} selectionType={'checkbox'}/>
      <EditDeliveryMenuBtn>
        {SetButton('등록')}
        {SetButton('선택삭제')}
      </EditDeliveryMenuBtn>
    </>
  );
};

export default editTemplateProductTable;

const columns = [
  {
    title: 'ID',
    dataIndex: 'ID',
  },
  {
    title: '템플릿명',
    dataIndex: 'templateName',
  },
  {
    title: '수정',
    dataIndex: 'modify',
  },
  {
    title: '등록일',
    dataIndex: 'registrationDate',
  },
  {
    title: '수정일',
    dataIndex: 'modifyDate',
  }
];