import 'antd/dist/antd.css';
import EditTemplateProductCategory from 'pages/Admin/Contents/product/templateProduct/editTemplateProductCategory';
import EditTemplateProductTitle from 'pages/Admin/Contents/product/templateProduct/editTemplateProductTitle';
import EditTemplateProductTable from 'pages/Admin/Contents/product/templateProduct/editTemplateProductTable';

const templateProduct = () => {
  return (
    <>
      <EditTemplateProductTitle />
      <EditTemplateProductCategory />
      <EditTemplateProductTable />
    </>
  );
};

export default templateProduct;
