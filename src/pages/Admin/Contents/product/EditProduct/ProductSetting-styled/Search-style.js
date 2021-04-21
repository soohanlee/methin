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
  border: 1px solid gray;
  padding-left: 5rem;
  padding-right: 5rem;
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
  padding-left: 15rem;
`;

const TwoLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Search = styled.div`
  ${TapTerm};
  height: 15rem;
`;

const SetList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckBoxLabelStyled = styled(CheckBoxLabel)`
  margin: 0px;
  padding: 10px;
  width: 20rem;
  margin-bottom: 2rem;
`;

const TextAndInput = styled.div`
  margin-left: 20px;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  width: 30rem;
`;

const TextAreaBoxStyled = styled(TextAreaBox)`
  width: 20rem;
`;

const BasicTextInputBoxStyled = styled(BasicTextInputBox)`
  padding-left: 2rem;
`;
