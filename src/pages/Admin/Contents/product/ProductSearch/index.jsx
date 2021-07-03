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
  const [categoryCountArrayState, setCategoryCountArrayState] = useState([]);
  let all = 0;
  let ready = 0;
  let onSale = 0;
  let soldOut = 0;
  let stop = 0;
  let end = 0;

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
      notification.success('검색성공');

      setTableDataState(customList);
      setTableCountState(customList.length);
      CategoryCount(customList);
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

  const CategoryCount = (tableList) => {
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
    all = tableList.length;
    setCategoryCountArrayState([all, ready, onSale, soldOut, stop, end]);
  };

  return (
    <>
      <Title />
      <Category
        tableList={tableDataState}
        categoryCountArray={categoryCountArrayState}
      />
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
