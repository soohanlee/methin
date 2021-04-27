import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Radio, Select } from 'antd';

import CustomCollapse from 'pages/Admin/components/Collapse';
import LabelContents from 'pages/Admin/components/Label/LabelContents';

import Calendar from 'pages/Admin/components/Calendar';
import moment from 'moment';
// import { DateFormat } from 'configs/constants';

const { Option } = Select;

const Button = styled.div``;

const ProductMainInformation = () => {
  const [modelName, setModelName] = useState('');

  const [productState, setProductState] = useState('new'); //new , old
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
      <LabelContents title="모델명">
        <Input
          onChange={(e) => setModelName(e.target.value)}
          addonAfter={<Button>찾기</Button>}
          value={modelName}
        />
      </LabelContents>

      <LabelContents title="브랜드">
        <Input
          onChange={(e) => setModelName(e.target.value)}
          addonAfter={<Button>찾기</Button>}
          value={modelName}
        />
      </LabelContents>

      <LabelContents title="제조사">
        <Input
          onChange={(e) => setModelName(e.target.value)}
          addonAfter={<Button>찾기</Button>}
          value={modelName}
        />
      </LabelContents>

      <LabelContents title="원산지">
        <Select value={origin} onChange={(value) => setOrigin(value)}>
          <Option value="yet">선택</Option>
          <Option value="domestic">국산</Option>
          <Option value="imported">수입산</Option>
          <Option value="기타">기타</Option>
        </Select>
      </LabelContents>

      <LabelContents title="상품상태">
        <Radio.Group
          value={productState}
          onChange={(e) => setProductState(e.target.value)}
        >
          <Radio.Button value="new">신상품</Radio.Button>
          <Radio.Button value="old">중고상품</Radio.Button>
        </Radio.Group>
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
