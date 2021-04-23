import 'antd/dist/antd.css';
import EditTitle from 'pages/Admin/Contents/product/EditProduct/EditTitle';
import EditCategory from 'pages/Admin/Contents/product/EditProduct/EditCategory';
import EditProductSetting from 'pages/Admin/Contents/product/EditProduct/EditProductSetting';

const EditProduct = () => {
  return (
    <>
      <EditTitle />
      <EditCategory />
      <EditProductSetting />
    </>
  );
};

export default EditProduct;
