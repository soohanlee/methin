import React, { useState } from 'react';
import { Input } from 'antd';
import { EditorState } from 'draft-js';
import styled from 'styled-components';
import { Radio } from 'antd';
import moment from 'moment';

import LabelContents from 'pages/Admin/components/Label/LabelContents';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import Editor from 'pages/Admin/components/Editor';
import Calendar from 'pages/Admin/components/Calendar';

const Container = styled.div`
  padding: 2rem;
  background: #fff;
  margin-bottom: 2rem;
`;

const DisplayDateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RegisterNotice = () => {
  const [title, setTitle] = useState('');
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isDisplayDate, setIsDisplayDate] = useState(false);

  const [startDisplayDate, setStartDisplayDate] = useState(moment());
  const [selectedStartDisplayDate, setSelectedStartDisplayDate] = useState(
    moment(),
  );
  const [endDisplayDate, setEndDisplayDate] = useState(moment());
  const [selectedEndDisplayDate, setSelectedEndDisplayDate] = useState(
    moment(),
  );

  const [isUsePopup, setIsUsePopup] = useState(false);
  const [startPopupDate, setStartPopupDateDate] = useState(moment());
  const [selectedStartPopupDate, setSelectedStartPopupDate] = useState(
    moment(),
  );
  const [endPopupDate, setendPopupDate] = useState(moment());
  const [selectedEndPopupDate, setSelectedEndPopupDate] = useState(moment());

  const handleTypeChange = (value) => {
    console.log(value);
  };

  const handleDisplayAreaChange = (value) => {
    console.log(value);
  };

  const handleEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const uploadImageCallBack = (file) => {
    let newUploadedImages = uploadedImages;

    const imageObject = {
      file: file,
      localSrc: URL.createObjectURL(file),
    };

    newUploadedImages.concat(imageObject);

    setUploadedImages(newUploadedImages);

    return new Promise((resolve, reject) => {
      resolve({ data: { link: imageObject.localSrc } });
    });
  };

  const handlestartDisplayDateSelect = (value) => {
    setStartDisplayDate(value);
    setSelectedStartDisplayDate(value);
  };

  const handleSelectedStartDisplayDateChange = (value) => {
    setStartDisplayDate(value);
  };

  const handleEndDisplayDateSelect = (value) => {
    setEndDisplayDate(value);
    setSelectedEndDisplayDate(value);
  };

  const handleEndDisplayDateChange = (value) => {
    setEndDisplayDate(value);
  };

  const handleStartPopupDateSelect = (value) => {
    setStartPopupDateDate(value);
    setSelectedStartPopupDate(value);
  };

  const handleStartPopupDateChange = (value) => {
    setStartPopupDateDate(value);
  };

  const handleEndPopupDateSelect = (value) => {
    setendPopupDate(value);
    setSelectedEndPopupDate(value);
  };

  const handleEndPopupDateChange = (value) => {
    setendPopupDate(value);
  };

  return (
    <Container>
      <LabelContents title="분류">
        <BasicSelectBox list={searchNameList} onChange={handleTypeChange} />
      </LabelContents>
      <LabelContents title="제목">
        <Input
          onChange={(e) => setTitle(e.target.value)}
          addonAfter={`${title.length}/100`}
          value={title}
          maxLength={100}
        />
      </LabelContents>
      <LabelContents title="상품 공지사항 상세">
        <Editor
          editorState={editorState}
          onEditorStateChange={handleEditorStateChange}
          uploadImageCallBack={uploadImageCallBack}
        />
      </LabelContents>
      <LabelContents title="전시위치">
        <BasicSelectBox list={displayArea} onChange={handleDisplayAreaChange} />
      </LabelContents>
      <LabelContents title="전시기간 설정">
        <DisplayDateContainer>
          <Radio.Group
            value={isDisplayDate}
            onChange={(e) => setIsDisplayDate(e.target.value)}
          >
            <Radio.Button value={true}>설정함</Radio.Button>
            <Radio.Button value={false}>설정안함</Radio.Button>
          </Radio.Group>
          {isDisplayDate && (
            <>
              <Calendar
                value={startDisplayDate}
                selectedValue={selectedStartDisplayDate}
                onSelect={handlestartDisplayDateSelect}
                onPanelChange={handleSelectedStartDisplayDateChange}
              />
              <Calendar
                value={endDisplayDate}
                selectedValue={selectedEndDisplayDate}
                onSelect={handleEndDisplayDateSelect}
                onPanelChange={handleEndDisplayDateChange}
              />
            </>
          )}
        </DisplayDateContainer>
      </LabelContents>
      <LabelContents title="팝업사용">
        <DisplayDateContainer>
          <Radio.Group
            value={isUsePopup}
            onChange={(e) => setIsUsePopup(e.target.value)}
          >
            <Radio.Button value={true}>설정함</Radio.Button>
            <Radio.Button value={false}>설정안함</Radio.Button>
          </Radio.Group>
          {isUsePopup && (
            <>
              <Calendar
                value={startPopupDate}
                selectedValue={selectedStartPopupDate}
                onSelect={handleStartPopupDateSelect}
                onPanelChange={handleStartPopupDateChange}
              />
              <Calendar
                value={endPopupDate}
                selectedValue={selectedEndPopupDate}
                onSelect={handleEndPopupDateSelect}
                onPanelChange={handleEndPopupDateChange}
              />
            </>
          )}
        </DisplayDateContainer>
      </LabelContents>
    </Container>
  );
};

export default RegisterNotice;

const searchNameList = [
  { label: '일반', value: 'normal' },
  { label: '이벤트', value: 'event' },
  { label: '배송지연', value: 'late' },
  { label: '상품', value: 'product' },
];

const displayArea = [
  { label: '전체', value: 'all' },
  { label: '웹', value: 'web' },
  { label: '모바일', value: 'mobile' },
];
