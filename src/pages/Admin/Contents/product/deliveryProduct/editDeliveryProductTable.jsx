import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import Table from 'pages/Admin/components/Table/Table';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import { css } from 'styled-components';
import DeliveryUpdateModal from 'pages/Admin/Contents/product/deliveryProduct/DeliveryUpdateModal';

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

const EditDeliveryProductTable = ({
  updateDeliveryDetailData,
  deleteDeliveryData,
  updateDeliveryData,
  result,
}) => {
  const [modifyVisible, setModifyVisible] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [data, setDatas] = useState([]);
  const [index, setIndex] = useState([]);

  //테이블데이터
  const groupNamesRef = useRef(null);
  const [useStatusState, setUseStatusState] = useState('');
  const [calculationWayState, setCalculationWayState] = useState('');
  const [addPriceState, setAddPriceState] = useState('');

  useEffect(() => {
    setDatas(result);
  }, [result]);

  const setRegistConnectProduct = () => {
    showAddModal();
  };

  const showModifyModal = (_index) => {
    setIndex(_index);
    setModifyVisible(true);
  };

  const showDeleteModal = (index) => {
    deleteDeliveryData(index);
  };

  const showAddModal = () => {
    setAddVisible(true);
  };

  const modifyDataSave = () => {
    const data = {
      body: groupNamesRef.current.state.value,
    };
    updateDeliveryDetailData(index, data);
  };

  const addDataSave = () => {
    const data = {
      body: groupNamesRef.current.state.value,
      amount1: 1000,
      amount2: 2000,
    };
    updateDeliveryData(data);
  };

  const columns = [
    {
      title: '수정',
      dataIndex: 'id',
      render: (id) => (
        <BasicButton
          onClick={() => {
            showModifyModal(id);
          }}
          label="수정"
        ></BasicButton>
      ),
    },
    {
      title: '삭제',
      dataIndex: 'id',
      render: (id) => (
        <BasicButton
          onClick={() => showDeleteModal(id)}
          label="삭제"
        ></BasicButton>
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
      <DeliveryUpdateModal
        visible={modifyVisible}
        setVisible={setModifyVisible}
        onClick={modifyDataSave}
        title="배송비묶음그룹"
        groupNamesRef={groupNamesRef}
        setUseStatusState={setUseStatusState}
        setCalculationWayState={setCalculationWayState}
        setAddPriceState={setAddPriceState}
      />
      <DeliveryUpdateModal
        visible={addVisible}
        setVisible={setAddVisible}
        onClick={addDataSave}
        title="배송비묶음그룹"
        groupNamesRef={groupNamesRef}
        setUseStatusState={setUseStatusState}
        setCalculationWayState={setCalculationWayState}
        setAddPriceState={setAddPriceState}
      />

      <EditDeliveryTitles>
        <TitleTexts>
          <TitleText>조회 건수 (총 N 건) </TitleText>
          <BasicSelectBoxStyled width="12rem" list={list} />
        </TitleTexts>
      </EditDeliveryTitles>
      <EditDeliveryMenuBtn>
        <BasicButton
          onClick={setRegistConnectProduct}
          label={'+ 묶음그룹 추가'}
        ></BasicButton>
      </EditDeliveryMenuBtn>

      <TableStyled columns={columns} data={data} selectionType={'checkbox'} />
    </>
  );
};

export default EditDeliveryProductTable;
const list = [
  { value: 'ten', label: '10개씩' },
  { value: 'fifty', label: '50개씩' },
  { value: 'hundred', label: '100개씩' },
  { value: 'fiveHundred', label: '500개씩' },
];
