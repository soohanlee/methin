import React, { useEffect, useState } from 'react';
import Table from './Table';
import Title from './Title';
import { getProductList } from 'apis/product';
import { notification } from 'utils/notification';

const RegisterProductAll = () => {
  const limit = 16;
  const [tableDataState, setTableDataState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productOffset, setProductOffset] = useState(0);
  const [tableCountState, setTableCountState] = useState(0);

  useEffect(() => {
    getApiProductData(productOffset);
  }, [productOffset]);

  useEffect(() => {
    async function fetchAndSetUser() {
      await getApiProductData();
    }
    fetchAndSetUser();
  }, []);

  const getApiProductData = async (offset = 0) => {
    try {
      setLoading(true);
      const result = await getProductList(offset);
      const list = result.data.data.list;
      const count = result.data.data.count;

      const newResult = list.map((item, index) => {
        let { status } = item;
        if (status === 0) {
          status = '판매준비';
        } else if (status === 1) {
          status = '판매중';
        } else {
          status = '판매종료';
        }
        return { ...item, status: status, key: index };
      });
      setTableDataState(newResult);
      setTableCountState(count);
    } catch (e) {
      notification.error('상품 정보를 가져오지 못했습니다.');
    }
    setLoading(false);
  };

  const handleTableChange = (pagination, filter, sort) => {
    setProductOffset(pagination.current - 1);
  };

  return (
    <div>
      <Title categoryList={dataList} dataList={tableDataState} />
      <Table
        tableList={tableDataState}
        limit={limit}
        loading={loading}
        handleTableChange={handleTableChange}
        count={tableCountState}
      />
    </div>
  );
};

export default RegisterProductAll;

const dataList = {
  축산: ['닭가슴살', '돼지안심', '한우안심'],
  곡물: ['오트밀'],
};
