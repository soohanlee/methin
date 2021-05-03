import 'antd/dist/antd.css';
import EditTitle from 'pages/Admin/Contents/product/EditProduct/EditTitle';
import EditCategory from 'pages/Admin/Contents/product/EditProduct/EditCategory';
import EditProductSetting from 'pages/Admin/Contents/product/EditProduct/EditProductSetting';
import Table from 'pages/Admin/Contents/product/EditProduct/Table';

const EditProduct = () => {
  return (
    <>
      <EditTitle />
      <EditCategory />
      <EditProductSetting />
      <Table/>
    </>
  );
};

export default EditProduct;
