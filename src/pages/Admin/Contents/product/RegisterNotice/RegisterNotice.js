import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Radio, Input, Button } from 'antd';
import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import styled from 'styled-components';
import moment from 'moment';
import { postNotice, patchNotice, getNoticeId } from 'apis/notice';
import LabelContents from 'pages/Admin/components/Label/LabelContents';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import Editor from 'pages/Admin/components/Editor';
import Calendar from 'pages/Admin/components/Calendar';

const ContainerStyled = styled.div`
  padding: 2rem;
  background: #fff;
  margin-bottom: 2rem;
`;

const DisplayDateContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const RegisterNotice = () => {
  const [noticeIDState, setNoticeID] = useState(-1);
  const [titleState, setTitleState] = useState('');
  const [categoryState, setCategoryState] = useState(0);
  const [preview_statusState, setPreview_statusState] = useState('');

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [uploadedImagesState, setUploadedImagesState] = useState([]);
  const [isDisplayDateState, setIsDisplayDateState] = useState(false);

  const [startDisplayDateState, setStartDisplayDateState] = useState(moment());
  const [
    selectedStartDisplayDateState,
    setSelectedStartDisplayDateState,
  ] = useState(moment());
  const [endDisplayDateState, setEndDisplayDateState] = useState(moment());
  const [
    selectedEndDisplayDateState,
    setSelectedEndDisplayDateState,
  ] = useState(moment());
  const location = useLocation();

  useEffect(() => {
    async function fetchAndSetUser() {
      await getApiNoticeData();
    }
    fetchAndSetUser();
  }, []);

  const getApiNoticeData = async () => {
    try {
      if (location.state.tableState.length === 0) {
      } else {
        const result = await getNoticeId(location.state.tableState[0].id);
        console.log(result.data.data);
        const customData = result.data.data;
        // antd 에서 선택을 하려면 key라는 이름의 key값이 있어야하여 key를 주입

        setNoticeID(customData.id);
        setTitleState(customData.title);
        setCategoryState(customData.category);
        setPreview_statusState(customData.preview_status);
        setEditorState(
          EditorState.createWithContent(
            ContentState.createFromBlockArray(convertFromHTML(customData.body)),
          ),
        );
      }
    } catch (e) {}
  };

  const handleTypeChange = (value) => {
    console.log(value);
  };

  const handleEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const handlestartDisplayDateSelect = (value) => {
    setStartDisplayDateState(value);
    setSelectedStartDisplayDateState(value);
  };

  const handleSelectedStartDisplayDateChange = (value) => {
    setStartDisplayDateState(value);
  };

  const handleEndDisplayDateSelect = (value) => {
    setEndDisplayDateState(value);
    setSelectedEndDisplayDateState(value);
  };

  const handleEndDisplayDateChange = (value) => {
    setEndDisplayDateState(value);
  };

  const uploadImageCallBack = (file) => {
    let newUploadedImages = uploadedImagesState;

    const imageObject = {
      file: file,
      localSrc: URL.createObjectURL(file),
    };

    newUploadedImages.concat(imageObject);

    setUploadedImagesState(newUploadedImages);

    return new Promise((resolve, reject) => {
      resolve({ data: { link: imageObject.localSrc } });
    });
  };

  const handleRegistNoticeBtn = () => {
    const data = {
      title: titleState,
      category: categoryState,
      body: editorState.getCurrentContent().getPlainText(),
      preview_status: preview_statusState,
    };
    if (noticeIDState !== -1) {
      console.log('patch');
      patchNotice(noticeIDState, data);
    } else {
      console.log('post');
      postNotice(data);
    }
  };

  return (
    <ContainerStyled>
      <LabelContents title="분류">
        <BasicSelectBox list={searchNameList} onChange={handleTypeChange} />
      </LabelContents>
      <LabelContents title="제목">
        <Input
          onChange={(e) => setTitleState(e.target.value)}
          addonAfter={`${titleState.length}/100`}
          value={titleState}
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
      <LabelContents title="공지 노출정보">
        <DisplayDateContainerStyled>
          <Radio.Group
            value={isDisplayDateState}
            onChange={(e) => setIsDisplayDateState(e.target.value)}
          >
            <Radio.Button value={true}>미리보기</Radio.Button>
            <Radio.Button value={false}>노출</Radio.Button>
          </Radio.Group>
          {isDisplayDateState && (
            <>
              <Calendar
                value={startDisplayDateState}
                selectedValue={selectedStartDisplayDateState}
                onSelect={handlestartDisplayDateSelect}
                onPanelChange={handleSelectedStartDisplayDateChange}
              />
              <Calendar
                value={endDisplayDateState}
                selectedValue={selectedEndDisplayDateState}
                onSelect={handleEndDisplayDateSelect}
                onPanelChange={handleEndDisplayDateChange}
              />
            </>
          )}
        </DisplayDateContainerStyled>
      </LabelContents>
      <Button onClick={handleRegistNoticeBtn}>상품 공지사항 등록</Button>
      <Button>취소</Button>
    </ContainerStyled>
  );
};

export default RegisterNotice;

const searchNameList = [
  { label: '일반', value: 'normal' },
  { label: '이벤트', value: 'event' },
  { label: '배송지연', value: 'late' },
  { label: '상품', value: 'product' },
];
