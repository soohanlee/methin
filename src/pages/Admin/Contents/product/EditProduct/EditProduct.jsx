import 'antd/dist/antd.css';
import EditTitle from 'pages/Admin/Contents/product/EditProduct/EditTitle';
import EditCategory from 'pages/Admin/Contents/product/EditProduct/EditCategory';
import EditProductSetting from 'pages/Admin/Contents/product/EditProduct/EditProductSetting';
import Table from 'pages/Admin/Contents/product/EditProduct/Table';
import { useEffect, useState } from 'react';
import { notification } from 'utils/notification';
import { getProductList } from 'apis/product';

const EditProduct = () => {
  const limite = 16;
  const [tableList, setTableList] = useState([]);
  const [tableCount, setTableCount] = useState(0);

  useEffect(() => {
    async function fetchAndSetUser() {
      try {
      const result = await getProductList(0);
      // const customList = result.data.data.list.map((item) => {
      //   return { ...item, key: item.id };
      // });
      // antd 에서 선택을 하려면 key라는 이름의 key값이 있어야하여 key를 주입

      const count = result.data.data.count;
      const maxOffset = Math.floor(result.data.data.count / limite) + 1;
      let customList = [];
      for (let i = 0; i < maxOffset; i++) {
        const _result = await getProductList(i);
        customList = customList.concat(_result.data.data.list);
      }
      setTableList(customList);
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
      <EditCategory tableList={tableList} />
      <EditProductSetting />
      <Table
        tableList={tableList}
        setTableList={setTableList}
        count={tableCount}
      />
    </>
  );
};

export default EditProduct;
