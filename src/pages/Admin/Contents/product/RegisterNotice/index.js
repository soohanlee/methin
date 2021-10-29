import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import { Radio, Input, Button } from 'antd';
// import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import styled from 'styled-components';
import moment from 'moment';
import { postNotice, patchNotice, getNoticeId } from 'apis/notice';
import LabelContents from 'pages/Admin/components/Label/LabelContents';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import Editor from 'pages/Admin/components/Editor';
import Calendar from 'pages/Admin/components/Calendar';
import { ROUTE_PATH } from 'configs/config';

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
  const [preview_statusState, setPreview_statusState] = useState(0);
  const editorRef = useRef(null);

  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [uploadedImagesState, setUploadedImagesState] = useState([]);

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
  const history = useHistory();

  useEffect(() => {
    async function fetchAndSetUser() {
      await getApiNoticeData();
    }
    fetchAndSetUser();
  }, []);

  const getApiNoticeData = async () => {
    try {
      if (history.location < 1) {
      } else {
        const result = await getNoticeId(history.location.id);
        console.log(result);
        const customData = result.data.data;
        // antd 에서 선택을 하려면 key라는 이름의 key값이 있어야하여 key를 주입

        setNoticeID(customData.id);
        setTitleState(customData.title);
        setCategoryState(customData.category);
        setPreview_statusState(customData.preview_status);
        console.log(customData);

        if (editorRef.current) {
          editorRef.current.setData(customData.body);
        }
      }
    } catch (e) {}
  };

  const handleTypeChange = (value) => {
    setCategoryState(value);
    console.log(value);
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

  const handleRegistNoticeBtn = () => {
    const data = {
      title: titleState,
      category: categoryState,
      body: editorRef.current ? editorRef.current.getData() : null, // editorState.getCurrentContent().getPlainText(),
      preview_status: preview_statusState,
    };
    if (history.location.id) {
      console.log('patch');
      patchNotice(noticeIDState, data);
    } else {
      console.log('post');
      postNotice(data);
    }
    history.push({
      pathname: `${ROUTE_PATH.admin.main}${ROUTE_PATH.admin.noticeManage}`,
    });
  };

  const showCalender = () => {
    if (preview_statusState)
      return (
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
      );
  };

  const handleCancel = () => {
    history.push({
      pathname: `${ROUTE_PATH.admin.main}${ROUTE_PATH.admin.noticeManage}`,
    });
  };

  return (
    <ContainerStyled>
      <LabelContents title="분류">
        <BasicSelectBox
          list={searchNameList}
          value={categoryState}
          onChange={handleTypeChange}
        />
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
          ref={editorRef}
          // editorState={editorState}
          // onEditorStateChange={handleEditorStateChange}
          // uploadImageCallBack={uploadImageCallBack}
        />
      </LabelContents>
      <LabelContents title="공지 노출정보">
        <DisplayDateContainerStyled>
          <Radio.Group
            value={preview_statusState}
            onChange={(e) => setPreview_statusState(e.target.value)}
          >
            <Radio.Button value={0}>미리보기</Radio.Button>
            <Radio.Button value={1}>노출</Radio.Button>
          </Radio.Group>
          {showCalender()}
        </DisplayDateContainerStyled>
      </LabelContents>
      <Button onClick={handleRegistNoticeBtn}>상품 공지사항 등록</Button>
      <Button onClick={handleCancel}>취소</Button>
    </ContainerStyled>
  );
};

export default RegisterNotice;

const searchNameList = [
  { label: '일반', value: 0 },
  { label: '이벤트', value: 1 },
  { label: '배송지연', value: 2 },
  { label: '상품', value: 3 },
];
