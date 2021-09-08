import 'antd/dist/antd.css';
import { Radio, Modal } from 'antd';
import styled from 'styled-components';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import { useEffect, useState, useRef } from 'react';

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
  margin-bottom: 1rem;
`;

const CategoryModal = ({ title, visible, setVisible, categoryList }) => {
  const categoryRef = useRef();
  const [categoryTypeState, setCategoryTypeState] = useState(0);
  const [classificationdataState, setClassificationdataState] = useState({});
  const [selectedFirstItemState, setSelectedFirstItemState] = useState('축산');
  const [selectdSecondItemState, setSelectedSecondItemState] = useState('축산');
  const dataKey = Object.keys(classificationdataState);

  const [selectCategoryState, setSelectCategoryState] = useState();
  const [selectCategoryCodeState, setSelectCategoryCodeState] = useState();
  const [categoryTapSelectState, setCategoryTapSelectState] = useState(
    'search',
  );

  useEffect(() => {
    setClassificationdataState(categoryList);
  }, []);

  const handleFristItemClick = (value) => {
    setSelectedFirstItemState(value);
  };

  const handleSecondItemClick = (value) => {
    setSelectedSecondItemState(value);
  };

  const handleOkBtn = () => {
    switch (categoryTypeState) {
      case 0:
        console.log(categoryRef.current.state.value);
        break;
      case 1:
        console.log(selectedFirstItemState);
        console.log(selectdSecondItemState);
        break;
      default:
        break;
    }

    setVisible(false);
  };

  const handleSearchBtn = () => {
    setSelectCategoryState(categoryRef.current.state.value);
    setSelectCategoryCodeState('Code??');
  };

  const renderChangedTap = () => {
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
          <BasicTextInputBoxStyled
            placeholder="카테고리명 입력"
            ref={categoryRef}
          ></BasicTextInputBoxStyled>
          <BasicButton onClick={handleSearchBtn} label="검색"></BasicButton>
        </_ContainerStyled>

        <ContainerStyled>
          <TitleTextStyled>
            선택한 카테고리 : {selectCategoryState}
          </TitleTextStyled>
        </ContainerStyled>

        <ContainerStyled>
          <TitleTextStyled>
            선택한 카테고리 코드 : {selectCategoryCodeState}
          </TitleTextStyled>
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

  const handleCategorySelect = (e) => {
    setCategoryTapSelectState(e.target.value);
  };

  return (
    <>
      <Modal
        title={title}
        centered
        visible={visible}
        onOk={handleOkBtn}
        onCancel={() => {
          setVisible(false);
          setCategoryTapSelectState('search');
          setCategoryTypeState(0);
        }}
        width={900}
        okText="저장"
        cancelText="닫기"
      >
        <ContainerStyled>
          <ContainerStyled>
            <Radio.Group
              onChange={handleCategorySelect}
              value={categoryTapSelectState}
              defaultValue={'search'}
            >
              <Radio.Button
                value="search"
                onClick={() => {
                  setCategoryTypeState(0);
                }}
              >
                카테고리명 검색
              </Radio.Button>
              <Radio.Button
                value="select"
                onClick={() => {
                  setCategoryTypeState(1);
                }}
              >
                카테고리명 선택
              </Radio.Button>
            </Radio.Group>
          </ContainerStyled>
          {renderChangedTap()}
        </ContainerStyled>
      </Modal>
    </>
  );
};
export default CategoryModal;
