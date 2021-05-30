import * as React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { Button as OriginButton } from 'antd';
import { deleteProduct } from 'apis/product';
import { notification } from 'utils/notification';
import { ROUTE_PATH } from 'configs/config';

import OriginTable from 'pages/Admin/components/Table/Table';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicModal from 'pages/Admin/components/Modal/BasicModal';

const BasicSelectBoxStyled = styled(BasicSelectBox)`
  width: 15rem;
  margin-right: 0.5rem;
`;

const Container = styled.div`
  background: #fff;
  padding: 3rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.width};
  padding-bottom: 2rem;
`;

const Title = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled(OriginButton)`
  margin-right: 0.5rem;
`;

const Table = ({ table, count, setTable }) => {
  const [productSortSelectState, setProductSortSelectState] = React.useState(
    [],
  );
  const [productCountSelectState, setProductCountSelectState] = React.useState(
    [],
  );

  const [selectedTableKeys, setSelectedTableKeys] = React.useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState('');
  const history = useHistory();

  const setExcelDown = () => {
    alert('엑셀다운');
  };

  const handleMoveEditPage = (id) => {
    history.push({
      pathname: `${ROUTE_PATH.admin.main}${ROUTE_PATH.admin.registerProduct}`,
      state: id,
    });
  };

  const columns = [
    {
      title: '수정',
      dataIndex: 'modify',
      render: (_, record) => (
        <OriginButton onClick={() => handleMoveEditPage(record.id)}>
          수정
        </OriginButton>
      ),
    },
    {
      title: '삭제',
      dataIndex: 'delete',
      render: (_, record) => (
        <OriginButton onClick={() => handleDeleteModalOpen(record.id)}>
          삭제
        </OriginButton>
      ),
    },
    {
      title: '상품번호',
      dataIndex: 'id',
    },
    {
      title: '상품명',
      dataIndex: 'name',
    },
    {
      title: '판매상태',
      dataIndex: 'status',
    },
    {
      title: '전시상태',
      dataIndex: 'preview_status',
    },
    {
      title: '재고수량',
      dataIndex: 'count',
    },
    {
      title: '판매가',
      dataIndex: 'price',
    },
    {
      title: '할인가',
      dataIndex: 'discount_amount',
    },
    {
      title: '최소구매수량',
      dataIndex: 'min_quantity',
    },
    {
      title: '최대구매수량',
      dataIndex: 'max_quantity',
    },
    {
      title: '배송비유형',
      dataIndex: 'ship_category',
    },
    ,
    {
      title: '배송비결제방식',
      dataIndex: 'ship_pay_type',
    },
    ,
    {
      title: '기본배송비',
      dataIndex: 'ship_amount',
    },
    {
      title: '반품배송비',
      dataIndex: 'refund_ship_amount',
    },
    {
      title: '교환배송비',
      dataIndex: 'exchange_ship_amount',
    },
    ,
    {
      title: '판매시작일',
      dataIndex: 'sales_start_date',
    },
    {
      title: '판매종료일',
      dataIndex: 'sales_end_date',
    },
    {
      title: '상품등록일',
      dataIndex: 'created_at',
    },
    {
      title: '최종수정일',
      dataIndex: 'updated_at',
    },
  ];

  const SortViewList = [
    { label: '연관상품 ID순', value: 'associatedProductID' },
    { label: '대표 상품명순', value: 'representativeProduct' },
    { label: '등록일순', value: 'registrationDate' },
    { label: '최종수정일순', value: 'lastModifiedDate' },
  ];

  const CountList = [
    { label: '50개씩', value: 'fiftyCount' },
    { label: '100개씩', value: 'hundredCount' },
    { label: '300개씩', value: 'threeHundredCount' },
    { label: '500개씩', value: 'fiveHundredCount' },
  ];

  const handleChange = (selectedRowKeys, selectedRows) => {
    setSelectedTableKeys(selectedRowKeys);
  };

  const handleDeleteModalOpen = (id) => {
    setSelectedProduct(id);
    setIsDeleteModalOpen(true);
  };

  const setSelectDelete = () => {
    alert('선택삭제 준비중');
  };

  const handleDeleteProduct = async () => {
    try {
      const result = await deleteProduct(selectedProduct);
      if (result.status === 200) {
        const newTable = table.filter((item) => {
          return item.id !== selectedProduct;
        });
        console.log(newTable);
        setTable(newTable);
      } else if (result.status === 404) {
        notification.error('이미 삭제되었습니다.');
      }
      setIsDeleteModalOpen(false);
    } catch (e) {
      console.log(e, 'e');
      if (e.response && e.response.status === 404) {
        notification.error('이미 삭제되었습니다.');
      }
      setIsDeleteModalOpen(false);
    }
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
    setSelectedProduct('');
  };

  return (
    <Container>
      <HeaderContainer>
        <Title>상품목록(총 {count}개)</Title>
        <ButtonContainer>
          <BasicSelectBoxStyled
            onChange={(value) => {
              setProductSortSelectState(value);
            }}
            list={SortViewList}
          ></BasicSelectBoxStyled>
          <BasicSelectBoxStyled
            onChange={(value) => {
              setProductCountSelectState(value);
            }}
            list={CountList}
          ></BasicSelectBoxStyled>
          <Button onClick={setExcelDown}>엑셀다운</Button>
        </ButtonContainer>
      </HeaderContainer>
      <HeaderContainer>
        <ButtonContainer>
          <Button onClick={setSelectDelete}>선택삭제</Button>
        </ButtonContainer>
      </HeaderContainer>

      <OriginTable
        scroll={{ x: '250vw', y: 500 }}
        data={table}
        columns={columns}
        selectionType="checkbox"
        onChange={handleChange}
      />
      <BasicModal
        visible={isDeleteModalOpen}
        onOk={handleDeleteProduct}
        onCancel={handleDeleteModalClose}
      >
        정말 삭제하시겠습니까?
      </BasicModal>
    </Container>
  );
};

export default Table;
