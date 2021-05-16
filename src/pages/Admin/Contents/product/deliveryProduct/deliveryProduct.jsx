import { useState, useEffect, useRef } from 'react';
import 'antd/dist/antd.css';
import EditDeliveryProductSetting from 'pages/Admin/Contents/product/deliveryProduct/editDeliveryProductSetting';
import EditDeliveryProductCategory from 'pages/Admin/Contents/product/deliveryProduct/editDeliveryProductCategory';
import EditDeliveryProductTitle from 'pages/Admin/Contents/product/deliveryProduct/editDeliveryProductTitle';
import EditDeliveryProductTable from 'pages/Admin/Contents/product/deliveryProduct/editDeliveryProductTable';

import {
  updateDelivery,
  updateDeliveryDetail,
  allDeliveryProduct,
  searchDeliveryProduct,
  deleteDeliveryDetail,
} from 'apis/delivery';
import { notification } from 'utils/notification';

const DeliveryProduct = () => {
  const [tableData, setTableData] = useState([]);
  const [allTableData, setAllTableData] = useState([]);

  useEffect(async () => {
    await getApiAllDeliveryData();
  }, []);

  const getApiAllDeliveryData = async () => {
    try {
      const result = await allDeliveryProduct();
      setTableData(result.data.data.list);
      setAllTableData(result.data.data.list);
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
      const result = await searchDeliveryProduct('배송정보22');
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
      />
    </>
  );
};

export default DeliveryProduct;
