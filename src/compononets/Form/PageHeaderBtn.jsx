import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { PageHeader } from 'antd';

const PageHeaderBtn = ({ label }) => {
  return (
    <PageHeader className="site-page-header" onBack={() => null} subTitle=" " />
  );
};
export default PageHeaderBtn;
