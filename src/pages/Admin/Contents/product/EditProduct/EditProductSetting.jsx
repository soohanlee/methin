import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { css } from 'styled-components';
import CheckBoxLabel from 'compononets/Form/CheckBoxLabel';
import TextAreaBox from 'compononets/Form/TextAreaBox';
import BasicTextInputBox from 'compononets/Form/BasicTextInputBox';

const EditProductSettings = styled.div`
  width: 100%;
  height: 78%;
  background-color: #ffffff;
  border-bottom: 1px solid gray;
`;

const TapTerm = css`
  width: 100%;
  height: 10rem;
  background-color: #ffffff;
  border-bottom: 1px solid gray;
  display: flex;
  padding-top: 3rem;
  padding-left: 3rem;
`;

const Propertys = styled.div`
  display: flex;
`;

const TwoLine = styled.div``;

const Search = styled.div`
  ${TapTerm};
  height: 15rem;
`;

const SetList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextAndInput = styled.div`
  display: flex;
`;

const SalesStatus = styled.div`
  ${TapTerm};
`;

const Category = styled.div`
  ${TapTerm};
`;

const Channel = styled.div`
  ${TapTerm};
`;

const Payment = styled.div`
  ${TapTerm};
`;

const DateTerm = styled.div`
  ${TapTerm};
`;

const SetSearch = () => {
  return (
    <Search>
      검색어
      <Propertys>
        <TwoLine>
          <CheckBoxLabel label="상품번호" />
          <CheckBoxLabel label="상품번호" />
        </TwoLine>
        <TextAreaBox
          label="복수 검색
          (enter 또는 &#34;,&#34;로 구분)"
        />
        <TwoLine>
          <TextAndInput>
            상품명 <BasicTextInputBox />
          </TextAndInput>
          <TextAndInput>
            모델명 <BasicTextInputBox />
          </TextAndInput>
        </TwoLine>

        <TwoLine>
          <TextAndInput>
            제조사명 <BasicTextInputBox />
          </TextAndInput>
          <TextAndInput>
            브랜드명 <BasicTextInputBox />
          </TextAndInput>
        </TwoLine>
      </Propertys>
    </Search>
  );
};

const EditProductSetting = () => {
  return (
    <>
      <EditProductSettings>
        {SetSearch()}
        <SalesStatus></SalesStatus>
        <Category></Category>
        <Channel></Channel>
        <Payment></Payment>
        <DateTerm></DateTerm>
      </EditProductSettings>
    </>
  );
};

export default EditProductSetting;
