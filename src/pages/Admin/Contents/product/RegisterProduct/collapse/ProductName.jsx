import { Input } from 'antd';

import CustomCollapse from 'pages/Admin/components/Collapse';

const ProductName = ({ value, setValue }) => {
  return (
    <CustomCollapse header="상품명" extra={'뭔가옴'}>
      <Input
        onChange={(e) => setValue(e.target.value)}
        addonAfter={`${value.length}/100`}
        value={value}
        maxLength={100}
      />
    </CustomCollapse>
  );
};

export default ProductName;
