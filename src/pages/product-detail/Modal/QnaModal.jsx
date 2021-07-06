import * as React from 'react';
import styled from 'styled-components';
import EditorForm from 'components/EditorForm';
import ModalBase from 'components/ModalBase';
import { registerUserProductQna } from 'apis/product';

import { MainButton as OriginMainButton } from 'components/styled/Button';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  > button:first-child {
    margin-right: 1rem;
  }
`;

const MainButton = styled(OriginMainButton)`
  width: 20rem;
  line-height: 4rem;
`;

const Modal = styled(ModalBase)`
  .ant-modal-body {
    padding: 4rem 3rem;
  }
`;

const QnaModal = ({ categoryTitle, isOpen, onCancel, productId }) => {
  const handleCancel = () => {
    // init();
    onCancel();
  };

  const [title, setTitle] = React.useState('');
  const [desc, setDesc] = React.useState('');

  const handleRegisterQna = async () => {
    const data = {
      title,
      body: desc,
    };
    await registerUserProductQna(productId, data);
    onCancel();
  };

  return (
    <Modal isOpen={isOpen} onCancel={handleCancel}>
      <EditorForm
        categoryTitle={categoryTitle}
        title={title}
        description={desc}
        isSecret
        setTitle={setTitle}
        setDesc={setDesc}
      />
      <ButtonContainer>
        <MainButton reverse onClick={handleCancel}>
          취소
        </MainButton>
        <MainButton onClick={handleRegisterQna}>등록</MainButton>
      </ButtonContainer>
    </Modal>
  );
};

export default QnaModal;
