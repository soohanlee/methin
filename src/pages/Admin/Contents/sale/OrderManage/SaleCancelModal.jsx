import { useRef, useState } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import TextAreaBox from 'pages/Admin/components/Form/BasicTextArea';

import { patchCancelConfirm } from 'apis/payment';

const SaleCancelModal = (property) => {
  const [typeState, setTypeState] = useState(0);
  const [inputState, setInputState] = useState();
  const areaRef = useRef();

  const handleType = (value) => {
    setTypeState(value);
  };

  const handleOkClick = async () => {
    const _category = SortViewList[typeState].label;

    var resultValue = window.confirm(
      `주문건을 ${_category} 사유로 취소처리 하시겠습니까?\n상품품절 취소처리시 상품 품절처리도 동시 진행되며,\n구매자에게 추가배송비가 청구되지 않습니다.`,
    );

    if (resultValue) {
      const data = {
        from_admin: false,
        cancel_reason: inputState,
      };
      await patchCancelConfirm(property.selectedTableRowsState[0].id, data);
      alert('주문건 취소 처리가 완료되었습니다.');
    }
  };

  const handleInputChange = (value) => {
    setInputState(value.target.value);
  };

  const resetData = () => {
    setTypeState(0);
    setInputState('');
  };

  return (
    <>
      <Modal
        title={property.title}
        centered
        visible={property.visible}
        onOk={() => {
          property.onOk();
          handleOkClick();
          resetData();
        }}
        onCancel={() => {
          property.onCancel();
          resetData();
        }}
        width={500}
        okText="확인"
        cancelText="닫기"
      >
        <BasicSelectBox
          value={typeState}
          defaultValue={typeState}
          onChange={(value) => {
            handleType(value);
          }}
          list={SortViewList}
        />
        <TextAreaBox
          value={inputState}
          onChange={handleInputChange}
          ref={areaRef}
        />
      </Modal>
    </>
  );
};
export default SaleCancelModal;

const SortViewList = [
  { label: '상품품절', value: 0 },
  { label: '배송지연', value: 1 },
  { label: '서비스 불만족', value: 2 },
  { label: '구매의사취소', value: 3 },
  { label: '색상 및 사이즈 변경', value: 4 },
  { label: '다른 상품 잘못 주문', value: 5 },
  { label: '상품정보 상이', value: 6 },
];
