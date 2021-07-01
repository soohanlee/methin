import { Modal } from 'antd';
import 'antd/dist/antd.css';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import styled from 'styled-components';

const AdressModifyModal = (property) => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const okClick = () => {};

  const BasicButtonStyled = styled(BasicButton)`
    margin-left: 1rem;
  `;

  const BasicTextInputBoxStyled = styled(BasicTextInputBox)`
    width: ${(props) => props.WidthSize};
    margin-bottom: 1rem;
  `;

  const FlexStyled = styled.div`
    display: flex;
  `;

  return (
    <>
      <Modal
        title={property.title}
        centered
        visible={property.visible}
        onOk={okClick}
        onCancel={property.onCancel}
        width={500}
        okText="변경"
        cancelText="닫기"
      >
        <div>
          <BasicTextInputBoxStyled
            WidthSize="20rem"
            textSize="16rem"
            label="수취인명"
          />
          <BasicTextInputBoxStyled
            WidthSize="20rem"
            textSize="16rem"
            label="수취인 연락처1"
          />
          <BasicTextInputBoxStyled
            WidthSize="20rem"
            textSize="16rem"
            label="수취인 연락처2"
          />
          <FlexStyled>
            <BasicTextInputBoxStyled
              WidthSize="10rem"
              textSize="16rem"
              label="배송지 주소"
            />
            <BasicButtonStyled size="samll" label="우편번호 찾기" />
          </FlexStyled>
        </div>
        <div>
          <BasicTextInputBoxStyled
            WidthSize="20rem"
            textSize="16rem"
            label="우편번호"
            disabled
          />
          <BasicTextInputBoxStyled
            WidthSize="20rem"
            textSize="16rem"
            label="주소"
            disabled
          />
          <BasicTextInputBoxStyled
            WidthSize="20rem"
            textSize="16rem"
            label="상세주소"
          />
        </div>
      </Modal>
    </>
  );
};
export default AdressModifyModal;
