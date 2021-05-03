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
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: true },
        image: { uploadCallback: uploadImageCallBack },
        inputAccept:
          'application/pdf,text/plain,application/vnd.openxmlformatsofficedocument.wordprocessingml.document,application/msword,application/vnd.ms-excel',
      }}
    />
  );
};

export default Editor;
