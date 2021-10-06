import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Filter from './Filter';
import Table from './Table';
import BoardHeader from 'pages/Admin/components/BoardHeader';
import AppstoreTwoTone from '@ant-design/icons/AppstoreTwoTone';
import { notification } from 'utils/notification';
import { getShipConfirmedList } from 'apis/payment';
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
const DeliveryStatusManage = () => {
  const limit = 16;
  const [allTableDataState, setAllTableDataState] = useState([]);
  const [tableDataState, setTableDataState] = useState([]);
  const [tableCountState, setTableCountState] = useState(0);
  const [productOffset, setProductOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedTableKeysState, setSelectedTableKeysState] = useState([]);
  const [categoryCountArrayState, setCategoryCountArrayState] = useState([]);

  useEffect(() => {
    getApiDeliveryStatusData(productOffset);
  }, [productOffset]);

  useEffect(() => {
    async function fetchAndSetUser() {
      await getApiDeliveryStatusData();
    }
    fetchAndSetUser();
  }, []);

  const getApiDeliveryStatusData = async (offset = 0) => {
    try {
      setLoading(true);
      const result = await getShipConfirmedList(offset);
      const list = result.data.data.list;
      const count = result.data.data.list.length;

      let newResult = list.map((item, index) => {
        let {
          ship_confirmed_at,
          ship_confirmedProcess_at,
          status,
          ship_type,
          ship_pay_type,
          ship_category,
          paid_at,
        } = item;

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
          ship_type: ship_type === 0 ? '택배' : '',
          ship_pay_type: ship_pay_type === 0 ? '선불' : '착불',
          ship_category: ship_category === 0 ? '무료' : '유료',
          ship_confirmed_at: moment(ship_confirmed_at).format(
            DateFormat.Default,
          ),
          ship_confirmedProcess_at: moment(ship_confirmedProcess_at).format(
            DateFormat.Default,
          ),
          paid_at: moment(paid_at).format(DateFormat.Default),
          key: index,
        };
      });

      setAllTableDataState(newResult);
      setTableDataState(newResult);
      setTableCountState(count);
      SetCategoryCount(newResult);
      notification.success('배송현황 정보를 가져왔습니다.');
    } catch (e) {
      notification.error('배송현황 정보를 가져오지 못했습니다.');
    }
    setLoading(false);
  };

  const SetCategoryCount = (tableList) => {
    let all = 0;
    let shipping = 0;
    let deliveryCompleted = 0;

    tableList.forEach((element) => {
      switch (element.status) {
        case '배송중':
          shipping++;
          break;
        case '배송완료':
          deliveryCompleted++;
          break;
        default:
          break;
      }
    });
    all = tableList.length;

    setCategoryCountArrayState([all, shipping, deliveryCompleted]);
  };

  const list = [
    {
      title: '배송중, 배송완료 주문건을 확인해 주세요!',
      itemList: [
        {
          label: '전체',
          value: categoryCountArrayState[0],
          img: <AppstoreTwoToneIcon />,
        },
        {
          label: '배송중',
          value: categoryCountArrayState[1],
          img: <AppstoreTwoToneIcon />,
        },
        {
          label: '배송완료',
          value: categoryCountArrayState[2],
          img: <AppstoreTwoToneIcon />,
        },
      ],
    },
  ];

  const handleTableChange = (pagination) => {
    setProductOffset(pagination.current - 1);
  };

  const handleCategoryBtn = (value) => {
    let data = allTableDataState;
    if (value !== '전체') {
      data = allTableDataState.filter((item) => {
        return item.status === value;
      });
    }

    setTableDataState(data);
    setTableCountState(data.length);
  };

  return (
    <Container>
      <BoardHeader onClick={handleCategoryBtn} list={list} />
      <Filter getApiDeliveryStatusData={getApiDeliveryStatusData} />
      <Table
        tableData={tableDataState}
        count={tableCountState}
        limit={limit}
        loading={loading}
        handleTableChange={handleTableChange}
      />
    </Container>
  );
};

export default DeliveryStatusManage;
