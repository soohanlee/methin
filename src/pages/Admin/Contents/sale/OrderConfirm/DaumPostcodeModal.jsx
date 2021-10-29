import { useEffect, useState, useRef } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';

const PostCodeStyled = styled(DaumPostcode)`
  display: block;
  position: relative;
  top: 0;
  width: 400px;
  height: 400px;
  padding: 7px;
`;

const DaumPostcodeModal = (property) => {
  const [address, setAddress] = useState(''); // 주소
  const [addressDetail, setAddressDetail] = useState(''); // 상세주소

  const onCompletePost = (data) => {
    let fullAddr = data.address;
    let extraAddr = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddr += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddr +=
          extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
    }
    setAddress(data.zonecode);
    setAddressDetail(fullAddr);
  };

  const handleOkClick = () => {
    property.inputPostCode(address, addressDetail);
    property.onVisible(false);
  };

  const handleCancleClick = () => {
    property.onVisible(false);
  };

  return (
    <>
      <Modal
        title={property.title}
        centered
        visible={property.visible}
        onOk={handleOkClick}
        onCancel={handleCancleClick}
        width={500}
        okText="변경"
        cancelText="닫기"
      >
        <PostCodeStyled onComplete={onCompletePost} />
      </Modal>
    </>
  );
};
export default DaumPostcodeModal;
