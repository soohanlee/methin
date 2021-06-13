import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Input, Tag } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import { PlusOutlined } from '@ant-design/icons';

import CustomCollapse from 'pages/Admin/components/Collapse';
import LabelContents from 'pages/Admin/components/Label/LabelContents';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import Table from 'pages/Admin/components/Table/Table';

const SelectBox = styled(BasicSelectBox)`
  margin-right: 1rem;
`;

const Label = styled.div``;

const InputBox = styled.div`
  margin-right: 2rem;
  width: 100%;
`;

const Option = () => {
  const optionNameRef = useRef(null);
  // const optionValueRef = useRef(null);
  const saveInputRef = useRef(null);

  const [tags, setTags] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
    saveInputRef.current && saveInputRef.current.focus();
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    let newTags = tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      newTags = [...tags, inputValue];
    }

    setTags(newTags);
    setInputVisible(false);
    setInputValue('');
  };

  const handleOptionNumberChange = (value) => {
    console.log(value);
  };

  const handleOptionSortChange = (value) => {
    console.log(value);
  };

  const forMap = (tag) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };
  const tagChild = tags.map(forMap);

  return (
    <CustomCollapse header="옵션" extra={''}>
      <LabelContents title="옵션그룹 개수">
        <SelectBox
          list={optionNumberList}
          onChange={handleOptionNumberChange}
        />
      </LabelContents>
      <LabelContents title="정렬 순서">
        <SelectBox list={optionSortList} onChange={handleOptionSortChange} />
      </LabelContents>
      <LabelContents title="옵션입력">
        <InputBox>
          <Label>옵션명</Label>
          <Input ref={optionNameRef} placeholder={'ex) 컬러'} />
        </InputBox>
        <InputBox>
          <Label>옵션값</Label>
          <>
            <div style={{ marginBottom: 16 }}>
              <TweenOneGroup
                enter={{
                  scale: 0.8,
                  opacity: 0,
                  type: 'from',
                  duration: 100,
                  onComplete: (e) => {
                    e.target.style = '';
                  },
                }}
                leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                appear={false}
              >
                {tagChild}
              </TweenOneGroup>
            </div>
            {inputVisible && (
              <Input
                ref={saveInputRef}
                type="text"
                size="small"
                style={{ width: 78 }}
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputConfirm}
                onPressEnter={handleInputConfirm}
              />
            )}
            {!inputVisible && (
              <Tag onClick={showInput} className="site-tag-plus">
                <PlusOutlined /> New Tag
              </Tag>
            )}
          </>
        </InputBox>
      </LabelContents>
      <LabelContents title="옵션목록">
        <SelectBox list={optionSortList} onChange={handleOptionSortChange} />
      </LabelContents>
      <Table
        onChange={() => {}}
        scroll={{ x: '100vw', y: 500 }}
        columns={columns}
      />
    </CustomCollapse>
  );
};

export default Option;

const optionNumberList = [
  { label: '1', value: 'one' },
  { label: '2', value: 'two' },
];

const optionSortList = [
  { label: '등록순', value: 'one' },
  { label: '가나다순', value: 'two' },
  { label: '낮은가격순', value: 'three' },
  { label: '높은가격순', value: 'four' },
];

const columns = [
  {
    title: '옵션명',
    dataIndex: 'productOrderNumber',
  },
  {
    title: '옵션가',
    dataIndex: 'orderNumber',
  },
  {
    title: '재고수량',
    dataIndex: 'deliveryWayBuyer',
  },
  {
    title: '판매상태',
    dataIndex: 'deliveryWay',
  },
  {
    title: '택배사',
    dataIndex: 'address',
  },
  {
    title: '관리코드',
    dataIndex: 'address',
  },
  {
    title: '사용여부',
    dataIndex: 'address',
  },
  {
    title: '삭제',
    dataIndex: 'address',
  },
];
