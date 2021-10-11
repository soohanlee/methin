import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const Categorys = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  border-top: 0px;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const CategoryType = styled.div`
  display: flex;
  justify-content: center;

  width: 30rem;
  display: flex;
`;

const TitleText = styled.div`
  font-size: 1.5rem;
  cursor: Pointer;
  border-bottom: 1px solid #66dd89;
  padding-top: 1.5rem;
  color: #66dd89;
`;

const Category = () => {
  const categoryTextArray = ['배송비 묶음그룹 관리'];

  const renderSetCaterogy = () => {
    const handleCategoryBtn = (e) => {};

    const result = [];
    for (let i = 0; i < 5; i++) {
      result.push(
        <>
          <CategoryType key={i}>
            <TitleText onClick={handleCategoryBtn}>
              {categoryTextArray[i]}
            </TitleText>
          </CategoryType>
        </>,
      );
    }
    return result;
  };

  return (
    <>
      <Categorys>{renderSetCaterogy()}</Categorys>
    </>
  );
};

export default Category;
