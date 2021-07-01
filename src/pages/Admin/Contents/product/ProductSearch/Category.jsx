import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import 'antd/dist/antd.css';

import AppstoreTwoTone from '@ant-design/icons/AppstoreTwoTone';
import DollarCircleTwoTone from '@ant-design/icons/DollarCircleTwoTone';
import WarningTwoTone from '@ant-design/icons/WarningTwoTone';
import CloseCircleTwoTone from '@ant-design/icons/CloseCircleTwoTone';
import CheckCircleTwoTone from '@ant-design/icons/CheckCircleTwoTone';

const CategorysSyled = styled.div`
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
  cursor: Pointer
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

const Category = ({ tableList }) => {
  const categoryTextArray = [
    '전체',
    '판매준비',
    '판매중',
    '품절',
    '판매중지',
    '판매종료',
  ];

  let all = tableList.length;
  let ready = 0;
  let onSale = 0;
  let soldOut = 0;
  let stop = 0;
  let end = 0;

  //숫자데이터를 문자로변경
  const NumDataToWord = () => {
    tableList.forEach((element) => {
      switch (element.status) {
        case '판매준비':
          ready++;
          break;
        case '판매중':
          onSale++;
          break;
        case '품절':
          soldOut++;
          break;
        case '판매중지':
          stop++;
          break;
        case '판매종료':
          end++;
          break;
        default:
          break;
      }
    });
  };

  const handleCategoryType = (value) => {
    alert(value);
  };

  const renderSetCaterogy = () => {
    const result = [];
    for (let i = 0; i < 6; i++) {
      result.push(
        <>
          <CategoryTypeSyled
            key={i}
            onClick={() => handleCategoryType(categoryTextArray[i])}
          >
            {categoryTypeArray[i]}
            <div>
              <div>{categoryTextArray[i]}</div>
              <div>{categoryCountArray[i]} 건</div>
            </div>
          </CategoryTypeSyled>
        </>,
      );
    }
    return result;
  };

  NumDataToWord();
  const categoryCountArray = [all, ready, onSale, soldOut, stop, end];

  return (
    <>
      <CategorysSyled>{renderSetCaterogy()}</CategorysSyled>
    </>
  );
};

export default Category;

const categoryTypeArray = [
  <AppstoreTwoToneIconSyled />,
  <DollarCircleTwoToneIconSyled />,
  <DollarCircleTwoToneIconSyled />,
  <WarningTwoToneIconSyled />,
  <CloseCircleTwoToneIconSyled />,
  <CheckCircleTwoToneIconSyled />,
];