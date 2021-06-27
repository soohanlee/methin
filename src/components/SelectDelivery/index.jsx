import React, { useState } from 'react';
import styled from 'styled-components';
import { addUserDelivery, updateUserDelivery } from 'apis/delivery';
import DaumPostcode from 'react-daum-postcode';

import ModalBase from 'components/ModalBase';
import DeliveryItem from 'components/SelectDelivery/DeliveryItem';
import {
  MainButton,
  SubButton as OriginSubButton,
} from 'components/styled/Button';
import { Input } from 'components/styled/Form';
import { notification } from 'utils/notification';

const postCodeStyle = {
  width: '100%',
  height: '45rem',
};

const Modal = styled(ModalBase)`
  .ant-modal-body {
    padding: 4rem 3rem;
  }
`;

const Container = styled.div``;

const Title = styled.div`
  font-size: 2.4rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.LINE};
  padding-bottom: 2rem;
  margin-bottom: 3rem;
`;

const InfoText = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.TEXT_INFORMATION};
  margin-bottom: 1rem;
`;

const AddDeliveryButton = styled(MainButton)`
  line-height: 4.5rem;
`;

const SubButton = styled(OriginSubButton)`
  line-height: 4.5rem;
  margin-bottom: 1rem;
`;

const AddAddress = styled(Input)`
  width: 100%;
  margin-bottom: 2rem;
`;

const DeliveryListContainer = styled.div`
  height: 40rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

const SelectDelivery = ({
  isOpen,
  onCancel,
  list,
  selectedItem,
  setSelectedItem,
}) => {
  const [mode, setMode] = useState('selected'); // selected, search, other, edit

  const [deliveryName, setDeliveryName] = useState(''); // 배송지 이름
  const [address, setAddress] = useState(''); // 주소
  const [addOtherAddress, setOtherAddress] = useState(''); //배송지 나머지 주소
  const [zipCode, setZipCode] = useState('');

  const [selectedEditItem, setSelectedEditItem] = useState([]);

  const handleClickChangeButton = (selectedItemId) => {
    const selectedItem = list.filter((item) => {
      return item.id === selectedItemId;
    });
    setSelectedEditItem(selectedItem);

    setMode('edit');
  };

  const handleApplyDelivery = () => {
    console.log(selectedItem);
  };

  const handleAddNewDelivery = () => {
    setMode('search');
  };

  const renderDeliveryList = () => {
    return (
      list &&
      list.map((item) => {
        return (
          <DeliveryItem
            onClickChangeButton={handleClickChangeButton}
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
            item={item}
          />
        );
      })
    );
  };

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setZipCode(data.zonecode);
    setAddress(fullAddress);
    setMode('otherAddress');
  };

  const renderTitle = () => {
    if (mode === 'search') {
      return '배송지 추가';
    } else if (mode === 'selected') {
      return '배송지 선택';
    } else {
      return '나머지 주소 추가';
    }
  };

  const handleChangeOtherAddress = (e) => {
    setOtherAddress(e.target.value);
  };

  const handleApplyNewDelivery = async () => {
    try {
      const data = {
        name: deliveryName,
        zip_code: zipCode,
        address_main: address,
        address_sub: addOtherAddress,
      };

      const result = await addUserDelivery(data);
      console.log(result);
      if (result && result.data && result.data.message === 'success') {
        setMode('selected');
      }
    } catch (e) {
      notification.error('새로 고침 후 시도해주세요.');
    }
  };

  const init = () => {
    setMode('selected');
    setDeliveryName('');
    setAddress('');
    setOtherAddress('');
    setZipCode();
  };

  const handleEditDelivery = async () => {
    try {
      const { zip_code, address_main, id } = selectedEditItem[0];
      const data = {
        name: deliveryName,
        zip_code: zip_code,
        address_main: address_main,
        address_sub: addOtherAddress,
      };
      const result = await updateUserDelivery(id, data);
      if (result.data.status === 404) {
        notification.error('수정 되지 않았습니다.');
      }
      setMode('selected');
    } catch (e) {}
  };

  const handleCancel = () => {
    init();
    onCancel();
  };

  return (
    <Modal isOpen={isOpen} onCancel={handleCancel}>
      <Title>{renderTitle()}</Title>
      {mode === 'search' && (
        <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />
      )}
      {mode === 'selected' && (
        <>
          <DeliveryListContainer> {renderDeliveryList()}</DeliveryListContainer>

          <InfoText>* 지역에 따라 추가배송비가 발생할 수 있습니다.</InfoText>
          <InfoText>
            * 주문 전, 배송지에 대한 정보를 정확하게 기입 후 확인해주시기
            바랍니다.
          </InfoText>
          <SubButton onClick={handleApplyDelivery}>배송지 적용</SubButton>
          <AddDeliveryButton onClick={handleAddNewDelivery}>
            새 배송지 추가
          </AddDeliveryButton>
        </>
      )}
      {mode === 'otherAddress' && (
        <Container>
          <AddAddress
            value={deliveryName}
            onChange={(e) => setDeliveryName(e.target.value)}
            placeholder="배송지 이름을 입력해주세요."
          />
          <AddAddress value={address} />
          <AddAddress
            value={addOtherAddress}
            onChange={handleChangeOtherAddress}
            placeholder="나머지 주소를 입력해주세요."
          />
          <AddDeliveryButton onClick={handleApplyNewDelivery}>
            새 배송지 추가
          </AddDeliveryButton>
        </Container>
      )}
      {mode === 'edit' && (
        <Container>
          <AddAddress
            value={deliveryName}
            onChange={(e) => setDeliveryName(e.target.value)}
            placeholder="배송지 이름을 입력해주세요."
          />
          <AddAddress value={selectedEditItem[0].address_main} />
          <AddAddress
            value={addOtherAddress}
            onChange={handleChangeOtherAddress}
            placeholder="나머지 주소를 입력해주세요."
          />

          <SubButton onClick={handleEditDelivery}>저장</SubButton>
          <AddDeliveryButton onClick={handleApplyNewDelivery}>
            삭제
          </AddDeliveryButton>
        </Container>
      )}
    </Modal>
  );
};

export default SelectDelivery;
