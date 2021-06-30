import { useEffect, useState, useRef } from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import antTable from 'pages/Admin/components/Table/Table';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import { css } from 'styled-components';
import DeliveryUpdateModal from './DeliveryUpdateModal';

const TitlesCss = css`
  width: 100%;
  height: 7rem;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  padding-left: 4rem;
  border-bottom: 0px;
`;

const Titles = styled.div`
  ${TitlesCss};
`;

const MenuBtn = styled.div`
  ${TitlesCss};
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

const TableStyled = styled(antTable)``;

const BasicSelectBoxStyled = styled(BasicSelectBox)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-left: ${(props) => props.paddingleft};
  margin-left: ${(props) => props.marginleft};
  margin-right: 5rem;
`;

const Table = ({
  updateDeliveryDetailData,
  deleteDeliveryData,
  updateDeliveryData,
  result,
  count,
}) => {
  const [modifyVisibleState, setModifyVisibleState] = useState(false);
  const [addVisibleState, setAddVisibleState] = useState(false);
  const [dataState, setDatasState] = useState([]);
  const [indexState, setIndexState] = useState([]);

  //테이블데이터
  const groupNamesRef = useRef(null);
  const [useStatusState, setUseStatusState] = useState('');
  const [calculationWayState, setCalculationWayState] = useState('');
  const [addPriceState, setAddPriceState] = useState('');

  useEffect(() => {
    setDatasState(result);
  }, [result]);

  const handleRegistConnectProductBtn = () => {
    handleShowAddModalBtn();
  };

  const handleShowModifyModalBtn = (_index) => {
    setIndexState(_index);
    setModifyVisibleState(true);
  };

  const handelShowDeleteModalBtn = (index) => {
    deleteDeliveryData(index);
  };

  const handleShowAddModalBtn = () => {
    setAddVisibleState(true);
  };

  const handleModifyDataSaveBtn = () => {
    const data = {
      body: groupNamesRef.current.state.value,
      status: useStatusState,
    };
    updateDeliveryDetailData(indexState, data);
  };

  const handleAddDataSaveBtn = () => {
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
            handleShowModifyModalBtn(id);
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
          onClick={() => handelShowDeleteModalBtn(id)}
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
      dataIndex: 'status',
    },
    {
      title: '등록일',
      dataIndex: 'created_at',
    },
    {
      title: '수정일',
      dataIndex: 'updated_at',
    },
  ];

  const NumDataToWord = () => {
    for (var i = 0; i < dataState.length; i++) {
      switch (dataState[i].status) {
        case 0:
          dataState[i].status = '미사용';
          break;
        case 1:
          dataState[i].status = '사용';
          break;
      }
    }
  };
  NumDataToWord();

  return (
    <>
      <DeliveryUpdateModal
        visible={modifyVisibleState}
        setVisible={setModifyVisibleState}
        onClick={handleModifyDataSaveBtn}
        title="배송비묶음그룹"
        groupNamesRef={groupNamesRef}
        setUseStatusState={setUseStatusState}
        setCalculationWayState={setCalculationWayState}
        setAddPriceState={setAddPriceState}
      />
      <DeliveryUpdateModal
        visible={addVisibleState}
        setVisible={setAddVisibleState}
        onClick={handleAddDataSaveBtn}
        title="배송비묶음그룹"
        groupNamesRef={groupNamesRef}
        setUseStatusState={setUseStatusState}
        setCalculationWayState={setCalculationWayState}
        setAddPriceState={setAddPriceState}
      />

      <Titles>
        <TitleTexts>
          <TitleText>조회 건수 (총 {count} 건) </TitleText>
          <BasicSelectBoxStyled width="12rem" list={list} />
        </TitleTexts>
      </Titles>
      <MenuBtn>
        <BasicButton
          onClick={handleRegistConnectProductBtn}
          label={'+ 묶음그룹 추가'}
        ></BasicButton>
      </MenuBtn>

      <TableStyled
        scroll={{ x: '100vw', y: 500 }}
        columns={columns}
        data={dataState}
        selectionType={'checkbox'}
        onChange={() => {}}
      />
    </>
  );
};

export default Table;
const list = [
  { value: 'ten', label: '10개씩' },
  { value: 'fifty', label: '50개씩' },
  { value: 'hundred', label: '100개씩' },
  { value: 'fiveHundred', label: '500개씩' },
];
