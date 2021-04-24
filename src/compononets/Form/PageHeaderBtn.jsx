import React from 'react';
import 'antd/dist/antd.css';
import { PageHeader } from 'antd';

const PageHeaderBtn = ({ label, className, ref }) => {
  return (
    <PageHeader
      className={className}
      ref={ref}
      onBack={() => null}
      subTitle=" "
    />
  );
};
export default PageHeaderBtn;
