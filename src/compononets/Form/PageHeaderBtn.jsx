import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { PageHeader } from 'antd';

const PageHeaderBtn = ({ label, className }) => {
  return <PageHeader className={className} onBack={() => null} subTitle=" " />;
};
export default PageHeaderBtn;
