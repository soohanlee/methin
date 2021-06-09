import 'antd/dist/antd.css';
import { Modal } from 'antd';
import styled from 'styled-components';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import { useEffect, useState } from 'react';

const ItemContainerStyled = styled.div`
  display: flex;
`;

const SubContainerStyled = styled.div`
  max-width: 30rem;
  width: 100%;
  border: 1px solid black;
  margin-right: 1rem;
`;

const SubItemContainerStyled = styled.div`
  height: 30rem;
  overflow-y: auto;
`;

const ItemStyled = styled.div`
  background: ${(props) => (props.isClicked ? 'lightgrey' : 'white')};
`;

const ItemTitleStyled = styled.div`
  border-bottom: 0.1rem solid black;
`;

const Styled = styled.div`
  padding: 2rem;
  padding-bottom: 0px;
  border: 1px solid #f0f0f0;
`;

const ContainerStyled = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  align-items: center;
`;

const _ContainerStyled = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const TitleTextStyled = styled.div`
  margin-right: 3rem;
`;

const BasicTextInputBoxStyled = styled(BasicTextInputBox)`
  width: 58rem;
  margin-right: 3rem;
`;

const CategoryModal = (property) => {
  const [categoryTypeState, setCategoryTypeState] = useState(0);
  const [classificationdataState, setClassificationdataState] = useState({});
  const [selectedFirstItemState, setSelectedFirstItemState] = useState('축산');
  const [selectdSecondItemState, setSelectedSecondItemState] = useState('축산');
  const dataKey = Object.keys(classificationdataState);

  useEffect(() => {
    setClassificationdataState(property.dataList);
  }, []);

  const handleFristItemClick = (value) => {
    setSelectedFirstItemState(value);
  };

  const handleSecondItemClick = (value) => {
    setSelectedSecondItemState(value);
  };

  const okClick = () => {
    property.setVisible(false);
    property.onClick();
  };

  const renderTap = () => {
    switch (categoryTypeState) {
      case 0:
        return renderCategorySearch();
      case 1:
        return renderCategorySelect();
      default:
        return renderCategorySearch();
    }
  };

  const renderCategorySearch = () => {
    return (
      <>
        <_ContainerStyled>
          <TitleTextStyled>카테고리명</TitleTextStyled>
          <BasicTextInputBoxStyled
            ref={property.catagoryRef}
          ></BasicTextInputBoxStyled>
        </_ContainerStyled>

        <ContainerStyled>
          <TitleTextStyled>선택한 카테고리 :</TitleTextStyled>
        </ContainerStyled>

        <ContainerStyled>
          <TitleTextStyled>선택한 카테고리 코드 : </TitleTextStyled>
        </ContainerStyled>
      </>
    );
  };

  const renderCategorySelect = () => {
    return (
      <>
        <ItemContainerStyled>
          <SubContainerStyled>
            <ItemTitleStyled>1차 분류</ItemTitleStyled>
            <SubItemContainerStyled>
              {dataKey &&
                dataKey.map((item) => (
                  <div
                    key={item}
                    isClicked={item === selectedFirstItemState}
                    onClick={() => handleFristItemClick(item)}
                  >
                    {item}
                  </div>
                ))}
            </SubItemContainerStyled>
          </SubContainerStyled>
          <SubContainerStyled>
            <ItemTitleStyled>2차 분류</ItemTitleStyled>
            <SubItemContainerStyled>
              {classificationdataState[selectedFirstItemState] &&
                classificationdataState[selectedFirstItemState].map((item) => (
                  <ItemStyled
                    key={item}
                    isClicked={item === selectdSecondItemState}
                    onClick={() => handleSecondItemClick(item)}
                  >
                    {item}
                  </ItemStyled>
                ))}
            </SubItemContainerStyled>
          </SubContainerStyled>
        </ItemContainerStyled>
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
        <ContainerStyled>
          <ContainerStyled>
            <BasicButton
              onClick={() => {
                setCategoryTypeState(0);
              }}
              label="카테고리명 검색"
            ></BasicButton>
            <BasicButton
              onClick={() => {
                setCategoryTypeState(1);
              }}
              label="카테고리명 선택"
            ></BasicButton>
          </ContainerStyled>
          {renderTap()}
        </ContainerStyled>
      </Modal>
    </>
  );
};
export default CategoryModal;
