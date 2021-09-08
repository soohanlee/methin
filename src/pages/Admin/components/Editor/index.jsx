import React from 'react';
import { Editor as OriginEditor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';

const CustomEditor = styled(OriginEditor)`
  .toolbarClassName {
  }
  .wrapperClassName {
  }
  .editorClassName {
  }
`;

const Editor = ({ editorState, onEditorStateChange, uploadImageCallBack }) => {
  return (
    <CustomEditor
      editorState={editorState}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      onEditorStateChange={onEditorStateChange}
      toolbar={{
        fontFamily: {
          options: [
            'Arial',
            'Georgia',
            'Impact',
            'Tahoma',
            'Times New Roman',
            'Verdana',
            '사요나라',
          ],
          className: undefined,
          component: undefined,
          dropdownClassName: undefined,
        },
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true, width: 100 },
        link: { inDropdown: true },
        history: { inDropdown: true },
        image: { uploadCallback: uploadImageCallBack },
        inputAccept:
          'application/pdf,text/plain,application/vnd.openxmlformatsofficedocument.wordprocessingml.document,application/msword,application/vnd.ms-excel',
      }}
      placeholder="내용"
      value="테스트"
    />
  );
};

export default Editor;
