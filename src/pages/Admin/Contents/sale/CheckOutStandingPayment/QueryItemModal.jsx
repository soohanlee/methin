import 'antd/dist/antd.css';
import { Modal } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Transfer, Button } from 'antd';
import { useState } from 'react';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';

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

  for (let i = 0; i < 20; i++) {
    mockData.push({
      key: i.toString(),
      title: itemNames[i].id,
      description: itemNames[i].description,
    });
  }

  const initialTargetKeys = mockData
    .filter((item) => +item.key >= 0)
    .map((item) => item.key);

  const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const onChange = (nextTargetKeys, direction, moveKeys) => {
    console.log('targetKeys:', nextTargetKeys);
    console.log('direction:', direction);
    console.log('moveKeys:', moveKeys);
    setTargetKeys(nextTargetKeys);
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
            key="back"
            onClick={() => {
              property.setVisible(false);
            }}
          >
            초기화
          </Button>,

          <Button
            key="back"
            onClick={() => {
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
            <BasicSelectBox list={list} />
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
  { value: '1', label: '설정안함' },
  { value: '2', label: '1' },
  { value: '3', label: '2' },
  { value: '4', label: '3' },
  { value: '4', label: '4' },
];

const itemNames = [
  { id: '상품주문번호(필수)', description: '설명' },
  { id: '주문번호(필수)', description: '설명' },
  { id: '주문일시', description: '설명' },
  { id: '구매자명', description: '설명' },
  { id: '구매자ID', description: '설명' },
  { id: '판매채널', description: '설명' },
  { id: '수취인명', description: '설명' },
  { id: '결제/입금기한', description: '설명' },
  { id: '상품번호', description: '설명' },
  { id: '상품평', description: '설명' },
  { id: '상품종류', description: '설명' },
  { id: '옵션정보', description: '설명' },
  { id: '수량', description: '설명' },
  { id: '상품가격', description: '설명' },
  { id: '옵션가격', description: '설명' },
  { id: '상품별 할인액', description: '설명' },
  { id: '상품별 총 주문금액', description: '설명' },
  { id: '배송비 형태', description: '설명' },
  { id: '배송비 묶음번호', description: '설명' },
  { id: '배송비 유형', description: '설명' },
  { id: '배송비 합계', description: '설명' },
  { id: '배송비 할인액', description: '설명' },
  { id: '결제수단', description: '설명' },
];
