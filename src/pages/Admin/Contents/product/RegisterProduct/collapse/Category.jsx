import React, { useEffect, useState } from 'react';
import CustomCollapse from 'pages/Admin/components/Collapse';
import styled from 'styled-components';
import { Input as OriginInput, Empty } from 'antd';

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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

const ButtonLine = styled.div`
  display: flex;
`;

const Input = styled(OriginInput)`
  max-width: 500px;
  width: 100%;
`;

const AddButton = styled.div``;

const Category = () => {
  const [data, setData] = useState({});
  const [selectedFirstItem, setSelectedFirstItem] = useState('축산');
  const [selectedSecondItem, setSelectedSecondItem] = useState('축산');

  const [inputFirstItem, setInputFirstItem] = useState('');
  const [inputSecondItem, setInputSecondItem] = useState('');
  const dataKey = Object.keys(data);

  useEffect(() => {
    setData(dataList);
  }, []);

  const handleFristItemClick = (value) => {
    setSelectedFirstItem(value);
  };

  const handleSecondItemClick = (value) => {
    setSelectedSecondItem(value);
  };

  const handleAddFirstItemClick = () => {
    const newData = data;
    newData[inputFirstItem] = [];
    setData(newData);
  };

  const handleAddSecondItemClick = () => {
    data[selectedFirstItem].concat([inputSecondItem]);
    setData(data);
  };
  if (!data) {
    return <Empty />;
  } else {
    return (
      <CustomCollapse header="카테고리" extra={'뭔가옴'}>
        <ButtonContainer>
          <ButtonLine>
            <Input
              onChange={(e) => setInputFirstItem(e.target.value)}
              addonAfter={
                <AddButton onClick={handleAddFirstItemClick}>
                  1차 분류 추가하기
                </AddButton>
              }
              value={inputFirstItem}
            />
          </ButtonLine>
          <ButtonLine>
            <Input
              onChange={(e) => setInputSecondItem(e.target.value)}
              addonAfter={
                <AddButton onClick={handleAddSecondItemClick}>
                  2차 분류 추가하기
                </AddButton>
              }
              value={inputSecondItem}
            />
          </ButtonLine>
        </ButtonContainer>

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
      </CustomCollapse>
    );
  }
};

export default Category;

const dataList = {
  축산: [
    '닭가슴살',
    '돼지안심',
    '한우안심',
    '닭가슴살',
    '돼지안심',
    '한우안심',
    '닭가슴살',
    '돼지안심',
    '한우안심',
    '닭가슴살',
    '돼지안심',
    '한우안심',
    '닭가슴살',
    '돼지안심',
    '한우안심',
    '닭가슴살',
    '돼지안심',
    '한우안심',
  ],
  곡물: ['오트밀'],
};
