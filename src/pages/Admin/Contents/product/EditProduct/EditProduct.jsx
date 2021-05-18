import 'antd/dist/antd.css';
import EditTitle from 'pages/Admin/Contents/product/EditProduct/EditTitle';
import EditCategory from 'pages/Admin/Contents/product/EditProduct/EditCategory';
import EditProductSetting from 'pages/Admin/Contents/product/EditProduct/EditProductSetting';
import Table from 'pages/Admin/Contents/product/EditProduct/Table';
import { useEffect, useState } from 'react';
import { notification } from 'utils/notification';
import { getProductList } from 'apis/product';

const EditProduct = () => {
  const [table, setTable] = useState([]);
  const [tableCount, setTableCount] = useState(0);

  useEffect(() => {
    async function fetchAndSetUser() {
      try {
        const result = await getProductList();
        setTable(result.data.data.list);
        setTableCount(result.data.data.count);
      } catch (e) {
        notification.error('상품 정보를 가져오지 못했습니다.');
      }
    }
    fetchAndSetUser();
  }, []);

  return (
    <>
      <EditTitle />
      <EditCategory count={tableCount} />
      <EditProductSetting />
      <Table table={table} count={tableCount} />
    </>
  );
};

export default EditProduct;
