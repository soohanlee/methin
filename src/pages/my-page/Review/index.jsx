import MyPageOrderListContainer from 'components/MyPageOrderListContainer';
import React from 'react';

const Review = () => {
  return (
    <div>
      <MyPageOrderListContainer list={list} title={'상품리뷰'} />
    </div>
  );
};

export default Review;

const list = [
  {
    title: '인기 샐러드 도시락',
    date: '2021.04.27',
    option: '옵션: 리코타 치즈 샐러드/1개',
    price: '39,000',
    deliveryState: true,
    deliveryNumber: 'CJ대한통운 543213121',
  },
];
