import React, { useState, useRef } from 'react';
import CustomCollapse from 'pages/Admin/components/Collapse';
import Editor from 'pages/Admin/components/Editor';
// import { EditorState } from 'draft-js';

const DetailedDescription = () => {
  const editorRef = useRef(null)

  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // const [uploadedImages, setUploadedImages] = useState([]);

  // const handleEditorStateChange = (editorState) => {
  //   setEditorState(editorState);
  // };

  // const uploadImageCallBack = (file) => {
  //   let newUploadedImages = uploadedImages;

  //   const imageObject = {
  //     file: file,
  //     localSrc: URL.createObjectURL(file),
  //   };

  //   newUploadedImages.concat(imageObject);

  //   setUploadedImages(newUploadedImages);

  //   return new Promise((resolve, reject) => {
  //     resolve({ data: { link: imageObject.localSrc } });
  //   });
  // };

  return (
    <CustomCollapse header="상세설명" extra={''}>
      <Editor
          ref={editorRef}
        // editorState={editorState}
        // onEditorStateChange={handleEditorStateChange}
        // uploadImageCallBack={uploadImageCallBack}
      />
    </CustomCollapse>
  );
};

export default DetailedDescription;
