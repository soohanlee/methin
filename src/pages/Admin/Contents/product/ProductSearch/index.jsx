import 'antd/dist/antd.css';
import Title from './Title';
import Category from './Category';
import Setting from './Setting';
import Table from './Table';
import { useEffect, useState } from 'react';
import { notification } from 'utils/notification';
import { getProductList, getProductDetail } from 'apis/product';

const ProductSearch = () => {
  const limite = 16;
  const [tableDataState, setTableDataState] = useState([]);
  const [tableCountState, setTableCountState] = useState([]);

  useEffect(() => {
    async function fetchAndSetUser() {
      await getApiProductData();
    }
    fetchAndSetUser();
  }, []);

  const getApiProductData = async () => {
    try {
      const result = await getProductList(0);
      const count = result.data.data.count;
      const maxOffset = Math.floor(result.data.data.count / limite) + 1;
      let customList = [];
      for (let i = 0; i < maxOffset; i++) {
        const _result = await getProductList(i);
        customList = customList.concat(_result.data.data.list);
      }
      setTableDataState(customList);
      setTableCountState(customList.length);
    } catch (e) {
      notification.error('상품 정보를 가져오지 못했습니다.');
    }
  };

  const getSearchProductData = async (id) => {
    try {
      const result = await getProductDetail(id);
      const resultArray = [result.data.data];
      setTableDataState(resultArray);
      notification.success('검색 성공');
    } catch (e) {
      notification.error('검색 정보를 가져오지 못했습니다.');
    }
  };

  return (
    <>
      <Title />
      <Category tableList={tableDataState} />
      <Setting
        getApiProductData={getApiProductData}
        getSearchProductData={getSearchProductData}
      />

      <Table
        getApiProductData={getApiProductData}
        count={tableCountState}
        result={tableDataState}
      />
    </>
  );
};

export default ProductSearch;
