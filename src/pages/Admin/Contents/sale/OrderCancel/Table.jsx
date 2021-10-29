import React, { useState } from 'react';
import styled from 'styled-components';
import { Button as OriginButton } from 'antd';
import BasicTable from 'pages/Admin/components/Table/Table';
import ReturnRefusalModal from './ReturnRefusalModal';
import { CSVLink } from 'react-csv';

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

const Table = ({
  shipCompanyDataState,
  count,
  tableData,
  limit,
  handleTableChange,
  loading,
}) => {
  //Table Select Key/ Data
  const [selectedTableKeysState, setSelectedTableKeysState] = useState([]);
  const [selectedTableRowsState, setSelectedTableRowsState] = useState([]);

  const [returnRefusalVisibleState, setReturnRefusalVisibleState] = useState(
    false,
  );

  const handleSuccessCancelProcessBtn = () => {
    let length = selectedTableRowsState.length;

    if (length > 0) {
      let result = 1;
      selectedTableRowsState.forEach((item) => {
        if (item.status === '취소완료') {
          result = -1;
        }
      });

      if (result === 1) {
        window.confirm(
          `${count}건 중 ${length}건 환불처리 가능합니다. 환불 처리 진행하시겠습니까`,
        );
      } else {
        alert(
          '선택하신 주문 건은 취소 완료처리가 불가합니다.\n취소 처리상태가 "취소요청"인 주문건만 취소 완료처리 가능합니다.\n취소 처리상태를 확인해 주세요.',
        );
      }
    } else {
      alert('주문 건을 선택해주세요.');
    }
  };

  const handleRejectCancelProcessBtn = () => {
    let length = selectedTableRowsState.length;

    if (length > 0) {
      let result = 1;
      selectedTableRowsState.forEach((item) => {
        if (item.status === '취소완료') {
          result = -1;
        }
      });

      if (result === 1) {
        setReturnRefusalVisibleState(true);
      } else {
        alert(
          '선택하신 주문 건은 취소거부(취소철회)처리가 불가합니다.\n취소 처리상태가 "취소요청"인 주문건만 취소거부(취소철회) 처리 가능합니다.\n취소 처리상태를 확인해 주세요.',
        );
      }
    } else {
      alert('주문 건을 선택해주세요.');
    }
  };
  const handleChange = (selectedRowKeys, selectedRows) => {
    console.log('selectedRows', selectedRows);
    setSelectedTableKeysState(selectedRowKeys);
    setSelectedTableRowsState(selectedRows);
  };

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
        shipCompanyDataState={shipCompanyDataState}
      ></ReturnRefusalModal>

      <HeaderContainer>
        <Title>목록(총 {count}개)</Title>
        <ButtonContainer>
          <CSVLink data={tableData} headers={columns} filename={'취소목록.csv'}>
            <Button>엑셀다운</Button>
          </CSVLink>
        </ButtonContainer>
      </HeaderContainer>

      <BasicTable
        scroll={{ x: 'max-content', y: '20vw' }}
        data={tableData}
        columns={columns}
        selectionType="checkbox"
        onChange={handleChange}
        onTableChange={handleTableChange}
        loading={loading}
        total={count}
        pageSize={limit}
      />

      <ButtomContainer>
        <Button onClick={handleSuccessCancelProcessBtn}>취소 완료처리</Button>
        <Button
          selectedTableRowsState={selectedTableRowsState}
          onClick={handleRejectCancelProcessBtn}
        >
          취소 거부처리
        </Button>
      </ButtomContainer>
    </Container>
  );
};

export default Table;

const columns = [
  {
    label: '주문번호',
    key: 'id',
    title: '주문번호',
    dataIndex: 'id',
    align: 'center',
    width: 100,
  },
  {
    label: '주문상태',
    key: 'status',
    title: '주문상태',
    dataIndex: 'status',
    align: 'center',
    width: 150,
  },
  {
    label: '취소 처리상태',
    key: 'cancel_status',
    title: '취소 처리상태',
    dataIndex: 'cancel_status',
    align: 'center',
    width: 150,
  },
  {
    label: '결제일',
    key: 'paid_at',
    title: '결제일',
    dataIndex: 'paid_at',
    align: 'center',
    width: 200,
  },
  {
    label: '취소요청일',
    key: 'canceled_at',
    title: '취소요청일',
    dataIndex: 'canceled_at',
    align: 'center',
    width: 200,
  },
  {
    label: '취소사유',
    key: 'cancel_reason',
    title: '취소사유',
    dataIndex: 'cancel_reason',
    align: 'center',
  },
];
