import {useState,useEffect } from 'react';
import 'antd/dist/antd.css';
import EditDeliveryProductSetting from 'pages/Admin/Contents/product/deliveryProduct/editDeliveryProductSetting';
import EditDeliveryProductCategory from 'pages/Admin/Contents/product/deliveryProduct/editDeliveryProductCategory';
import EditDeliveryProductTitle from 'pages/Admin/Contents/product/deliveryProduct/editDeliveryProductTitle';
import EditDeliveryProductTable from 'pages/Admin/Contents/product/deliveryProduct/editDeliveryProductTable';

import { updateDeliveryDetail, allDeliveryProduct, searchDeliveryProduct,deleteDeliveryDetail } from 'apis/delivery';
import { notification } from 'utils/notification';



const DeliveryProduct = () => {
  const [tableData, setTableData] = useState([]);
  const [allTableData, setAllTableData] = useState([]);

  useEffect(async() => {
    await getApiAllDeliveryData();
}, []);

  const getApiAllDeliveryData = async() => {
    try{
      const result = await allDeliveryProduct();
      setTableData(result.data.data.list);
      setAllTableData(result.data.data.list);
    } catch(e){
      notification.error('배송 정보를 가져오지 못했습니다.');
    }
  };

  const getAllDeliveryData = async() => {
    try{
      setTableData(allTableData);
    notification.success('검색 성공');


    } catch(e){
      notification.error('배송 정보를 가져오지 못했습니다.');
    }
  };

  const getSearchDeliveryData = async(id) => {
    try{
      const result = await searchDeliveryProduct(id);
      setTableData(result.data.data);
      console.log(result.data.data);
      notification.success('검색 성공');


    } catch(e){
      notification.error('배송 정보를 가져오지 못했습니다.');
    }
  };

  const initDeliveryData = async() => {
    try{
      setTableData('');
    notification.success('초기화 성공');

    } catch(e){
      notification.error('배송 정보를 초기화하지 못했습니다.');
    }
  };

  const updateDeliveryData = async(id,data) => {
    try{
      const result = await updateDeliveryDetail(id,data);
      console.log(result);
    notification.success('수정 성공');

    } catch(e){
      notification.error('배송 정보를 수정하지 못했습니다.');
    }
  };


  const deleteDeliveryData = async(id) => {
    try{
      const result = await updateDeliveryDetail(id);
      console.log(result);
    notification.success('삭제 성공');

    } catch(e){
      notification.error('배송 정보를 삭제하지 못했습니다.');
    }
  };

  return (
    <>
      <EditDeliveryProductTitle />
      <EditDeliveryProductCategory />
      <EditDeliveryProductSetting  getAllDeliveryData = {getAllDeliveryData} initDeliveryData = {initDeliveryData} getSearchDeliveryData = {getSearchDeliveryData} />
      <EditDeliveryProductTable updateDeliveryData ={updateDeliveryData} deleteDeliveryData = {deleteDeliveryData} result = {tableData} />
    </>
  );
};

export default DeliveryProduct;
