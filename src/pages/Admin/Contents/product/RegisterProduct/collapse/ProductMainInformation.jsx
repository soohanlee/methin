import { useState } from 'react';
import { Select } from 'antd';

import CustomCollapse from 'pages/Admin/components/Collapse';
import LabelContents from 'pages/Admin/components/Label/LabelContents';

import Calendar from 'pages/Admin/components/Calendar';
import moment from 'moment';
// import { DateFormat } from 'configs/constants';

const { Option } = Select;

const ProductMainInformation = () => {
  const [origin, setOrigin] = useState('yet');

  const [manufactureDate, setManufactureDate] = useState(moment());
  const [manufactureSelectedDate, setManufactureSelectedDate] = useState(
    moment(),
  );

  const [validationDate, setValidationDate] = useState(moment());
  const [validationSelectedDate, setValidationSelectedDate] = useState(
    moment(),
  );

  const handleDateOfManufactureSelect = (value) => {
    setManufactureDate(value);
    setManufactureSelectedDate(value);
  };

  const handleValidtaionSelect = (value) => {
    setValidationDate(value);
    setValidationSelectedDate(value);
  };

  const handleDateOfManufactureChange = (value) => {
    setManufactureDate(value);
  };

  const handleValidtaionChange = (value) => {
    setValidationDate(value);
  };

  return (
    <CustomCollapse header="상품 주요정보" extra={'뭔가옴'}>
      <LabelContents title="원산지">
        <Select value={origin} onChange={(value) => setOrigin(value)}>
          <Option value="yet">선택</Option>
          <Option value="domestic">국산</Option>
          <Option value="imported">수입산</Option>
          <Option value="기타">기타</Option>
        </Select>
      </LabelContents>

      {/* date 객체를 보여주면 Calendar input에서 momnent로 전환시켜 보여줌 */}
      <LabelContents title="제조일자">
        <Calendar
          value={manufactureDate}
          selectedValue={manufactureSelectedDate}
          onSelect={handleDateOfManufactureSelect}
          onPanelChange={handleDateOfManufactureChange}
        />
      </LabelContents>
      <LabelContents title="유효일자">
        <Calendar
          value={validationDate}
          selectedValue={validationSelectedDate}
          onSelect={handleValidtaionSelect}
          onPanelChange={handleValidtaionChange}
        />
      </LabelContents>
    </CustomCollapse>
  );
};

export default ProductMainInformation;
