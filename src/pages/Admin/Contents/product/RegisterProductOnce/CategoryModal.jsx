import 'antd/dist/antd.css';
import { Modal } from 'antd';
import styled from 'styled-components';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';

const ItemContainer = styled.div`
  display: flex;
`;

const ItemBox = styled.div`
  max-width: 30rem;
  width: 100%;
  border: 1px solid black;
  margin-right: 1rem;
`;

const ItemHeader = styled.div`
  border-bottom: 0.1rem solid black;
`;

const ItemBody = styled.div`
  height: 30rem;
  overflow-y: auto;
`;

const Item = styled.div`
  background: ${(props) => (props.isClicked ? 'lightgrey' : 'white')};
`;

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

const BasicTextInputBoxStyled = styled(BasicTextInputBox)`
  width: 58rem;
  margin-right: 3rem;
`;

const CategoryModal = (property) => {
  const [categoryIndex, setCategoryIndex] = useState(0);

  const [data, setData] = useState({});
  const [selectedFirstItem, setSelectedFirstItem] = useState('축산');
  const [selectedSecondItem, setSelectedSecondItem] = useState('축산');
  const dataKey = Object.keys(data);

  useEffect(() => {
    setData(property.dataList);
  }, []);

  const handleFristItemClick = (value) => {
    setSelectedFirstItem(value);
  };

  const handleSecondItemClick = (value) => {
    setSelectedSecondItem(value);
  };

  const okClick = () => {
    property.setVisible(false);
    property.onClick();
  };

  const renderTap = () => {
    switch (categoryIndex) {
      case 0:
        return renderCategory0();
      case 1:
        return renderCategory1();
      case 2:
        return renderCategory2();
      default:
        return renderCategory0();
    }
  };

  const renderCategory0 = () => {
    return (
      <>
        <CategoryModalContent>
          <ContentTitle>카테고리명</ContentTitle>
          <BasicTextInputBoxStyled
            ref={property.catagoryRef}
          ></BasicTextInputBoxStyled>
        </CategoryModalContent>

        <CategoryModalContent>
          <ContentTitle>선택한 카테고리 :</ContentTitle>
        </CategoryModalContent>

        <CategoryModalContent>
          <ContentTitle>선택한 카테고리 코드 : </ContentTitle>
        </CategoryModalContent>
      </>
    );
  };

  const renderCategory1 = () => {
    return (
      <>
        <ItemContainer>
          <ItemBox>
            <ItemHeader>1차 분류</ItemHeader>
            <ItemBody>
              {dataKey &&
                dataKey.map((item) => (
                  <Item
                    key={item}
                    isClicked={item === selectedFirstItem}
                    onClick={() => handleFristItemClick(item)}
                  >
                    {item}
                  </Item>
                ))}
            </ItemBody>
          </ItemBox>
          <ItemBox>
            <ItemHeader>2차 분류</ItemHeader>
            <ItemBody>
              {data[selectedFirstItem] &&
                data[selectedFirstItem].map((item) => (
                  <Item
                    key={item}
                    isClicked={item === selectedSecondItem}
                    onClick={() => handleSecondItemClick(item)}
                  >
                    {item}
                  </Item>
                ))}
            </ItemBody>
          </ItemBox>
        </ItemContainer>
      </>
    );
  };

  const renderCategory2 = () => {
    return (
      <>
        <CategoryModalContent>
          <ContentTitle>카테고리명</ContentTitle>
          <BasicTextInputBoxStyled
            ref={property.catagoryRef}
          ></BasicTextInputBoxStyled>
        </CategoryModalContent>

        <CategoryModalContent>
          <ContentTitle>선택한 카테고리 :</ContentTitle>
        </CategoryModalContent>

        <CategoryModalContent>
          <ContentTitle>선택한 카테고리 코드 : </ContentTitle>
        </CategoryModalContent>
      </>
    );
  };
  return (
    <>
      <Modal
        title={property.title}
        centered
        visible={property.visible}
        onOk={okClick}
        onCancel={() => {
          property.setVisible(false);
        }}
        width={900}
        okText="저장"
        cancelText="닫기"
      >
        <CategoryModalBox>
          <CategoryModalContent>
            <BasicButton
              onClick={() => {
                setCategoryIndex(0);
              }}
              label="카테고리명 검색"
            ></BasicButton>
            <BasicButton
              onClick={() => {
                setCategoryIndex(1);
              }}
              label="카테고리명 선택"
            ></BasicButton>
            <BasicButton
              onClick={() => {
                setCategoryIndex(2);
              }}
              label="카테고리 템플릿"
            ></BasicButton>
          </CategoryModalContent>
          {renderTap()}
        </CategoryModalBox>
      </Modal>
    </>
  );
};
export default CategoryModal;
