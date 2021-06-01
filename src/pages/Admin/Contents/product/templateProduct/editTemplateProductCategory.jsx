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

const editTemplateProductCategory = () => {
  const renderSetCaterogy = () => {
    const CategoryClick = (e) => {
      alert(e.target.innerText);
    };

    const result = [];
    for (let i = 0; i < categoryTextArray.length; i++) {
      result.push(
        <>
          <CategoryType key={i}>
            <TitleText name={categoryTextArray[i]} onClick={CategoryClick}>
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
      <EditCategorys>{renderSetCaterogy()}</EditCategorys>
    </>
  );
};

export default editTemplateProductCategory;
const categoryTextArray = [
  '배송비 템플릿 관리',
  '카테고리 템플릿 관리',
  'AS 템플릿 관리',
  '이벤트 템플릿 관리',
  '문의 템플릿 관리',
  '상품정보제공고시 템플릿 관리',
];
