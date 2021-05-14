import React, {useEffect, useState } from 'react';
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

const EditDeliveryProductTable = ({updateDeliveryData,deleteDeliveryData,result}) => {
  const [visible, setVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [data,setDatas] = useState([]);
  const [dataProperty,setDataProperty] = useState([]);
  const [index,setInde] = useState([]);
  useEffect(async() => {
    setDatas(result)
    console.log(data)

}, [result]);

  const setRegistConnectProduct = () => {
    console.log(result)
    console.log(data)

    alert('묶음그룹 추가');
  };

  const showModal = (index,data) => {
    setDataProperty(data)
    setInde(index);
    setVisible(true);
  };

  const showDeleteModal = (index) => {
    deleteDeliveryData(index);
    // setDeleteVisible(true);

  };

  const columns = [
    {
      dataIndex: 'modify',
      render: (index) => (
        // <BasicButton onClick={showModal} label={text}></BasicButton>
        <BasicButton onClick={()=>{showModal(index)}} label = '수정'></BasicButton>
      ),
    },
    {
      dataIndex: 'delete',
      render: (index) => (
        <BasicButton onClick={()=>showDeleteModal(index)} label = '삭제'></BasicButton>
        // <BasicButton onClick={showDeleteModal} label={text}></BasicButton>
      ),
    },
    {
      title: '그룹번호',
      dataIndex: 'id',
    },
    {
      title: '그룹명',
      dataIndex: 'body',
    },

    {
      title: '기본배송비',
      dataIndex: 'amount1',
    },
    {
      title: '제주,산간 배송비',
      dataIndex: 'amount2',
    },
    {
      title: '사용여부',
      dataIndex: 'useStatus',
    },
    {
      title: '등록일',
      dataIndex: 'created_at',
    },
    {
      title: '수정일',
      dataIndex: 'modifyDate',
    },
  ];

  return (
    <>
      <DeliveryModifyModal
        visible={visible}
        setVisible={setVisible}
        onClick = {()=>{updateDeliveryData(index,dataProperty)}}
        title="배송비묶음그룹"
      />
      <DeliveryDeleteModal
        visible={deleteVisible}
        setVisible={setDeleteVisible}
        title="삭제되었습니다."
      />

      <EditDeliveryTitles>
        <TitleTexts>
          <TitleText>조회 건수 (총 N 건) </TitleText>
          <BasicSelectBoxStyled width="12rem" list={list} />
        </TitleTexts>
      </EditDeliveryTitles>
      <EditDeliveryMenuBtn>
      <BasicButton onClick={setRegistConnectProduct} label={'+ 묶음그룹 추가'}></BasicButton>

      </EditDeliveryMenuBtn>

      <TableStyled columns={columns} data={data} selectionType={'checkbox'} />
    </>
  );
};



const list = [
  { value: 'ten', label: '10개씩' },
  { value: 'fifty', label: '50개씩' },
  { value: 'hundred', label: '100개씩' },
  { value: 'fiveHundred', label: '500개씩' },
];

export default EditDeliveryProductTable;
