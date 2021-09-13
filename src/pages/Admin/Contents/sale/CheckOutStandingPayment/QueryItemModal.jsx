import 'antd/dist/antd.css';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Modal, Transfer, Button } from 'antd';
import { useEffect, useState } from 'react';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import { COOKIE_KEYS } from 'configs/config';
import { get, set, remove } from 'js-cookie';

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
  const mockData = [];

  useEffect(() => {
    if (property.visible === true) {
      resetData();
    }
  }, [property.visible]);

  for (let i = 0; i < itemNames.length; i++) {
    mockData.push({
      key: i.toString(),
      title: itemNames[i].id,
      description: itemNames[i].description,
    });
  }
  const [targetKeys, setTargetKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);

  const onChange = (nextTargetKeys, direction, moveKeys) => {
    console.log('targetKeys:', nextTargetKeys);
    console.log('direction:', direction);
    console.log('moveKeys:', moveKeys);
    var _targetKeys = [...nextTargetKeys];
    setTargetKeys(_targetKeys);
  };

  const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    console.log('sourceSelectedKeys:', sourceSelectedKeys);
    console.log('targetSelectedKeys:', targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const onScroll = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };

  const resetData = () => {
    if (getTargetCookie() !== null) {
      setTargetKeys(getTargetCookie());
    }
  };

  function setTargetKeyCookie(keys) {
    var _keys = [...keys];
    set(COOKIE_KEYS.CheckOutStandingPaymentTargetKeys, _keys);
  }

  function getTargetCookie() {
    const key = get(COOKIE_KEYS.CheckOutStandingPaymentTargetKeys);
    return [...key] || null;
  }

  return (
    <>
      <Modal
        title={property.title}
        centered
        visible={property.visible}
        onCancel={() => {
          property.setVisible(false);
        }}
        width={900}
        footer={[
          <Button
            key="back"
            onClick={() => {
              property.setVisible(false);
            }}
          >
            취소
          </Button>,

          <Button
            key="init"
            onClick={() => {
              setSelectedKeys([]);
              setTargetKeys([]);
            }}
          >
            초기화
          </Button>,

          <Button
            key="setting"
            onClick={() => {
              setTargetKeyCookie(targetKeys);
              property.setVisible(false);
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
              value={property.gridCount === 0 ? '설정안함' : property.gridCount}
              onChange={property.setGridCount}
              list={list}
            />
          </CategoryModalContent>
          <CategoryModalContent>
            <ContentTitle>그리드 항목설정</ContentTitle>
            <BasicTransferStyled
              dataSource={mockData}
              titles={['선택 가능 목록', '그리드 노출 목록']}
              targetKeys={targetKeys}
              selectedKeys={selectedKeys}
              onChange={onChange}
              onSelectChange={onSelectChange}
              onScroll={onScroll}
              render={(item) => item.title}
              listStyle={{
                width: 300,
                height: 350,
              }}
            />
          </CategoryModalContent>
        </CategoryModalBox>
      </Modal>
    </>
  );
};
export default QueryItemModal;

const list = [
  { value: '0', label: '설정안함' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
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

// const itemNames = [
//   { id: '상품주문번호(필수)', description: '설명' },
//   { id: '주문번호(필수)', description: '설명' },
//   { id: '주문일시', description: '설명' },
//   { id: '구매자명', description: '설명' },
//   { id: '구매자ID', description: '설명' },
//   { id: '판매채널', description: '설명' },
//   { id: '수취인명', description: '설명' },
//   { id: '결제/입금기한', description: '설명' },
//   { id: '상품번호', description: '설명' },
//   { id: '상품평', description: '설명' },
//   { id: '상품종류', description: '설명' },
//   { id: '옵션정보', description: '설명' },
//   { id: '수량', description: '설명' },
//   { id: '상품가격', description: '설명' },
//   { id: '옵션가격', description: '설명' },
//   { id: '상품별 할인액', description: '설명' },
//   { id: '상품별 총 주문금액', description: '설명' },
//   { id: '배송비 형태', description: '설명' },
//   { id: '배송비 묶음번호', description: '설명' },
//   { id: '배송비 유형', description: '설명' },
//   { id: '배송비 합계', description: '설명' },
//   { id: '배송비 할인액', description: '설명' },
//   { id: '결제수단', description: '설명' },
// ];
