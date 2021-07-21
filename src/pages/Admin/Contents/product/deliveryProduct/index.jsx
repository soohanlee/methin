import { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import Setting from './Setting';
import Category from './Category';
import Title from './Title';
import Table from './Table';

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
  const [tableDataState, setTableDataState] = useState([]);
  const [tableCountState, setTableCountState] = useState(0);

  useEffect(() => {
    async function fetchAndSetUser() {
      await getApiDeliveryData();
    }
    fetchAndSetUser();
  }, []);

  const getApiDeliveryData = async () => {
    try {
      const result = await allDeliveryProduct(0);
      const count = result.data.data.count;
      const maxOffset = Math.floor(count / limite) + 1;
      const list = result.data.data.list;

      const newResult = list.map((item) => {
        return { ...item, status: item.status === 1 ? '사용' : '미사용' };
      });
      setTableDataState(newResult);
      setTableCountState(newResult.length);
      notification.success('검색성공');
    } catch (e) {
      notification.error('배송 정보를 가져오지 못했습니다.');
    }
  };

  const getSearchDeliveryData = async (id) => {
    try {
      const result = await searchDeliveryProduct(id);
      const resultArray = [result.data.data];
      setTableDataState(resultArray);
      notification.success('id검색 성공');
    } catch (e) {
      notification.error('배송 정보를 가져오지 못했습니다.');
    }
  };

  const updateDeliveryDetailData = async (id, data) => {
    try {
      await updateDeliveryDetail(id, data);
      notification.success('수정 성공');
      getApiDeliveryData();
    } catch (e) {
      notification.error('배송 정보를 수정하지 못했습니다.');
    }
  };

  const deleteDeliveryData = async (id) => {
    try {
      console.log(id);
      await deleteDeliveryDetail(id);
      notification.success('삭제 성공');
      getApiDeliveryData();
    } catch (e) {
      notification.error('배송 정보를 삭제하지 못했습니다.');
    }
  };

  const updateDeliveryData = async (data) => {
    try {
      await updateDelivery(data);
      notification.success('추가 성공');
      getApiDeliveryData();
    } catch (e) {
      notification.error('배송 정보를 추가하지 못했습니다.');
    }
  };

  console.log('tableDataState', tableDataState);

  return (
    <>
      <Title />
      <Category />
      <Setting
        getApiDeliveryData={getApiDeliveryData}
        getSearchDeliveryData={getSearchDeliveryData}
      />
      <Table
        updateDeliveryData={updateDeliveryData}
        updateDeliveryDetailData={updateDeliveryDetailData}
        deleteDeliveryData={deleteDeliveryData}
        setTableDataState={setTableDataState}
        result={tableDataState}
        count={tableCountState}
      />
    </>
  );
};

export default DeliveryProduct;
