import 'antd/dist/antd.css';
import EditDeliveryProductSetting from 'pages/Admin/Contents/product/deliveryProduct/editDeliveryProductSetting';
import EditDeliveryProductCategory from 'pages/Admin/Contents/product/deliveryProduct/editDeliveryProductCategory';
import EditDeliveryProductTitle from 'pages/Admin/Contents/product/deliveryProduct/editDeliveryProductTitle';
const deliveryProduct = () => {
  return (
    <>
      <EditDeliveryProductTitle />
      <EditDeliveryProductCategory />
      <EditDeliveryProductSetting />
      //상품목록 들어올 예정
    </>
  );
};

export default deliveryProduct;
