import 'antd/dist/antd.css';
import EditTemplateProductCategory from 'pages/Admin/Contents/product/templateProduct/editTemplateProductCategory';
import EditTemplateProductTitle from 'pages/Admin/Contents/product/templateProduct/editTemplateProductTitle';
import EditTemplateProductTable from 'pages/Admin/Contents/product/templateProduct/editTemplateProductTable';

const templateProduct = () => {
  return (
    <>
      <EditTemplateProductTitle />
      <EditTemplateProductCategory />
      <EditTemplateProductTable data={data} />
    </>
  );
};

export default templateProduct;

const data = [
  {
    ID: 'Test',
    templateName: 'TestName',
    modify: '수정',
    registrationDate: '2021',
    modifyDate: '2021',
  },
];
