import 'antd/dist/antd.css';
import { Radio, Modal } from 'antd';
import styled from 'styled-components';
import BasicAutoComplete from 'pages/Admin/components/Form/BasicAutoComplete';
import BasicCascader from 'pages/Admin/components/Form/BasicCascader';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import { useEffect, useState, useRef } from 'react';
import { getCategoryAsTreeArray } from 'apis/category';

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
  margin-bottom: 2rem;
`;

const TitleTextStyled = styled.div`
  margin-right: 3rem;
`;

const BasicButtonStyled = styled(BasicButton)`
  width: 8.2rem;
`;

const CategoryModal = ({ title, visible, setVisible }) => {
  const categoryRef = useRef();
  const [categoryTypeState, setCategoryTypeState] = useState(0);
  const [categoryInputState, setCategoryInputState] = useState(0);
  const [classificationdataState, setClassificationdataState] = useState([]);
  const [selectedFirstItemState, setSelectedFirstItemState] = useState();
  const [selectedSecondItemState, setSelectedSecondItemState] = useState();
  const [selectedThirdItemState, setSelectedThirdItemState] = useState();

  const [selectCategoryState, setSelectCategoryState] = useState();
  const [selectCategoryCodeState, setSelectCategoryCodeState] = useState();
  const [categoryTapSelectState, setCategoryTapSelectState] = useState(0);

  const [treeItems, setTreeItems] = useState([]);
  const [tree2Items, setTree2Items] = useState([]);
  const [tree3Items, setTree3Items] = useState([]);

  const [treeOptions, setTreeOptions] = useState([]);

  useEffect(() => {
    resetData();
  }, [visible === true]);

  useEffect(async () => {
    let category = await getCategoryAsTreeArray();
    setClassificationdataState(category);
  }, []);

  useEffect(() => {
    if (classificationdataState.length > 0) {
      const currentData = [...classificationdataState];

      setTreeItems(currentData);
      setTree2Items(currentData[0].children);
      setTree3Items(currentData[0].children[0].children);
      setSelectedFirstItemState(currentData[0]);
      setSelectedSecondItemState(currentData[0].children[0]);
      setSelectedThirdItemState(currentData[0].children[0].children[0]);

      const optionResult = currentData.map((item) => {
        return optionDataSet(item);
      });

      setTreeOptions(optionResult);
    }
  }, [classificationdataState]);

  const optionDataSet = (_option) => {
    const result = {
      value: _option.name,
      label: _option.name,
      children: _option.children.map((item) => {
        return {
          value: item.name,
          label: item.name,
          children: item.children.map((_item) => {
            return {
              value: _item.name,
              label: _item.name,
            };
          }),
        };
      }),
    };
    return result;
  };

  useEffect(() => {
    if (selectedFirstItemState != undefined) {
      setTree2Items(selectedFirstItemState.children);
      setSelectedSecondItemState(selectedFirstItemState.children[0]);
    } else {
      setTree2Items([]);
      setSelectedSecondItemState();
    }
  }, [selectedFirstItemState]);

  useEffect(() => {
    if (selectedSecondItemState != undefined) {
      setTree3Items(selectedSecondItemState.children);
      setSelectedThirdItemState(selectedSecondItemState.children[0]);
    } else {
      setTree3Items([]);
      setSelectedThirdItemState();
    }
  }, [selectedSecondItemState]);

  const handleFristItemClick = (value) => {
    setSelectedFirstItemState(value);
  };

  const handleSecondItemClick = (value) => {
    setSelectedSecondItemState(value);
  };

  const handleThirdItemClick = (value) => {
    setSelectedThirdItemState(value);
  };

  const handleOkBtn = () => {
    switch (categoryTypeState) {
      case 0:
        console.log(categoryRef.current.state.value);
        break;
      case 1:
        console.log(selectedFirstItemState);
        console.log(selectedSecondItemState);
        break;
      default:
        break;
    }

    setVisible(false);
  };

  const handleSearchBtn = () => {
    const value = [...categoryInputState];

    if (value.length > 0) {
      let result = value.join('>');
      console.log(result);
      setSelectCategoryState(result);
      setSelectCategoryCodeState('Code??');
    }
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

  const handleCategoryInputChnage = (value) => {
    if (value.length > 0) {
      setCategoryInputState(value);
    }
  };

  const renderCategorySearch = () => {
    return (
      <>
        <_ContainerStyled>
          <BasicCascader
            value={categoryInputState}
            onChange={handleCategoryInputChnage}
            placeholder="카테고리명 입력"
            options={treeOptions}
          ></BasicCascader>
          <BasicButtonStyled onClick={handleSearchBtn} label="검색" />
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
              {treeItems.map((item) => (
                <ItemStyled
                  key={item}
                  isClicked={item === selectedFirstItemState}
                  onClick={() => handleFristItemClick(item)}
                >
                  {item.name}
                </ItemStyled>
              ))}
            </SubItemContainerStyled>
          </SubContainerStyled>
          <SubContainerStyled>
            <ItemTitleStyled>2차 분류</ItemTitleStyled>
            <SubItemContainerStyled>
              {tree2Items.map((item) => (
                <ItemStyled
                  key={item}
                  isClicked={item === selectedSecondItemState}
                  onClick={() => handleSecondItemClick(item)}
                >
                  {item.name}
                </ItemStyled>
              ))}
            </SubItemContainerStyled>
          </SubContainerStyled>
          <SubContainerStyled>
            <ItemTitleStyled>3차 분류</ItemTitleStyled>
            <SubItemContainerStyled>
              {tree3Items.map((item) => (
                <ItemStyled
                  key={item}
                  isClicked={item === selectedThirdItemState}
                  onClick={() => handleThirdItemClick(item)}
                >
                  {item.name}
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

  const resetData = () => {
    setCategoryTapSelectState(0);
    setCategoryInputState('');
    setSelectCategoryState('');
    setSelectCategoryCodeState('');
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
              defaultValue={0}
            >
              <Radio.Button
                value={0}
                onClick={() => {
                  setCategoryTypeState(0);
                }}
              >
                카테고리명 검색
              </Radio.Button>
              <Radio.Button
                value={1}
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
