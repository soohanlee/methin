import 'antd/dist/antd.css';
import { Modal, Upload } from 'antd';
import { notification } from 'utils/notification';
import styled from 'styled-components';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import 'antd/dist/antd.css';

const ModalStyled = styled(Modal)`
  padding-bottom: 0px;
  text-align: center;
  justify-content: center;
`;

const TitleTextStyled = styled.div`
  padding: 4.5rem;
  padding-top: 0rem;
  padding-bottom: 2rem;
  font-size: 18px;
  text-align: center;
`;

const SubTextStyled = styled.div`
  padding: 4.5rem;
  padding-top: 0rem;
  padding-bottom: 2rem;

  font-size: 15px;
  text-align: center;
`;

const SubButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageModal = ({ visible, setVisible, onClick, countryRef }) => {
  const imageUpload = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        notification.success('업로드 성공');
      } else if (info.file.status === 'error') {
        notification.error('업로드 실패');
      }
    },
  };

  return (
    <>
      <ModalStyled
        centered
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
        width={800}
        footer={[]}
      >
        <TitleTextStyled>
          한 번에 500장까지 사진 첨부가 가능합니다. <br />
          (한 장당 20MB, 전체 500MB) <br />
          JPG, GIF, PNG, BMP 이미지 파일을 올릴 수 있습니다.
        </TitleTextStyled>

        <SubTextStyled>
          저작권 등 다른 사람의 권리를 침해하는 사진은 관련 법률에 의해 제재를
          받으실 수 있습니다.
        </SubTextStyled>

        <SubButtonStyled>
          <Upload {...imageUpload}>
            <BasicButton onClick={imageUpload} label="사진추가" />
          </Upload>
        </SubButtonStyled>
      </ModalStyled>
    </>
  );
};
export default ImageModal;
