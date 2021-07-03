import React, { useState } from 'react';
import styled from 'styled-components';
import { Button as OriginButton } from 'antd';

import LabelContents from 'pages/Admin/components/Label/LabelContents';
import OriginTable from 'pages/Admin/components/Table/Table';
import ReturnRefusalModal from './ReturnRefusalModal';
import ReturnHoldModal from './ReturnHoldModal';
import ReturnReasonModifyMadal from './ReturnReasonModifyMadal';

const Container = styled.div`
  background: #fff;
  padding: 3rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
`;

const Title = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled(OriginButton)`
  margin-right: 0.5rem;
`;

const ButtomContainer = styled.div`
  margin-top: 4rem;
`;

const Table = ({ data, count }) => {
  const [returnRefusalVisible, setReturnRefusalVisible] = useState(false);
  const [returnReasonVisible, setReturnReasonVisible] = useState(false);

  const setCollectionComplete = () => {
    window.confirm('1건 중 1건 수거 완료처리를 진행하시겠습니까?');
  };
  const setReturnComplete = () => {
    window.confirm(
      '수거 완료되지않은 상품은 수거완료처리가 동시에 진행됩니다. \n반품 완료처리를 진행하시겠습니까?',
    );
  };
  const setReturnReject = () => {
    setReturnRefusalVisible(true);
  };
  const setChangeTrade = () => {
    alert('교환으로 변경');
  };
  const setModifyReturnReason = () => {
    setReturnReasonVisible(true);
  };
  const setModifyReturnCollection = () => {
    alert('수거정보 수정');
  };
  const setExcelDown = () => {
    alert('엑셀다운');
  };
  return (
    <Container>
      <ReturnRefusalModal
        centered
        title="반품 거부처리"
        visible={returnRefusalVisible}
        onOk={() => {
          setReturnRefusalVisible(false);
        }}
        onCancel={() => {
          setReturnRefusalVisible(false);
        }}
        width={500}
      ></ReturnRefusalModal>
      <ReturnReasonModifyMadal
        centered
        title="반품사유 수정"
        visible={returnReasonVisible}
        onOk={() => {
          setReturnReasonVisible(false);
        }}
        onCancel={() => {
          setReturnReasonVisible(false);
        }}
        width={500}
      ></ReturnReasonModifyMadal>

      <HeaderContainer>
        <Title>목록(총 {count}개)</Title>
        <ButtonContainer>
          <Button onClick={setExcelDown}>엑셀다운</Button>
        </ButtonContainer>
      </HeaderContainer>

      <OriginTable
        scroll={{ x: '50vw', y: 500 }}
        data={data}
        columns={columns}
        selectionType="checkbox"
        onChange={() => {}}
      />

      <ButtomContainer>
        <LabelContents title="반품처리">
          <Button onClick={setCollectionComplete}>수거 완료처리</Button>
          <Button onClick={setReturnComplete}>반품 완료처리</Button>
          <Button onClick={setReturnReject}>반품 거부처리</Button>
          <Button onClick={setChangeTrade}>교환으로 변경</Button>
        </LabelContents>
        <LabelContents title="정보수정">
          <Button onClick={setModifyReturnReason}>반품사유 수정</Button>
          <Button onClick={setModifyReturnCollection}>수거정보 수정</Button>
        </LabelContents>
      </ButtomContainer>
    </Container>
  );
};

export default Table;

const columns = [
  {
    title: '주문번호',
    dataIndex: 'id',
  },
  {
    title: '주문상태',
    dataIndex: 'status',
  },
  {
    title: '반품 처리상태',
    dataIndex: 'refund_status',
  },
  {
    title: '수거방법',
    dataIndex: 'refund_type',
  },
  {
    title: '수거상태',
    dataIndex: '',
  },
  {
    title: '결제일',
    dataIndex: 'paid_at',
  },
  {
    title: '반품요청일',
    dataIndex: 'refunded_at',
  },
];
