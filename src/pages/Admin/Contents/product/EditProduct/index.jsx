import CheckBoxLabel from 'compononets/Form/CheckBoxLabel';
import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import QuestionCircleOutlined from '@ant-design/icons/QuestionCircleOutlined';

const ProduceTitle = styled.div`
width: 100%;
height : 10rem;
background-color : #ffffff;
border : 1px solid gray;
padding-left : 40px;
`;

const TitleTexts = styled.div`
display : flex;
`;

const TitleText = styled.div`
font-size : 25px;
`;

const iconSize = styled.div`
font-size : 25px;
`;

const Test =  styled(QuestionCircleOutlined)`
  font-size :50px;
`

const EditProduct = () => {
  return <ProduceTitle>
    <TitleTexts>
      <TitleText>상품 조회/수정 </TitleText>
      <iconSize>
      </iconSize>
    <Test />
    </TitleTexts>
  {/* <CheckBox label = "h"/> */}
  </ProduceTitle>

};

export default EditProduct;
