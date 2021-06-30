import React, { useEffect, useState } from 'react';
import Table from './Table';
import Title from './Title';
import { getProductList } from 'apis/product';
import { notification } from 'utils/notification';

const RegisterProductAll = () => {
  const limite = 16;
  const [tableDataState, setTableDataState] = useState([]);

  useEffect(() => {
    async function fetchAndSetUser() {
      try {
        const result = await getProductList(0);

        const count = result.data.data.count;
        const maxOffset = Math.floor(result.data.data.count / limite) + 1;
        let customList = [];
        for (let i = 0; i < maxOffset; i++) {
          const _result = await getProductList(i);
          customList = customList.concat(_result.data.data.list);
        }
        // antd 에서 선택을 하려면 key라는 이름의 key값이 있어야하여 key를 주입

        setTableDataState(customList);
      } catch (e) {
        notification.error('상품 정보를 가져오지 못했습니다.');
      }
    }
    fetchAndSetUser();
  }, []);

  return (
    <div>
      <Title dataList={dataList} />
      <Table data={tableDataState} />
    </div>
  );
};

export default RegisterProductAll;

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
