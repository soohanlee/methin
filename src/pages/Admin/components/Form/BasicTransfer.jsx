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

let selectOptionsData = [
  'Apple1',
  'Pear2',
  'Orange3',
  'Apple4',
  'Pear5',
  'Orange6',
  'Apple7',
  'Pear8',
  'Orange9',
  'Apple10',
  'Pear11',
  'Orange12',
  'Apple13',
  'Pear14',
  'Orange15',
];
let applyOptionsData = ['Apple', 'Pear', 'Orange'];
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

  const [selectOptions, setSelectOptions] = React.useState(selectOptionsData);
  const [applyOptions, setApplyOptions] = React.useState(applyOptionsData);

  const onSelectCheckAllChange = (e) => {
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

    console.log(list);
    console.log(selectOptions.length);
  };

  const onApplyTransferCheckChange = (list) => {
    setApplyTransferCheckedList(list);
    setApplyTransferIndeterminate(
      !!list.length && list.length < applyOptions.length,
    );
    setApplyCheckAll(list.length === applyOptions.length);
  };

  const selectToApplyData = () => {
    let filterData = selectOptions.filter((item) => {
      let data = item;

      for (let i = 0; i < selectTransferCheckedList.length; i++) {
        if (item != selectTransferCheckedList[i]) {
          //똑같지않음
        } else {
          //똑같으면 넘어가기
          data = null;
          break;
        }
      }
      return data != null;
    });
    setSelectOptions([...filterData]);
    const addApplyData = [...applyOptions, ...selectTransferCheckedList];
    setApplyOptions([...addApplyData]);
    setSelectTransferCheckedList([]);
  };

  const applyToSelectData = () => {
    console.log(selectOptions);
    console.log(applyOptions);
  };

  const createCheckbox = (Options) => {
    return Options.map((item) => {
      return <Checkbox value={item}>{item}</Checkbox>;
    });
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
                value={selectTransferCheckedList}
                onChange={onSelectTransferCheckChange}
              >
                {createCheckbox(selectOptions)}
              </CustomCheckboxGroup>
            </CustomTransferCheckBoxParent>
          </CustomTransfer>
        </CustomTransferTitle>

        <CustomButtonParent>
          <CustomButton onClick={selectToApplyData} marginbottom="1rem">
            {'>'}
          </CustomButton>
          <CustomButton onClick={applyToSelectData}>{'<'}</CustomButton>
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
                value={applyTransferCheckedList}
                onChange={onApplyTransferCheckChange}
              >
                {createCheckbox(applyOptions)}
              </CustomCheckboxGroup>
            </CustomTransferCheckBoxParent>
          </CustomTransfer>
        </CustomTransferTitle>
      </CustomTransferSet>
    </CustomTransferParent>
  );
};

export default BasicTransfer;
