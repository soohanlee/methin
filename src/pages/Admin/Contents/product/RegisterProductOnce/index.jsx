import React from 'react';
import Table from './Table';
import Header from './Header';

const RegisterProductOnce = () => {
  return (
    <div>
      <Header dataList={dataList} />
      <Table data={data} />
    </div>
  );
};

export default RegisterProductOnce;

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

const data = [
  {
    key: '0',
    state: '판매완료',
    fail: '',
    number: '123124125',
    saleState: '판매완료',
    category: '소고기',
    name: '소고기 안심',
    price: '8900',
    available: '40',
  },
  {
    key: '1',
    state: '판매완료',
    fail: 32,
    number: '123123154155',
    saleState: 'saleState',
    category: 'category',
    name: 'John Brown',
    price: 'price',
    available: 'available',
  },
];
