import React, { useState } from 'react';
import styled from 'styled-components';
import { Button as OriginButton } from 'antd';
import OriginTable from 'pages/Admin/components/Table/Table';
import ReturnRefusalModal from 'pages/Admin/Contents/sale/OrderCancel/ReturnRefusalModal';

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

const Table = ({ tableData, count }) => {
  const [returnRefusalVisible, setReturnRefusalVisible] = useState(false);

  //주문상태
  for (var i = 0; i < tableData.length; i++) {
    switch (tableData[i].status) {
      case 0:
        tableData[i].status = '결제대기';
        break;
      case 1:
        tableData[i].status = '결제완료';
        break;
      case 2:
        tableData[i].status = '상품준비';
        break;
      case 3:
        tableData[i].status = '배송중';
        break;
      case 4:
        tableData[i].status = '배송완료';
        break;
      case 5:
        tableData[i].status = '취소완료';
        break;
      case 6:
        tableData[i].status = '반품완료';
        break;
    }

    switch (tableData[i].cancel_status) {
      case 0:
        tableData[i].cancel_status = '취소';
        break;
    }
  }

  const setExcelDown = () => {
    alert('엑셀다운');
  };

  const setSuccessCancelProcess = () => {
    window.confirm(
      '1건 중 1건 환불처리 가능합니다. 환불 처리 진행하시겠습니까',
    );
  };

  const setRejectCancelProcess = () => {
    setReturnRefusalVisible(true);
  };

  return (
    <Container>
      <ReturnRefusalModal
        centered
        title="취소건발송처리"
        visible={returnRefusalVisible}
        onOk={() => {
          setReturnRefusalVisible(false);
        }}
        onCancel={() => {
          setReturnRefusalVisible(false);
        }}
        width={500}
      ></ReturnRefusalModal>

      <HeaderContainer>
        <Title>목록(총 {count}개)</Title>
        <ButtonContainer>
          <Button onClick={setExcelDown}>엑셀다운</Button>
        </ButtonContainer>
      </HeaderContainer>

      <OriginTable
        scroll={{ x: '50vw', y: 500 }}
        data={tableData}
        columns={columns}
        selectionType="checkbox"
        onChange={() => {}}
      />

      <ButtomContainer>
        <Button onClick={setSuccessCancelProcess}>취소 완료처리</Button>
        <Button onClick={setRejectCancelProcess}>취소 거부처리</Button>
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
    title: '취소 처리상태',
    dataIndex: 'cancel_status',
  },
  {
    title: '결제일',
    dataIndex: 'paid_at',
  },
  {
    title: '취소요청일',
    dataIndex: 'canceled_at',
  },
  {
    title: '취소사유',
    dataIndex: 'cancel_reason',
  },
];
