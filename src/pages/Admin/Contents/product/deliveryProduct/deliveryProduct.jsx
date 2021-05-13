import {useState } from 'react';
import 'antd/dist/antd.css';
import EditDeliveryProductSetting from 'pages/Admin/Contents/product/deliveryProduct/editDeliveryProductSetting';
import EditDeliveryProductCategory from 'pages/Admin/Contents/product/deliveryProduct/editDeliveryProductCategory';
import EditDeliveryProductTitle from 'pages/Admin/Contents/product/deliveryProduct/editDeliveryProductTitle';
import EditDeliveryProductTable from 'pages/Admin/Contents/product/deliveryProduct/editDeliveryProductTable';

import { allDeliveryProduct, searchDeliveryProduct } from 'apis/delivery';
import { notification } from 'utils/notification';



const DeliveryProduct = () => {
  const [tableData, setTableData] = useState([]);

  const getAllDeliveryData = async() => {
    try{
      const result = await allDeliveryProduct();
      setTableData(result.data.data.list);
    } catch(e){
      notification.error('배송 정보를 가져오지 못했습니다.');
    }
  };

  const getSearchDeliveryData = async(id) => {
    try{
      const result = await searchDeliveryProduct(id);
      setTableData(result.data.data);
      console.log(result.data.data);


    } catch(e){
      notification.error('배송 정보를 가져오지 못했습니다.');
    }
  };

  const initDeliveryData = async() => {
    try{
      setTableData('');
    } catch(e){
      notification.error('배송 정보를 초기화하지 못했습니다.');
    }
  };

  return (
    <>
      <EditDeliveryProductTitle />
      <EditDeliveryProductCategory />
      <EditDeliveryProductSetting initDeliveryData = {initDeliveryData} getAllDeliveryData = {getAllDeliveryData} getSearchDeliveryData = {getSearchDeliveryData} />
      <EditDeliveryProductTable result = {tableData} />
    </>
  );
};

export default DeliveryProduct;
