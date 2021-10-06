import * as React from 'react';
import styled from 'styled-components';
import {
  getUserAddressList,
  patchDefaultAddress,
  addUserAddress,
  deleteUserAddress,
  updateUserAddress,
} from 'apis/delivery';
import { Empty, message, notification, Input, Popconfirm } from 'antd';
import { RadioButton } from 'components/styled/Form';
import { MainButton, SubButton } from 'components/styled/Button';
import ModalBase from 'components/ModalBase';
import { BreakPoint } from 'configs/config';

import DaumPostcode from 'react-daum-postcode';

const AddDeliveryButton = styled(MainButton)`
  line-height: 4.5rem;
`;

const postCodeStyle = {
  width: '100%',
  height: '45rem',
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Table = styled.table`
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
  margin: 3rem 0;
`;

const AddButton = styled(SubButton)`
  line-height: 25px;
  width: 150px;
  margin-left: auto;
`;

const Button = styled(MainButton)`
  line-height: 35px;
  margin-left: auto;
  margin-top: 5rem;
  width: 200px;
`;

const TableHeader = styled.thead``;
const P = styled.p`
  text-align: left;
`;
const Tr = styled.tr`
  > th,
  td {
    text-align: center;
    word-break: break-word;
  }
  > th {
    padding: 1rem 0;
    border-bottom: 1px solid #f4f4f4;
  }
  > td {
    padding: 2rem 0;
    border-bottom: 1px solid #f4f4f4;
  }
  > th:nth-child(1) {
    min-width: 60px;
  }
  > th:nth-child(2) {
    min-width: 380px;
  }
  > th:nth-child(3) {
    min-width: 120px;
  }
  > th:nth-child(4) {
    min-width: 100px;
  }
  > th:nth-child(5) {
    min-width: 100px;
  }
  > th:nth-child(6) {
    min-width: 60px;
  }
`;
const TitleLabel = styled.th`
  font-size: 1.4rem;
`;

const TableBody = styled.tbody``;
const Td = styled.td``;

const AddAddress = styled(Input)`
  width: 100%;
  margin-bottom: 2rem;
`;

const Container = styled.div``;

const Modal = styled(ModalBase)`
  .ant-modal-body {
    padding: 4rem 3rem;
  }
  @media screen and (max-width: ${BreakPoint.s}px) {
    .ant-modal-body {
      padding: 2rem 1rem;
    }
  }
`;

const DestinationManage = () => {
  const [deliveryList, setDeliveryList] = React.useState([]);
  const [listCount, setListCount] = React.useState(0);
  const [selectedId, setSelectedId] = React.useState();

  const [isOpen, setIsOpen] = React.useState(false);
  const [mode, setMode] = React.useState('selected'); // selected, search, other, edit

  const [deliveryName, setDeliveryName] = React.useState(''); // 배송지 이름
  const [address, setAddress] = React.useState(''); // 주소
  const [addOtherAddress, setOtherAddress] = React.useState(''); //배송지 나머지 주소
  const [zipCode, setZipCode] = React.useState('');

  const getAddressList = async () => {
    try {
      const response = await getUserAddressList();
      if (response.data && response.data.message === 'success') {
        setDeliveryList(response.data.data.list);
        setListCount(response.data.data.count);
      }
    } catch (e) {
      message.error('새로고침 후 시도해주세요.');
    }
  };

  const confirm = (id) => {
    const response = deleteUserAddress(id);
    if (response) {
      message.info('삭제되었습니다.');
      getAddressList();
    }
  };

  const cancel = () => {};

  const handleChangeAddress = (id) => {
    setSelectedId(id);
    setIsOpen(true);
    setMode('edit');
  };

  const renderTbodyList = () => {
    if (deliveryList && deliveryList.length === 0) {
      return <Empty />;
    } else {
      return (
        deliveryList &&
        deliveryList.map((item) => {
          const {
            address_main,
            address_sub,
            created_at,
            id,
            is_default,
            name,
            user_id,
            zip_code,
          } = item;

          return (
            <Tr>
              <Td>
                <RadioButton
                  onChange={(e) => setSelectedId(e.target.value)}
                  name="check"
                  value={id}
                  checked={selectedId == id || is_default}
                />
              </Td>
              <Td>
                <P>
                  {is_default === 1 && '기본 배송지'}
                  {address_main}
                  {address_sub}
                </P>
              </Td>
              <Td>{name}</Td>
              <Td>{name}</Td>
              <Td onClick={() => handleChangeAddress(id)}>수정</Td>
              <Td>
                <Popconfirm
                  title="배송지를 삭제하시겠습니까?"
                  onConfirm={() => confirm(id)}
                  onCancel={cancel}
                  okText="삭제"
                  cancelText="취소"
                >
                  삭제
                </Popconfirm>
              </Td>
            </Tr>
          );
        })
      );
    }
  };

  React.useEffect(() => {
    getAddressList();
  }, []);

  const handleClickDeliverySaveButton = async () => {
    const response = await patchDefaultAddress(selectedId);
    if (response && response.data.message === 'success') {
      message.info('변경되었습니다.');
    }
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
    setOtherAddress(extraAddress);
    setMode('otherAddress');
  };

  const handleApplyNewDelivery = async () => {
    try {
      const data = {
        name: deliveryName,
        zip_code: zipCode,
        address_main: address,
        address_sub: addOtherAddress,
      };

      const result = await addUserAddress(data);

      if (result && result.data && result.data.message === 'success') {
        message.info('배송지를 등록하였습니다.');
        getAddressList();
        init();
        setIsOpen(false);
      }
    } catch (e) {
      notification.error('새로 고침 후 시도해주세요.');
    }
  };

  const handleEditDelivery = async () => {
    const getAddressItem = deliveryList.filter(({ id }) => id === selectedId);

    try {
      const { zip_code, address_main, id } = getAddressItem[0];
      const data = {
        name: deliveryName,
        zip_code: zip_code,
        address_main: address_main,
        address_sub: addOtherAddress,
      };
      const result = await updateUserAddress(id, data);
      if (result.data.status === 404) {
        notification.error('수정 되지 않았습니다.');
      }
      getAddressList();
      init();
      setIsOpen(false);
    } catch (e) {}
  };

  const init = () => {
    setDeliveryName('');
    setAddress('');
    setOtherAddress('');
    setZipCode();
  };

  const handleCancel = () => {
    init();
    setIsOpen(false);
  };

  const handleAddNewDelivery = () => {
    setIsOpen(true);
    setMode('search');
  };

  const handleChangeOtherAddress = (e) => {
    setOtherAddress(e.target.value);
  };

  const getAddressItem = deliveryList.filter(({ id }) => id === selectedId);
  console.log('getAddressItem', getAddressItem);
  return (
    <div>
      <HeaderContainer>
        등록된 주소: ({listCount}개)
        <AddButton onClick={handleAddNewDelivery}>배송지 추가</AddButton>
      </HeaderContainer>

      {deliveryList && deliveryList.length === 0 ? (
        <Empty />
      ) : (
        <Table>
          <TableHeader>
            <Tr>
              <TitleLabel>선택</TitleLabel>
              <TitleLabel>주소</TitleLabel>
              <TitleLabel>받으실 분</TitleLabel>
              <TitleLabel>연락처</TitleLabel>
              <TitleLabel>수정</TitleLabel>
              <TitleLabel>삭제</TitleLabel>
            </Tr>
          </TableHeader>
          <TableBody>{renderTbodyList()}</TableBody>
        </Table>
      )}
      <Button onClick={handleClickDeliverySaveButton}>
        기본 배송지로 저장
      </Button>
      <Modal isOpen={isOpen} onCancel={handleCancel}>
        {mode === 'search' && (
          <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />
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
            <AddAddress
              value={getAddressItem[0] && getAddressItem[0].address_main}
            />
            <AddAddress
              value={addOtherAddress}
              onChange={handleChangeOtherAddress}
              placeholder="나머지 주소를 입력해주세요."
            />

            <AddButton onClick={handleEditDelivery}>저장</AddButton>
          </Container>
        )}
      </Modal>
    </div>
  );
};

export default DestinationManage;
