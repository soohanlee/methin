import { Modal, Upload, message } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';

const ExcelModal = (property) => {
  const InputBox = styled.div`
    display: flex;
    margin-top: 2rem;
  `;

  const BasicTextInputBoxStyled = styled(BasicTextInputBox)`
    width: 30rem;
  `;

  const okClick = () => {
    property.onOk();
  };

  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    beforeUpload(file) {
      if (file.name.indexOf('xls') === -1) {
        message.error(`${file.name} is not a xml`);
      } else {
        message.success(`${file.name} is xml`);
        // return new Promise((resolve) => {
        //   const reader = new FileReader();
        //   reader.readAsDataURL(file);
        //   reader.onload = () => {
        //     const img = document.createElement('img');
        //     img.src = reader.result;
        //     img.onload = () => {
        //       const canvas = document.createElement('canvas');
        //       canvas.width = img.naturalWidth;
        //       canvas.height = img.naturalHeight;
        //       const ctx = canvas.getContext('2d');
        //       ctx.drawImage(img, 0, 0);
        //       ctx.fillStyle = 'red';
        //       ctx.textBaseline = 'middle';
        //       ctx.font = '33px Arial';
        //       ctx.fillText('Ant Design', 20, 20);
        //       canvas.toBlob(resolve);
        //     };
        //   };
        // });
      }
    },
  };

  return (
    <>
      <Modal
        title={property.title}
        centered
        visible={property.visible}
        onOk={okClick}
        onCancel={property.onCancel}
        width={500}
        okText="일괄 발송처리"
        cancelText="취소"
      >
        <div>엑셀 파일을 업로드해 주세요.</div>
        <InputBox>
          <BasicTextInputBoxStyled />
          <Upload {...props}>
            <BasicButton label="찾아보기" />
          </Upload>
        </InputBox>
      </Modal>
    </>
  );
};
export default ExcelModal;
