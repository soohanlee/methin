import React, { useEffect, useRef, useState } from 'react';
import CustomCollapse from 'pages/Admin/components/Collapse';
import styled from 'styled-components';
import { Input as OriginInput, Empty } from 'antd';
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

const ItemTitleStyled = styled.div`
  border-bottom: 0.1rem solid black;
`;

const ItemStyled = styled.div`
  background: ${(props) => (props.isClicked ? 'lightgrey' : 'white')};
`;

const Category = () => {
  const [classificationdataState, setClassificationdataState] = useState([]);
  const [selectedFirstItemState, setSelectedFirstItemState] = useState();
  const [selectedSecondItemState, setSelectedSecondItemState] = useState();
  const [selectedThirdItemState, setSelectedThirdItemState] = useState();

  const [treeItems, setTreeItems] = useState([]);
  const [tree2Items, setTree2Items] = useState([]);
  const [tree3Items, setTree3Items] = useState([]);

  useEffect(async () => {
    let category = await getCategoryAsTreeArray();
    setClassificationdataState(category);
  }, []);

  useEffect(() => {
    if (classificationdataState.length > 0) {
      const currentData = [...classificationdataState];
      setTreeItems(currentData);
      setSelectedFirstItemState(currentData[0]);
      if (GetFirstDataCheck(currentData[0].children)) {
        const currentChildData = [...currentData[0].children];
        setTree2Items(currentChildData);
        setSelectedSecondItemState(currentChildData[0]);
        if (GetFirstDataCheck(...currentChildData[0].children)) {
          const currentChildChildData = [...currentChildData[0].children];
          setTree3Items(currentChildChildData);
          setSelectedThirdItemState(currentChildChildData[0]);
        }
      }
    }
  }, [classificationdataState]);

  useEffect(() => {
    if (classificationdataState.length > 0) {
      const currentData = [...classificationdataState];
      console.log(classificationdataState);
      console.log(currentData[0]);
      if (GetFirstDataCheck(currentData[0].children)) {
        const currentChildData = [...currentData[0].children];
        setTree2Items(currentChildData);
        setSelectedSecondItemState(currentChildData[0]);
      } else {
        setTree2Items([]);
        setSelectedSecondItemState(-1);
      }
    }
  }, [selectedFirstItemState]);

  useEffect(() => {
    if (classificationdataState.length > 0) {
      if (selectedSecondItemState > 0) {
        const currentData = [...classificationdataState];
        const currentChildData = [...currentData[0].children];
        if (GetFirstDataCheck(...currentChildData[0].children)) {
          const currentChildChildData = [...currentChildData[0].children];
          setTree3Items(currentChildChildData);
          setSelectedThirdItemState(currentChildChildData[0]);
        } else {
          setTree3Items([]);
          setSelectedThirdItemState(-1);
        }
      }
    }
  }, [selectedSecondItemState]);

  const GetFirstDataCheck = (arr) => {
    if (arr.length > 0) return true;
    else return false;
  };

  const handleFristItemClick = (value) => {
    setSelectedFirstItemState(value);
  };

  const handleSecondItemClick = (value) => {
    setSelectedSecondItemState(value);
  };

  const handleThirdItemClick = (value) => {
    setSelectedThirdItemState(value);
  };

  if (!classificationdataState) {
    return <Empty />;
  } else {
    return (
      <CustomCollapse header="카테고리" extra={''}>
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
      </CustomCollapse>
    );
  }
};

export default Category;

const dataList = {
  축산: ['닭가슴살', '돼지안심'],
  곡물: ['오트밀'],
};
