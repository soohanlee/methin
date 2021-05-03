import 'antd/dist/antd.css';
import EditConnectProductSetting from 'pages/Admin/Contents/product/connectProduct/EditConnectProductSetting';
import EditConnectProductTitle from 'pages/Admin/Contents/product/connectProduct/EditConnectProductTitle';
import Table from 'pages/Admin/Contents/product/connectProduct/Table';


const EditConnectProduct = () => {
  return (
    <>
      <EditConnectProductTitle />
      <EditConnectProductSetting />
      <Table/>
    </>
  );
};

export default EditConnectProduct;
