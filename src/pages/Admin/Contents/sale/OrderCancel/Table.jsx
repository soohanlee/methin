import React, { useState } from 'react';
import styled from 'styled-components';
import { Button as OriginButton } from 'antd';
import OriginTable from 'pages/Admin/components/Table/Table';
import ReturnRefusalModal from './ReturnRefusalModal';

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

const Table = ({ columns, tableData, count }) => {
  const [returnRefusalVisibleState, setReturnRefusalVisibleState] = useState(
    false,
  );
  const NumDataToWord = () => {
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
        default:
          break;
      }

      switch (tableData[i].cancel_status) {
        case 0:
          tableData[i].cancel_status = '취소';
          break;
        default:
          break;
      }
    }
  };

  const handleExcelDownBtn = () => {
    alert('엑셀다운');
  };

  const handleSuccessCancelProcessBtn = () => {
    window.confirm(
      '1건 중 1건 환불처리 가능합니다. 환불 처리 진행하시겠습니까',
    );
  };

  const handleRejectCancelProcessBtn = () => {
    setReturnRefusalVisibleState(true);
  };
  NumDataToWord();
  return (
    <Container>
      <ReturnRefusalModal
        centered
        title="취소건발송처리"
        visible={returnRefusalVisibleState}
        onOk={() => {
          setReturnRefusalVisibleState(false);
        }}
        onCancel={() => {
          setReturnRefusalVisibleState(false);
        }}
        width={500}
      ></ReturnRefusalModal>

      <HeaderContainer>
        <Title>목록(총 {count}개)</Title>
        <ButtonContainer>
          <Button onClick={handleExcelDownBtn}>엑셀다운</Button>
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
        <Button onClick={handleSuccessCancelProcessBtn}>취소 완료처리</Button>
        <Button onClick={handleRejectCancelProcessBtn}>취소 거부처리</Button>
      </ButtomContainer>
    </Container>
  );
};

export default Table;
