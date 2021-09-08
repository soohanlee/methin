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
import moment, { defaultFormat } from 'moment';
import { DateFormat } from 'configs/config';

const DeliveryProduct = () => {
  const limit = 16;
  const [tableDataState, setTableDataState] = useState([]);
  const [tableCountState, setTableCountState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productOffset, setProductOffset] = useState(0);

  useEffect(() => {
    async function fetchAndSetUser() {
      await getApiDeliveryData();
    }
    fetchAndSetUser();
  }, []);

  const getApiDeliveryData = async (offset = 0) => {
    try {
      setLoading(true);
      const result = await allDeliveryProduct(offset);
      const list = result.data.data.list;
      const count = result.data.data.list.length;

      const newResult = list.map((item, index) => {
        let { status, created_at, updated_at } = item;

        if (status === 1) {
          status = '판매중';
        } else {
          status = '미사용';
        }

        return {
          ...item,
          status: status,
          created_at: moment(created_at).format(DateFormat.Default),
          updated_at: moment(updated_at).format(DateFormat.Default),
          key: index,
        };
      });

      setTableDataState(newResult);
      setTableCountState(count);
      notification.success('검색성공');
      console.log(newResult);
    } catch (e) {
      notification.error('배송 정보를 가져오지 못했습니다.');
    }
    setLoading(false);
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
      console.log(data);
      await updateDelivery(data);
      notification.success('추가 성공');
      getApiDeliveryData();
    } catch (e) {
      notification.error('배송 정보를 추가하지 못했습니다.');
    }
  };

  const handleTableChange = (pagination, filter, sort) => {
    setProductOffset(pagination.current - 1);
  };
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
        count={tableCountState}
        tableList={tableDataState}
        limit={limit}
        loading={loading}
        handleTableChange={handleTableChange}
        updateDeliveryDetailData={updateDeliveryDetailData}
        deleteDeliveryData={deleteDeliveryData}
      />
    </>
  );
};

export default DeliveryProduct;
