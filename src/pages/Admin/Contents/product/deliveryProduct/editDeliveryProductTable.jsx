import React,{useState} from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import Table from 'pages/Admin/components/Table/Table';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import { css } from 'styled-components';
import DeliveryModifyModal from 'pages/Admin/Contents/product/deliveryProduct/DeliveryModifyModal';
import DeliveryDeleteModal from 'pages/Admin/Contents/product/deliveryProduct/DeliveryDeleteModal';

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

const BasicSelectBoxStyled = styled(BasicSelectBox)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-left: ${(props) => props.paddingleft};
  margin-left: ${(props) => props.marginleft};
  margin-right: 5rem;
`;

const SetButton = (label) => {
  return <BasicButton label={label}></BasicButton>;
};

const setRegistConnectProduct = () => {
  alert('묶음그룹 추가');
};

const EditDeliveryProductTable = () => {
  const [visible,setVisible] = useState(false);
  const [deleteVisible,setDeleteVisible] = useState(false);
  
  const showModal = () => {
    setVisible(true);
  };

  const showDeleteModal = () => {
    setDeleteVisible(true);
  };

  const columns = [
    {
      title: '수정',
      dataIndex: 'modify',
      render: (text) => <BasicButton onClick = {showModal} label = {text}></BasicButton>
    },
    {
      title: '삭제',
      dataIndex: 'delete',
      render: (text) => <BasicButton onClick = {showDeleteModal} label = {text}></BasicButton>
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
      dataIndex: 'areaClassification2',
    },
    {
      title: '권역3 추가배송비',
      dataIndex: 'areaClassification3',
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
    },
  ];

  return (
    <>
    <DeliveryModifyModal visible = {visible} setVisible = {setVisible} title = '배송비묶음그룹'/>
    <DeliveryDeleteModal visible = {deleteVisible} setVisible = {setDeleteVisible} title = '삭제되었습니다.'/>

      <EditDeliveryTitles>
        <TitleTexts>
          <TitleText>조회 건수 (총 N 건) </TitleText>
          <BasicSelectBoxStyled width  = '12rem' list = {list}/>
        </TitleTexts>
      </EditDeliveryTitles>
      <EditDeliveryMenuBtn onClick={setRegistConnectProduct}>
        {SetButton('+ 묶음그룹 추가')}
      </EditDeliveryMenuBtn>

      <TableStyled columns={columns} data = {data} selectionType={'checkbox'} />
    </>
  );
};

const data = [
  {
    key: '1',
    modify:'수정',
    delete:'삭제',
    groupNumber: '123124125',
    groupName: '기본 배송비 묶음그룹',
    calculationMethod: '최소부과',
    areaClassification: '',
    areaClassification2: '',
    areaClassification3: '',
    useStatus:'사용',
    registrationDate:'2021.04.23',
    modifyDate:'-'
  },
];


const list = [
  { value: 'ten', label: '10개씩' },
  { value: 'fifty', label: '50개씩' },
  { value: 'hundred', label: '100개씩' },
  { value: 'fiveHundred', label: '500개씩' },
];

export default EditDeliveryProductTable;
