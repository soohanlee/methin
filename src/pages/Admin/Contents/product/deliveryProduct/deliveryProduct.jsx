import { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import EditDeliveryProductSetting from 'pages/Admin/Contents/product/DeliveryProduct/EditDeliveryProductSetting';
import EditDeliveryProductCategory from 'pages/Admin/Contents/product/DeliveryProduct/EditDeliveryProductCategory';
import EditDeliveryProductTitle from 'pages/Admin/Contents/product/DeliveryProduct/EditDeliveryProductTitle';
import EditDeliveryProductTable from 'pages/Admin/Contents/product/DeliveryProduct/EditDeliveryProductTable';

import {
  updateDelivery,
  updateDeliveryDetail,
  allDeliveryProduct,
  searchDeliveryProduct,
  deleteDeliveryDetail,
} from 'apis/delivery';
import { getProductList } from 'apis/product';
import { notification } from 'utils/notification';

const DeliveryProduct = () => {
  const limite = 16;
  const [tableData, setTableData] = useState([]);
  const [allTableData, setAllTableData] = useState([]);
  const [tableCount, setTableCount] = useState([]);

  useEffect(() => {
    async function fetchAndSetUser() {
      await getApiAllDeliveryData();
    }
    fetchAndSetUser();
  }, []);

  const getApiAllDeliveryData = async () => {
    try {
      const result = await allDeliveryProduct(0);
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
      notification.error('배송 정보를 가져오지 못했습니다.');
    }
  };

  const getAllDeliveryData = async () => {
    try {
      setTableData(allTableData);
      notification.success('검색 성공');
    } catch (e) {
      notification.error('배송 정보를 가져오지 못했습니다.');
    }
  };

  const getSearchDeliveryData = async (id) => {
    try {
      const result = await searchDeliveryProduct(id);
      const resultArray = [result.data.data];
      setTableData(resultArray);
      notification.success('검색 성공');
    } catch (e) {
      notification.error('배송 정보를 가져오지 못했습니다.');
    }
  };

  const initDeliveryData = async () => {
    try {
      getAllDeliveryData();
      notification.success('초기화 성공');
    } catch (e) {
      notification.error('배송 정보를 초기화하지 못했습니다.');
    }
  };

  const updateDeliveryDetailData = async (id, data) => {
    try {
      await updateDeliveryDetail(id, data);
      notification.success('수정 성공');
      getApiAllDeliveryData();
    } catch (e) {
      notification.error('배송 정보를 수정하지 못했습니다.');
    }
  };

  const deleteDeliveryData = async (id) => {
    try {
      await deleteDeliveryDetail(id);
      notification.success('삭제 성공');
      getApiAllDeliveryData();
    } catch (e) {
      notification.error('배송 정보를 삭제하지 못했습니다.');
    }
  };

  const updateDeliveryData = async (data) => {
    try {
      await updateDelivery(data);
      notification.success('추가 성공');
      getApiAllDeliveryData();
    } catch (e) {
      notification.error('배송 정보를 추가하지 못했습니다.');
    }
  };

  return (
    <>
      <EditDeliveryProductTitle />
      <EditDeliveryProductCategory />
      <EditDeliveryProductSetting
        getAllDeliveryData={getAllDeliveryData}
        initDeliveryData={initDeliveryData}
        getSearchDeliveryData={getSearchDeliveryData}
      />
      <EditDeliveryProductTable
        updateDeliveryData={updateDeliveryData}
        updateDeliveryDetailData={updateDeliveryDetailData}
        deleteDeliveryData={deleteDeliveryData}
        result={tableData}
        count={tableCount}
      />
    </>
  );
};

export default DeliveryProduct;
