import { Modal, Table } from 'antd';
import 'antd/dist/antd.css';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import styled from 'styled-components';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import { useRef } from 'react';

const BasicSelectBoxStyled = styled(BasicSelectBox)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-left: ${(props) => props.paddingleft};
  margin-left: ${(props) => props.marginleft};
  margin-right: 5rem;
`;

const MenuBox = styled.div`
  display: flex;
`;

const BasicTextInputBoxStyled = styled(BasicTextInputBox)`
  width: 40rem;
`;

const DeliveryPriceGroupModal = (property) => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const inputTextBoxRef = useRef(null); //검색
  const buttonRef = useRef(null); //검색

  return (
    <>
      <Modal
        title={property.title}
        centered
        visible={property.visible}
        onCancel={property.onCancel}
        width={1000}
        footer={[]}
      >
        <MenuBox>
          <BasicSelectBoxStyled width="20rem" list={list} />
          <BasicTextInputBoxStyled
            ref={inputTextBoxRef}
          ></BasicTextInputBoxStyled>
          <BasicButton ref={buttonRef} label="검색"></BasicButton>
        </MenuBox>

        <Table
          rowSelection
          columns={property.deliveryTableColumns}
          dataSource={property.deliveryData}
          onChange={onChange}
        />
      </Modal>
    </>
  );
};
export default DeliveryPriceGroupModal;

const list = [
  { value: 'name', label: '배송비 묶음그룹명' },
  { value: 'number', label: '배송비 묶음그룹번호' },
];
