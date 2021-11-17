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
  border: 1px solid #d0d0d0;
  border-top: 0px;
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
  border: 2px solid #d0d0d0;
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
const CheckboxGroup = Checkbox.Group;

const CustomCheckboxGroup = styled(Checkbox.Group)`
  flex-direction: column;
  display: flex;

  .ant-checkbox-wrapper {
    margin: 0px;
    margin-bottom: 5px;
  }
`;

const BasicTransfer = ({
  TitleLabel,
  SelectedLabel,
  TargetLabel,
  SelectedDataSource,
}) => {
  const [
    selectTransferCheckedList,
    setSelectTransferCheckedList,
  ] = React.useState([]);
  const [
    targetTransferCheckedList,
    setTargetTransferCheckedList,
  ] = React.useState([]);

  const [
    selectTransferIndeterminate,
    setSelectTransferIndeterminate,
  ] = React.useState(false);
  const [
    targetTransferIndeterminate,
    setTargetTransferIndeterminate,
  ] = React.useState(false);

  const [selectCheckAll, setSelectCheckAll] = React.useState(false);
  const [targetCheckAll, setTargetCheckAll] = React.useState(false);

  const [selectOptions, setSelectOptions] = React.useState(
    SelectedDataSource ? SelectedDataSource : [],
  );
  const [targetOptions, setTargetOptions] = React.useState([]);

  const onSelectCheckAllChange = (e) => {
    setSelectTransferCheckedList(e.target.checked ? selectOptions : []);
    setSelectTransferIndeterminate(false);
    setSelectCheckAll(e.target.checked);
  };

  const onTargetCheckAllChange = (e) => {
    setTargetTransferCheckedList(e.target.checked ? targetOptions : []);
    setTargetTransferIndeterminate(false);
    setTargetCheckAll(e.target.checked);
  };

  const onSelectTransferCheckChange = (e) => {
    if (e.target.checked == true) {
      setSelectTransferCheckedList([
        ...selectTransferCheckedList,
        e.target.value,
      ]);
    } else {
      const datas = selectTransferCheckedList.filter((item) => {
        return item !== e.target.value;
      });
      setSelectTransferCheckedList(datas);
    }

    let _indeterminate = false;
    let _all = false;
    if (selectTransferCheckedList.length < selectOptions.length - 1) {
      if (selectTransferCheckedList.length <= 0) {
        if (e.target.checked) {
          _indeterminate = true;
        }
      } else {
        if (selectTransferCheckedList.length <= 1) {
          if (e.target.checked) {
            _indeterminate = true;
          }
        } else {
          _indeterminate = true;
        }
      }
    } else {
      if (e.target.checked) {
        _all = true;
      } else {
        _indeterminate = true;
      }
    }

    setSelectTransferIndeterminate(_indeterminate);
    setSelectCheckAll(_all);
  };

  const onTargetTransferCheckChange = (e) => {
    if (e.target.checked == true) {
      setTargetTransferCheckedList([
        ...targetTransferCheckedList,
        e.target.value,
      ]);
    } else {
      const datas = targetTransferCheckedList.filter((item) => {
        return item !== e.target.value;
      });
      setTargetTransferCheckedList(datas);
    }

    let _indeterminate = false;
    let _all = false;
    if (targetTransferCheckedList.length < targetOptions.length - 1) {
      if (targetTransferCheckedList.length <= 0) {
        if (e.target.checked) {
          _indeterminate = true;
        }
      } else {
        if (targetTransferCheckedList.length <= 1) {
          if (e.target.checked) {
            _indeterminate = true;
          }
        } else {
          _indeterminate = true;
        }
      }
    } else {
      if (e.target.checked) {
        _all = true;
      } else {
        _indeterminate = true;
      }
    }

    setTargetTransferIndeterminate(_indeterminate);
    setTargetCheckAll(_all);
  };

  const selectTotargetData = () => {
    let filterData = selectOptions.filter((item) => {
      let data = item;
      for (let i = 0; i < selectTransferCheckedList.length; i++) {
        if (data != selectTransferCheckedList[i]) {
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
    const addtargetData = [...targetOptions, ...selectTransferCheckedList];
    setTargetOptions([...addtargetData]);
    setSelectTransferCheckedList([]);
  };

  const targetToSelectData = () => {
    let filterData = targetOptions.filter((item) => {
      let data = item;
      for (let i = 0; i < targetTransferCheckedList.length; i++) {
        if (data != targetTransferCheckedList[i]) {
          //똑같지않음
        } else {
          //똑같으면 넘어가기
          data = null;
          break;
        }
      }
      return data != null;
    });
    setTargetOptions([...filterData]);
    const addSelectData = [...selectOptions, ...targetTransferCheckedList];
    setSelectOptions([...addSelectData]);
    setTargetTransferCheckedList([]);
  };

  const createCheckbox = (Options, onChange) => {
    console.log(Options);
    return Options.map((item, index) => {
      return (
        <Checkbox onChange={onChange} value={item}>
          {item}
        </Checkbox>
      );
    });
  };

  return (
    <CustomTransferParent>
      <CustomLabel>{TitleLabel}</CustomLabel>
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
                {selectTransferCheckedList.length} / {selectOptions.length}{' '}
                items
              </div>
              <div>{SelectedLabel}</div>
            </CustomTransferTitleLabel>
          </CustomTransferTitleParent>
          <CustomTransfer>
            <CustomTransferCheckBoxParent>
              <CustomCheckboxGroup value={selectTransferCheckedList}>
                {createCheckbox(selectOptions, onSelectTransferCheckChange)}
              </CustomCheckboxGroup>
            </CustomTransferCheckBoxParent>
          </CustomTransfer>
        </CustomTransferTitle>

        <CustomButtonParent>
          <CustomButton onClick={selectTotargetData} marginbottom="1rem">
            {'>'}
          </CustomButton>
          <CustomButton onClick={targetToSelectData}>{'<'}</CustomButton>
        </CustomButtonParent>
        <CustomTransferTitle>
          <CustomTransferTitleParent>
            <CustomTransferTitleLabel>
              <div>
                <Checkbox
                  indeterminate={targetTransferIndeterminate}
                  onChange={onTargetCheckAllChange}
                  checked={targetCheckAll}
                />{' '}
                {targetTransferCheckedList.length} / {targetOptions.length}{' '}
                items
              </div>
              <div>{TargetLabel}</div>
            </CustomTransferTitleLabel>
          </CustomTransferTitleParent>
          <CustomTransfer>
            <CustomTransferCheckBoxParent>
              <CustomCheckboxGroup value={targetTransferCheckedList}>
                {createCheckbox(targetOptions, onTargetTransferCheckChange)}
              </CustomCheckboxGroup>
            </CustomTransferCheckBoxParent>
          </CustomTransfer>
        </CustomTransferTitle>
      </CustomTransferSet>
    </CustomTransferParent>
  );
};

export default BasicTransfer;
