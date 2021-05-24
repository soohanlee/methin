import React, { useEffect, useState } from 'react';
import Table from './Table';
import Header from './Header';
import { getProductList } from 'apis/product';
import { notification } from 'utils/notification';

const RegisterProductOnce = () => {
  const [table, setTable] = useState([]);
  const [tableCount, setTableCount] = useState(0);

  useEffect(() => {
    async function fetchAndSetUser() {
      try {
        const result = await getProductList();
        const customList = result.data.data.list.map((item) => {
          return { ...item, key: item.id };
        });
        // antd 에서 선택을 하려면 key라는 이름의 key값이 있어야하여 key를 주입

        setTable(customList);
        setTableCount(result.data.data.count);
      } catch (e) {
        notification.error('상품 정보를 가져오지 못했습니다.');
      }
    }
    fetchAndSetUser();
  }, []);

  return (
    <div>
      <Header dataList={dataList} />
      <Table data={table} />
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
