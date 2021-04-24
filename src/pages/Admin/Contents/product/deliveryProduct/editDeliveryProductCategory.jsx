import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const EditCategorys = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  border-top: 0px;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const CategoryType = styled.div`
  width: 30rem;
  display: flex;
`;

const TitleText = styled.div`
  font-size: 2rem;
  cursor: Pointer;
  border-bottom: 1px solid #66dd89;
  padding-top: 1.5rem;
  color: #66dd89;
`;

const categoryTextArray = ['배송비 묶음그룹 관리'];

const SetCaterogy = () => {
  const CategoryClick = () => {
    alert('카테고리 클릭');
  };

  const result = [];
  for (let i = 0; i < 5; i++) {
    result.push(
      <>
        <CategoryType>
          <TitleText onClick={CategoryClick}>{categoryTextArray[i]}</TitleText>
        </CategoryType>
      </>,
    );
  }
  return result;
};

const editDeliveryProductCategory = () => {
  return (
    <>
      <EditCategorys>{SetCaterogy()}</EditCategorys>
    </>
  );
};

export default editDeliveryProductCategory;
