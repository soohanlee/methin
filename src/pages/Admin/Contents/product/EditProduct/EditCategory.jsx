import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import 'antd/dist/antd.css';

import AppstoreTwoTone from '@ant-design/icons/AppstoreTwoTone';
import DollarCircleTwoTone from '@ant-design/icons/DollarCircleTwoTone';
import WarningTwoTone from '@ant-design/icons/WarningTwoTone';
import CloseCircleTwoTone from '@ant-design/icons/CloseCircleTwoTone';
import CheckCircleTwoTone from '@ant-design/icons/CheckCircleTwoTone';

const EditCategorysSyled = styled.div`
  width: 100%;
  height: 12rem;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  display: flex;
  justify-content: center;

  align-items: center;
  margin-bottom: 1.5rem;
`;

const CategoryTypeSyled = styled.div`
  width: 17rem;
  display: flex;
  align-items: center;
  cursor: Pointer;
  margin-right: 10rem;
`;

const IconCss = css`
  font-size: 6rem;
  margin: 2rem;
`;

const AppstoreTwoToneIconSyled = styled(AppstoreTwoTone)`
  ${IconCss}
`;
const DollarCircleTwoToneIconSyled = styled(DollarCircleTwoTone)`
  ${IconCss}
`;
const WarningTwoToneIconSyled = styled(WarningTwoTone)`
  ${IconCss}
`;
const CloseCircleTwoToneIconSyled = styled(CloseCircleTwoTone)`
  ${IconCss}
`;
const CheckCircleTwoToneIconSyled = styled(CheckCircleTwoTone)`
  ${IconCss}
`;

const categoryTextArray = ['전체', '판매중', '품절', '판매중지', '판매종료'];

const EditCategory = ({ count }) => {
  const renderSetCaterogy = () => {
    const result = [];
    for (let i = 0; i < 5; i++) {
      result.push(
        <>
          <CategoryTypeSyled
            key={i}
            onClick={() => categoryTypeClick(categoryTextArray[i])}
          >
            {categoryTypeArray[i]}
            <div>
              <div>{categoryTextArray[i]}</div>
              <div>{count} 건</div>
            </div>
          </CategoryTypeSyled>
        </>,
      );
    }
    return result;
  };

  const categoryTypeClick = (value) => {
    alert(value);
  };
  return (
    <>
      <EditCategorysSyled>{renderSetCaterogy()}</EditCategorysSyled>
    </>
  );
};

export default EditCategory;

const categoryTypeArray = [
  <AppstoreTwoToneIconSyled />,
  <DollarCircleTwoToneIconSyled />,
  <WarningTwoToneIconSyled />,
  <CloseCircleTwoToneIconSyled />,
  <CheckCircleTwoToneIconSyled />,
];
