import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Button, Checkbox } from 'antd';

const CustomTransferParent = styled.div`
  display: flex;
  align-items: center;
`;
const CustomLabel = styled.div`
  margin-right: 3rem;
`;

const CustomTransferSet = styled.div`
  display: flex;
  align-items: center;
`;

const CustomTransfer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  border: 1px solid #000000;
  width: 30rem;
  height: 35rem;
  padding-right: 1rem;
  padding-left: 1rem;
`;

const CustomButtonParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 7rem;
`;

const CustomButton = styled(Button)`
  width: 4rem;
  height: 4rem;
  margin-bottom: ${(props) => props.marginbottom};
`;

const CustomTransferTitleParent = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  border: 1px solid #000000;
  padding-right: 1rem;
  padding-left: 1rem;
`;
const CustomTransferTitle = styled.div``;
const CustomTransferTitleLabel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const CustomTransferCheckBoxParent = styled.div`
  margin-top: 1rem;
`;

const selectOptions = [
  'Apple',
  'Pear',
  'Orange',
  'Apple',
  'Pear',
  'Orange',
  'Apple',
  'Pear',
  'Orange',
  'Apple',
  'Pear',
  'Orange',
  'Apple',
  'Pear',
  'Orange',
];
const applyOptions = ['Apple', 'Pear', 'Orange'];
const CheckboxGroup = Checkbox.Group;

const CustomCheckboxGroup = styled(Checkbox.Group)`
  .ant-checkbox-group-item {
    display: flex;
    margin-bottom: 0.5rem;
  }
`;

const BasicTransfer = ({ label }) => {
  const [
    selectTransferCheckedList,
    setSelectTransferCheckedList,
  ] = React.useState();
  const [
    applyTransferCheckedList,
    setApplyTransferCheckedList,
  ] = React.useState();

  const [
    selectTransferIndeterminate,
    setSelectTransferIndeterminate,
  ] = React.useState(true);
  const [
    applyTransferIndeterminate,
    setApplyTransferIndeterminate,
  ] = React.useState(true);

  const [selectCheckAll, setSelectCheckAll] = React.useState(false);
  const [applyCheckAll, setApplyCheckAll] = React.useState(false);

  const onSelectCheckAllChange = (e) => {
    console.log(selectOptions);
    setSelectTransferCheckedList(e.target.checked ? selectOptions : []);
    setSelectTransferIndeterminate(false);
    setSelectCheckAll(e.target.checked);
  };

  const onApplyCheckAllChange = (e) => {
    setApplyTransferCheckedList(e.target.checked ? applyOptions : []);
    setApplyTransferIndeterminate(false);
    setApplyCheckAll(e.target.checked);
  };

  const onSelectTransferCheckChange = (list) => {
    setSelectTransferCheckedList(list);
    setSelectTransferIndeterminate(
      !!list.length && list.length < selectOptions.length,
    );
    setSelectCheckAll(list.length === selectOptions.length);
  };

  const onApplyTransferCheckChange = (list) => {
    setApplyTransferCheckedList(list);
    setApplyTransferIndeterminate(
      !!list.length && list.length < applyOptions.length,
    );
    setApplyCheckAll(list.length === applyOptions.length);
  };

  return (
    <CustomTransferParent>
      <CustomLabel>그리드 항목설정</CustomLabel>
      <CustomTransferSet>
        <CustomTransferTitle>
          <CustomTransferTitleParent>
            <CustomTransferTitleLabel>
              <div>
                <Checkbox
                  indeterminate={selectTransferIndeterminate}
                  onChange={onSelectCheckAllChange}
                  checked={selectCheckAll}
                />{' '}
                12 items
              </div>
              <div>선택가능목록</div>
            </CustomTransferTitleLabel>
          </CustomTransferTitleParent>
          <CustomTransfer>
            <CustomTransferCheckBoxParent>
              <CustomCheckboxGroup
                options={selectOptions}
                value={selectTransferCheckedList}
                onChange={onSelectTransferCheckChange}
              ></CustomCheckboxGroup>
            </CustomTransferCheckBoxParent>
          </CustomTransfer>
        </CustomTransferTitle>

        <CustomButtonParent>
          <CustomButton marginbottom="1rem">{'>'}</CustomButton>
          <CustomButton>{'<'}</CustomButton>
        </CustomButtonParent>
        <CustomTransferTitle>
          <CustomTransferTitleParent>
            <CustomTransferTitleLabel>
              <div>
                <Checkbox
                  indeterminate={applyTransferIndeterminate}
                  onChange={onApplyCheckAllChange}
                  checked={applyCheckAll}
                />{' '}
                12 items
              </div>
              <div>그리드 노출 목록</div>
            </CustomTransferTitleLabel>
          </CustomTransferTitleParent>
          <CustomTransfer>
            <CustomTransferCheckBoxParent>
              <CustomCheckboxGroup
                options={applyOptions}
                value={applyTransferCheckedList}
                onChange={onApplyTransferCheckChange}
              />
            </CustomTransferCheckBoxParent>
          </CustomTransfer>
        </CustomTransferTitle>
      </CustomTransferSet>
    </CustomTransferParent>
  );
};

export default BasicTransfer;
