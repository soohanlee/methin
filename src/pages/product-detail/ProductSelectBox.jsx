import React from 'react';

const arr = [
  {
    field1_value: 'A',
    field2_value: 'B',
    field3_value: 'C',
    add_price: 5000,
    count: 9999,
    preview_status: 1,
  },
  {
    field1_value: 'A',
    field2_value: 'C',
    field3_value: 'B',
    add_price: 5000,
    count: 9999,
    preview_status: 1,
  },
  {
    field1_value: 'B',
    field2_value: 'A',
    field3_value: 'C',
    add_price: 5000,
    count: 9999,
    preview_status: 0,
  },
  {
    field1_value: 'B',
    field2_value: 'C',
    field3_value: 'A',
    add_price: 5000,
    count: 9999,
    preview_status: 1,
  },
  {
    field1_value: 'C',
    field2_value: 'A',
    field3_value: 'B',
    add_price: 5000,
    count: 9999,
    preview_status: 0,
  },
  {
    field1_value: 'C',
    field2_value: 'B',
    field3_value: 'A',
    add_price: 4000,
    count: 9999,
    preview_status: 1,
  },
];

const option1Items = arr; // 셀렉트박스 1번 목록
const selectedOption1 = 'A'; // 셀렉트박스 1번에서 찍은거

// 셀렉트박스 2번 목록
const option2Items = option1Items.filter(
  (item) => item.field1_value === selectedOption1,
);
const selectedOption2 = 'B'; // 셀렉트박스 2번에서 찍은거

// 셀렉트박스 3번 목록
const option3Items = option2Items.filter(
  (item) => item.field2_value === selectedOption2,
);
const selectedOption3 = 'C'; // 셀렉트박스 3번에서 찍은거

console.log({
  selectedOption1,
  selectedOption2,
  selectedOption3,
});
const ProductSelectBox = ({ option }) => {
  console.log('option', option);

  return <div>옵션 올거야</div>;
};

export default ProductSelectBox;
