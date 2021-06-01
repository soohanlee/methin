import { Modal, Table } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';

const excelModal = (property) => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

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
          <BasicButton label="찾아보기" />
        </InputBox>
      </Modal>
    </>
  );
};
export default excelModal;
