import 'antd/dist/antd.css';
import EditDeliveryProductSetting from 'pages/Admin/Contents/product/deliveryProduct/editDeliveryProductSetting';
import EditDeliveryProductCategory from 'pages/Admin/Contents/product/deliveryProduct/editDeliveryProductCategory';
import EditDeliveryProductTitle from 'pages/Admin/Contents/product/deliveryProduct/editDeliveryProductTitle';
import EditDeliveryProductTable from 'pages/Admin/Contents/product/deliveryProduct/editDeliveryProductTable';

const deliveryProduct = () => {
  return (
    <>
      <EditDeliveryProductTitle />
      <EditDeliveryProductCategory />
      <EditDeliveryProductSetting />
      <EditDeliveryProductTable />
    </>
  );
};

export default deliveryProduct;
