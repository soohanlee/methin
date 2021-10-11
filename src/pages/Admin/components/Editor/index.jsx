import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';

const Editor = (props, ref) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const editorDivRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    if (!isInitialized && window.ClassicEditor && editorDivRef.current) {
      setIsInitialized(true);

      window.ClassicEditor.create(editorDivRef.current, {
        toolbar: {
          items: [
            'alignment',
            'bold',
            'italic',
            'underline',
            // 'horizontalLine',
            'link',
            '|',
            'fontColor',
            'fontFamily',
            'fontSize',
            '|',
            'imageUpload',
            'mediaEmbed',
            '|',
            'undo',
            'redo',
          ],
        },
        language: 'ko',
        image: {
          toolbar: [
            'imageTextAlternative',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
            'linkImage',
          ],
        },
        fontFamily: {
          options: ['default', 'Arial', '궁서체', '바탕', '돋움'],
          supportAllValues: true,
        },
        licenseKey: '',
      })
        .then((editor) => {
          editorRef.current = editor;
        })
        .catch((error) => {
          console.error(error);
        });
    }
    return () => {
      if (editorRef && editorRef.current instanceof window.ClassicEditor) {
        // 이 시점에 DIV ref 날라가서 호출하면 에러남. 나중에 재확인 필요
        // editorRef.current.destroy()
      }
    };
  }, [isInitialized, editorDivRef, window.ClassicEditor]);

  useImperativeHandle(ref, () => ({
    getData() {
      if (editorRef.current instanceof window.ClassicEditor) {
        return editorRef.current.getData();
      } else return null;
    },

    setData(data) {
      if (editorRef.current instanceof window.ClassicEditor) {
        editorRef.current.setData(data);
      }
    },
  }));

  return <div ref={editorDivRef} />;
};

export default forwardRef(Editor);
