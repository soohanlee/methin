import 'antd/dist/antd.css';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Modal, Transfer, Button } from 'antd';
import { useEffect, useState, useRef } from 'react';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicTransfer from 'pages/Admin/components/Form/BasicTransfer';
import { COOKIE_KEYS } from 'configs/config';
import { get, set } from 'js-cookie';

const CategoryModalBox = styled.div`
  padding: 2rem;
  padding-bottom: 0px;
  border: 1px solid #f0f0f0;
`;

const CategoryModalContent = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
`;

const ContentTitle = styled.div`
  margin-right: 3rem;
`;

const BasicTransferStyled = styled(Transfer)``;

const QueryItemModal = (property) => {
  const [selectDataState, setSelectDataState] = useState([]);
  const [targetDataState, setTargetDataState] = useState([]);

  const [selectCheckRowState, setSelectCheckRowState] = useState([]);
  const [targetCheckRowState, setTargetCheckRowState] = useState([]);

  const mockData = useRef([]);

  useEffect(() => {
    for (let i = 0; i < itemNames.length; i++) {
      mockData.current.push(itemNames[i].id);
    }
  }, []);

  useEffect(() => {
    if (property.visible === true) {
      initData();
    }
  }, [property.visible]);

  const [gridCount, setGridCount] = useState([]);

  const onScroll = (direction, e) => {};

  const handleGridCountChange = (value) => {
    setGridCount(value);
  };

  function setDataCookie(selectData, targetData) {
    set(
      COOKIE_KEYS.CheckOutStandingPaymentSelectData,
      JSON.stringify(selectData),
    );
    set(
      COOKIE_KEYS.CheckOutStandingPaymentTargetData,
      JSON.stringify(targetData),
    );
  }

  function getSelectDataCookie() {
    let data = [];
    if (get(COOKIE_KEYS.CheckOutStandingPaymentSelectData)) {
      data = JSON.parse(get(COOKIE_KEYS.CheckOutStandingPaymentSelectData));
    }
    return data ? data : [];
  }

  function getTargetDataookie() {
    let data = mockData.current;
    console.log(get(COOKIE_KEYS.CheckOutStandingPaymentTargetData));
    if (get(COOKIE_KEYS.CheckOutStandingPaymentTargetData)) {
      data = JSON.parse(get(COOKIE_KEYS.CheckOutStandingPaymentTargetData));
    }
    return data ? data : mockData.current;
  }

  function setGridCountCookie(value) {
    set(COOKIE_KEYS.CheckOutStandingPaymentGridCount, value);
  }

  function getGridCountCookie() {
    const key = get(COOKIE_KEYS.CheckOutStandingPaymentGridCount);
    return key || 0;
  }

  const resetData = () => {
    var returnValue = window.confirm(
      `해당 메뉴의 그리드 설정이 모두 초기화 됩니다. 초기화 하시겠습니까?`,
    );
    if (returnValue) {
      setSelectDataState([]);
      setTargetDataState(mockData.current);
      setSelectCheckRowState([]);
      setTargetCheckRowState([]);
    }
  };

  const initData = () => {
    setGridCount(getGridCountCookie());
    setSelectDataState(getSelectDataCookie());
    setTargetDataState(getTargetDataookie());
    setSelectCheckRowState([]);
    setTargetCheckRowState([]);
  };

  return (
    <>
      <Modal
        title={property.title}
        centered
        visible={property.visible}
        onCancel={() => {
          property.setVisible();
        }}
        width={900}
        footer={[
          <Button key="back" onClick={property.setVisible}>
            취소
          </Button>,

          <Button key="reset" onClick={resetData}>
            초기화
          </Button>,

          <Button
            key="setting"
            onClick={() => {
              setDataCookie(selectDataState, targetDataState);
              setGridCountCookie(gridCount);
              property.onClick();
            }}
          >
            설정
          </Button>,
        ]}
      >
        <CategoryModalBox>
          <CategoryModalContent>
            <ContentTitle>그리드 틀고정</ContentTitle>
            <BasicSelectBox
              value={gridCount}
              onChange={handleGridCountChange}
              list={list}
            />
          </CategoryModalContent>

          <BasicTransfer
            TitleLabel={'그리드 항목설정'}
            SelectedLabel={'선택 가능 목록'}
            TargetLabel={'그리드 노출 목록'}
            mockUpData={mockData.current}
            selectData={selectDataState}
            targetData={targetDataState}
            selectCheckRow={selectCheckRowState}
            targetCheckRow={targetCheckRowState}
            setSelectCheckedRow={setSelectCheckRowState}
            setTargetCheckRow={setTargetCheckRowState}
            onChange={(e) => {
              setSelectDataState(e.localSelectData.current);
              setTargetDataState(e.localTargetData.current);
            }}
          />
        </CategoryModalBox>
      </Modal>
    </>
  );
};
export default QueryItemModal;

const list = [
  { value: 0, label: '설정안함' },
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
];

const itemNames = [
  { id: '주문번호', description: '설명' },
  { id: '주문날짜', description: '설명' },
  { id: '구매자명', description: '설명' },
  { id: '구매자ID', description: '설명' },
  { id: '수취인명', description: '설명' },
  { id: '상품번호', description: '설명' },
  { id: '상품명', description: '설명' },
  { id: '옵션', description: '설명' },
  { id: '수량', description: '설명' },
  { id: '상품가격', description: '설명' },
  { id: '옵션가격', description: '설명' },
  { id: '총 주문금액', description: '설명' },
];
