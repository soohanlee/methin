import 'antd/dist/antd.css';
import EditTitle from 'pages/Admin/Contents/product/EditProduct/EditTitle';
import EditCategory from 'pages/Admin/Contents/product/EditProduct/EditCategory';
import EditProductSetting from 'pages/Admin/Contents/product/EditProduct/EditProductSetting';
import Table from 'pages/Admin/Contents/product/EditProduct/Table';
import { useEffect, useState } from 'react';
import { notification } from 'utils/notification';
import { getProductList, getProductDetail } from 'apis/product';

const EditProduct = () => {
  const limite = 16;
  const [tableData, setTableData] = useState([]);
  const [allTableData, setAllTableData] = useState([]);
  const [tableCount, setTableCount] = useState([]);

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
      setTableData(customList);
      setAllTableData(customList);
      setTableCount(customList.length);
    } catch (e) {
      notification.error('상품 정보를 가져오지 못했습니다.');
    }
  };

  const getAllProductyData = async () => {
    try {
      setTableData(allTableData);
      notification.success('검색 성공');
    } catch (e) {
      notification.error('상품 정보를 가져오지 못했습니다.');
    }
  };

  const initProductData = async () => {
    try {
      getAllProductyData();
      notification.success('초기화 성공');
    } catch (e) {
      notification.error('상품 정보를 초기화하지 못했습니다.');
    }
  };

  const getSearchProductData = async (id) => {
    try {
      const result = await getProductDetail(id);
      const resultArray = [result.data.data];
      setTableData(resultArray);
      notification.success('검색 성공');
    } catch (e) {
      notification.error('상품 정보를 가져오지 못했습니다.');
    }
  };

  return (
    <>
      <EditTitle />
      <EditCategory tableList={tableData} />
      <EditProductSetting
        getAllProductyData={getAllProductyData}
        initProductData={initProductData}
        getSearchProductData={getSearchProductData}
      />

      <Table
        getAllProductyData={getAllProductyData}
        count={tableCount}
        result={tableData}
      />
    </>
  );
};

export default EditProduct;
