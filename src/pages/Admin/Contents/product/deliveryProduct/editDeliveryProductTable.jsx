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
      <TableStyled columns={columns} selectionType={'checkbox'}/>
    </>
  );
};

const columns = [
  {
    title: '수정',
    dataIndex: 'modify',
  },
  {
    title: '삭제',
    dataIndex: 'delete',
  },
  {
    title: '그룹번호',
    dataIndex: 'groupNumber',
  },
  {
    title: '그룹명',
    dataIndex: 'groupName',
  },
  {
    title: '계산방식',
    dataIndex: 'calculationMethod',
  },
  {
    title: '권역구분',
    dataIndex: 'areaClassification',
  },
  {
    title: '권역2 추가배송비',
    dataIndex: 'addDrivePrice2',
  },
  {
    title: '권역3 추가배송비',
    dataIndex: 'addDrivePrice3',
  },
  {
    title: '사용여부',
    dataIndex: 'useStatus',
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

export default editDeliveryProductTable;
