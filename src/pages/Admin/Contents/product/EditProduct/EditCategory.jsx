import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import 'antd/dist/antd.css';

import AppstoreTwoTone from '@ant-design/icons/AppstoreTwoTone';
import DollarCircleTwoTone from '@ant-design/icons/DollarCircleTwoTone';
import WarningTwoTone from '@ant-design/icons/WarningTwoTone';
import CloseCircleTwoTone from '@ant-design/icons/CloseCircleTwoTone';
import CheckCircleTwoTone from '@ant-design/icons/CheckCircleTwoTone';

const EditCategorys = styled.div`
  width: 100%;
  height: 12rem;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  display: flex;
  justify-content: center;

  align-items: center;
  margin-bottom: 1.5rem;
`;

const CategoryType = styled.div`
  width: 17rem;
  display: flex;
  align-items: center;
  cursor: Pointer;
  margin-right: 10rem;
`;

const CategoryTexts = styled.div``;

const TitleText = styled.div``;
const SubTitleText = styled.div``;

const Icon = css`
  font-size: 6rem;
  margin: 2rem;
`;

const AppstoreTwoToneIcon = styled(AppstoreTwoTone)`
  ${Icon}
`;
const DollarCircleTwoToneIcon = styled(DollarCircleTwoTone)`
  ${Icon}
`;
const WarningTwoToneIcon = styled(WarningTwoTone)`
  ${Icon}
`;
const CloseCircleTwoToneIcon = styled(CloseCircleTwoTone)`
  ${Icon}
`;
const CheckCircleTwoToneIcon = styled(CheckCircleTwoTone)`
  ${Icon}
`;

const categoryTypeArray = [
  <AppstoreTwoToneIcon />,
  <DollarCircleTwoToneIcon />,
  <WarningTwoToneIcon />,
  <CloseCircleTwoToneIcon />,
  <CheckCircleTwoToneIcon />,
];

const categoryTextArray = ['전체', '판매중', '품절', '판매중지', '판매종료'];

const SetCaterogy = () => {
  const result = [];
  for (let i = 0; i < 5; i++) {
    result.push(
      <>
        <CategoryType onClick={() => categoryTypeClick(categoryTextArray[i])}>
          {categoryTypeArray[i]}
          <CategoryTexts>
            <TitleText>{categoryTextArray[i]}</TitleText>
            <SubTitleText>8 건</SubTitleText>
          </CategoryTexts>
        </CategoryType>
      </>,
    );
  }
  return result;
};

const categoryTypeClick = (value) => {
  alert(value);
};

const EditCategory = () => {
  return (
    <>
      <EditCategorys>{SetCaterogy()}</EditCategorys>
    </>
  );
};

export default EditCategory;
