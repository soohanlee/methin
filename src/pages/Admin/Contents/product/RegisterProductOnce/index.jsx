import React, { useEffect, useState } from 'react';
import Table from './Table';
import Header from './Header';
import { getProductList } from 'apis/product';
import { notification } from 'utils/notification';

const RegisterProductOnce = () => {
  const [tableDataState, setTableDataState] = useState([]);
  const [tableCountState, setTableCountState] = useState(0);

  useEffect(() => {
    async function fetchAndSetUser() {
      try {
        const result = await getProductList();
        const customList = result.data.data.list.map((item) => {
          return { ...item, key: item.id };
        });
        // antd 에서 선택을 하려면 key라는 이름의 key값이 있어야하여 key를 주입

        setTableDataState(customList);
        setTableCountState(result.data.data.count);
      } catch (e) {
        notification.error('상품 정보를 가져오지 못했습니다.');
      }
    }
    fetchAndSetUser();
  }, []);

  return (
    <div>
      <Header dataList={dataList} />
      <Table data={tableDataState} />
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
