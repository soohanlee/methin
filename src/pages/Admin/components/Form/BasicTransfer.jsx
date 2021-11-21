import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Button, Checkbox } from 'antd';
import { useEffect, useState, useRef } from 'react';
import { LeftOutlined, RightOutlined, RedoOutlined } from '@ant-design/icons';

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
/*
TitleLabel = 제목
SelectedLabel = 선택트랜스퍼제목
TargetLabel = 타겟트랜스퍼제목
selectData = 선택데이터(기존에 저장된 값이 없을경우 빈배열)
targetData = 타겟데이터(기존에 저장된 값이 없을경우 빈배열)
onChange = 데이터 변경마다 호출(선택트랜스퍼 데이터, 타겟트랜스퍼 데이터 반환)
*/
const BasicTransfer = ({
  TitleLabel,
  SelectedLabel,
  TargetLabel,
  selectData,
  targetData,
  selectCheckRow,
  targetCheckRow,
  setSelectCheckedRow,
  setTargetCheckRow,
  onChange,
}) => {
  const [
    selectTransferIndeterminate,
    setSelectTransferIndeterminate,
  ] = useState(false);
  const [
    targetTransferIndeterminate,
    setTargetTransferIndeterminate,
  ] = useState(false);

  const [selectCheckAll, setSelectCheckAll] = useState(false);
  const [targetCheckAll, setTargetCheckAll] = useState(false);

  //각 트랜스퍼의 데이터 저장 (State는 갱신이 느려서 여기 따로저장)
  let localSelectData = useRef([]);
  let localTargetData = useRef([]);

  const onSelectCheckAllChange = (e) => {
    setSelectCheckedRow(e.target.checked ? selectData : []);
    setSelectTransferIndeterminate(false);
    setSelectCheckAll(e.target.checked);
  };

  const onTargetCheckAllChange = (e) => {
    setTargetCheckRow(e.target.checked ? targetData : []);
    setTargetTransferIndeterminate(false);
    setTargetCheckAll(e.target.checked);
  };

  const onSelectTransferCheckChange = (e) => {
    if (e.target.checked == true) {
      setSelectCheckedRow([...selectCheckRow, e.target.value]);
    } else {
      const datas = selectCheckRow.filter((item) => {
        return item !== e.target.value;
      });
      setSelectCheckedRow(datas);
    }

    let _indeterminate = false;
    let _all = false;

    if (localSelectData.current) {
      if (selectCheckRow.length < localSelectData.current.length - 1) {
        if (selectCheckRow.length <= 0) {
          if (e.target.checked) {
            _indeterminate = true;
          }
        } else {
          if (selectCheckRow.length <= 1) {
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
    }
  };

  const onTargetTransferCheckChange = (e) => {
    if (e.target.checked == true) {
      setTargetCheckRow([...targetCheckRow, e.target.value]);
    } else {
      const datas = targetCheckRow.filter((item) => {
        return item !== e.target.value;
      });
      setTargetCheckRow(datas);
    }

    let _indeterminate = false;
    let _all = false;
    if (localTargetData) {
      if (targetCheckRow.length < localTargetData.current.length - 1) {
        if (targetCheckRow.length <= 0) {
          if (e.target.checked) {
            _indeterminate = true;
          }
        } else {
          if (targetCheckRow.length <= 1) {
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
    }
  };

  const OnChangeDataSet = (e) => {
    onChange(e);
  };

  const SelectToTargetData = () => {
    let filterData = selectData.filter((item) => {
      let data = item;
      for (let i = 0; i < selectCheckRow.length; i++) {
        if (data != selectCheckRow[i]) {
          //똑같지않음
        } else {
          //똑같으면 넘어가기
          data = null;
          break;
        }
      }
      return data != null;
    });

    localSelectData.current = [...filterData];
    localTargetData.current = [...targetData, ...selectCheckRow];

    const e = { localSelectData, localTargetData };
    OnChangeDataSet(e);

    setSelectCheckedRow([]);
  };

  const TargetToSelectData = () => {
    let filterData = targetData.filter((item) => {
      let data = item;
      for (let i = 0; i < targetCheckRow.length; i++) {
        if (data != targetCheckRow[i]) {
          //똑같지않음
        } else {
          //똑같으면 넘어가기
          data = null;
          break;
        }
      }
      return data != null;
    });

    localSelectData.current = [...selectData, ...targetCheckRow];
    localTargetData.current = [...filterData];

    const e = { localSelectData, localTargetData };
    OnChangeDataSet(e);

    setTargetCheckRow([]);
  };

  const createCheckbox = (Options, onChange) => {
    if (Options) {
      return Options.map((item, index) => {
        return (
          <Checkbox onChange={onChange} value={item}>
            {item}
          </Checkbox>
        );
      });
    }
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
                {selectCheckRow.length} / {selectData.length} items
              </div>
              <div>{SelectedLabel}</div>
            </CustomTransferTitleLabel>
          </CustomTransferTitleParent>
          <CustomTransfer>
            <CustomTransferCheckBoxParent>
              <CustomCheckboxGroup value={selectCheckRow}>
                {createCheckbox(selectData, onSelectTransferCheckChange)}
              </CustomCheckboxGroup>
            </CustomTransferCheckBoxParent>
          </CustomTransfer>
        </CustomTransferTitle>

        <CustomButtonParent>
          <CustomButton onClick={SelectToTargetData} marginbottom="1rem">
            <RightOutlined />
          </CustomButton>
          <CustomButton onClick={TargetToSelectData} marginbottom="1rem">
            <LeftOutlined />
          </CustomButton>
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
                {targetCheckRow.length} / {targetData.length} items
              </div>
              <div>{TargetLabel}</div>
            </CustomTransferTitleLabel>
          </CustomTransferTitleParent>
          <CustomTransfer>
            <CustomTransferCheckBoxParent>
              <CustomCheckboxGroup value={targetCheckRow}>
                {createCheckbox(targetData, onTargetTransferCheckChange)}
              </CustomCheckboxGroup>
            </CustomTransferCheckBoxParent>
          </CustomTransfer>
        </CustomTransferTitle>
      </CustomTransferSet>
    </CustomTransferParent>
  );
};

export default BasicTransfer;
