import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Filter from './Filter';
import Table from './Table';
import BoardHeader from 'pages/Admin/components/BoardHeader';
import AppstoreTwoTone from '@ant-design/icons/AppstoreTwoTone';
import { notification } from 'utils/notification';
import { getCanceledPaymentList } from 'apis/payment';
import moment from 'moment';
import { DateFormat } from 'configs/config';

const Icon = css`
  font-size: 4rem;
  margin-right: 1rem;
`;

const AppstoreTwoToneIcon = styled(AppstoreTwoTone)`
  ${Icon}
`;

const Container = styled.div``;

// 배송 현황 관리
const OrderCancel = ({ shipCompanyDataState }) => {
  const limit = 16;
  const [allTableDataState, setAllTableDataState] = useState([]);
  const [tableDataState, setTableDataState] = useState([]);
  const [tableCountState, setTableCountState] = useState(0);
  const [productOffset, setProductOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [categoryCountArrayState, setCategoryCountArrayState] = useState([]);

  useEffect(() => {
    getApiDeliveryData(productOffset);
  }, [productOffset]);

  useEffect(() => {
    async function fetchAndSetUser() {
      await getApiDeliveryData();
    }
    fetchAndSetUser();
  }, []);

  const getApiDeliveryData = async (offset = 0) => {
    try {
      setLoading(true);
      const result = await getCanceledPaymentList(offset);
      const list = result.data.data.list;
      const count = result.data.data.list.length;

      let newResult = list.map((item, index) => {
        let { status, cancel_status, paid_at, canceled_at } = item;
        switch (status) {
          case 0:
            status = '결제대기';
            break;
          case 1:
            status = '결제완료';
            break;
          case 2:
            status = '상품준비';
            break;
          case 3:
            status = '배송중';
            break;
          case 4:
            status = '배송완료';
            break;
          case 5:
            status = '취소완료';
            break;
          case 6:
            status = '반품완료';
            break;
        }
        return {
          ...item,
          status: status,
          cancel_status: cancel_status === 0 ? '취소요청' : '취소완료',
          paid_at: moment(paid_at).format(DateFormat.Default),
          canceled_at: moment(canceled_at).format(DateFormat.Default),
          key: index,
        };
      });
      setAllTableDataState(newResult);
      setTableDataState(newResult);
      setTableCountState(count);
      SetCategoryCount(newResult);
      notification.success('검색성공');
    } catch (e) {
      notification.error('배송취소 정보를 가져오지 못했습니다.');
    }
    setLoading(false);
  };

  const SetCategoryCount = (tableList) => {
    let cancelRequest = 0;
    let cancelSuccess = 0;

    tableList.forEach((element) => {
      switch (element.cancel_status) {
        case '취소요청':
          cancelRequest++;
          break;
        case '취소완료':
          cancelSuccess++;
          break;

        default:
          break;
      }
    });
    setCategoryCountArrayState([cancelRequest, cancelSuccess]);
  };

  const list = [
    {
      title: '취소진행중, 완료 주문건을 확인해 주세요!',
      itemList: [
        {
          label: '취소요청',
          value: categoryCountArrayState[0],
          img: <AppstoreTwoToneIcon />,
        },
        {
          label: '취소완료',
          value: categoryCountArrayState[1],
          img: <AppstoreTwoToneIcon />,
        },
      ],
    },
  ];

  const handleTableChange = (pagination, filter, sort) => {
    setProductOffset(pagination.current - 1);
  };

  const categoryTypeClick = (value) => {
    let data = allTableDataState.filter((item) => {
      return item.cancel_status === value;
    });
    setTableDataState(data);
    setTableCountState(data.length);
  };

  return (
    <Container>
      <BoardHeader onClick={categoryTypeClick} list={list} />
      <Filter getApiDeliveryData={getApiDeliveryData} />
      <Table
        count={tableCountState}
        tableData={tableDataState}
        limit={limit}
        handleTableChange={handleTableChange}
        loading={loading}
        shipCompanyDataState={shipCompanyDataState}
        getApiDeliveryData={getApiDeliveryData}
      />
    </Container>
  );
};

export default OrderCancel;
