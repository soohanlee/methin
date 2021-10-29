import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Filter from './Filter';
import Table from './Table';
import BoardHeader from 'pages/Admin/components/BoardHeader';
import AppstoreTwoTone from '@ant-design/icons/AppstoreTwoTone';
import { notification } from 'utils/notification';
import { getPaidWithPaymentConfirmedList } from 'apis/payment';
import moment from 'moment';
import { DateFormat } from 'configs/config';
const Icon = css`
  font-size: 4rem;
  margin-right: 1rem;
`;

const AppstoreTwoToneIcon = styled(AppstoreTwoTone)`
  ${Icon}
`;
// 발주 확인/발송관리
const OrderConfirm = () => {
  const limit = 16;
  const [allTableDataState, setAllTableDataState] = useState([]);
  const [tableDataState, setTableDataState] = useState([]);
  const [tableCountState, setTableCountState] = useState(0);
  const [categoryCountArrayState, setCategoryCountArrayState] = useState([]);
  const [productOffset, setProductOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getApiOrderConfirmData(productOffset);
  }, [productOffset]);

  useEffect(() => {
    async function fetchAndSetUser() {
      await getApiOrderConfirmData();
    }
    fetchAndSetUser();
  }, []);

  const getApiOrderConfirmData = async (offset = 0) => {
    try {
      setLoading(true);
      const result = await getPaidWithPaymentConfirmedList(offset);
      const list = result.data.data.list;
      const count = result.data.data.list.length;

      let newResult = list.map((item, index) => {
        let {
          status,
          ship_pay_type,
          ship_category,
          paid_at,
          order_confirmed_at,
          created_at,
          ship_type,
        } = item;
        switch (ship_type) {
          case 0:
            ship_type = '택배,등기,소포';
            break;
          case 1:
            ship_type = '퀵서비스';
            break;
          case 2:
            ship_type = '방문수령';
            break;
          case 3:
            ship_type = '직접전달';
            break;
          default:
            ship_type = '택배,등기,소포';
            break;
        }
        switch (status) {
          case 0:
            status = '신규주문지연';
            break;
          case 1:
            status = '배송준비 지연';
            break;
          case 2:
            status = '발송전 취소요청';
            break;
          case 3:
            status = '발송전 배송지변경';
            break;
          case 4:
            status = '신규주문';
            break;
          case 5:
            status = '발주확인완료';
            break;
          default:
            break;
        }
        return {
          ...item,
          ship_type: ship_type,
          ship_category: ship_category === 0 ? '무료' : '유료',
          ship_pay_type: ship_pay_type === 0 ? '선불' : '착불',
          status: status,
          paid_at: moment(paid_at).format(DateFormat.Default),
          order_confirmed_at: moment(order_confirmed_at).format(
            DateFormat.Default,
          ),
          created_at: moment(created_at).format(DateFormat.Default),
          key: index,
        };
      });

      setAllTableDataState(newResult);
      setTableDataState(newResult);
      setTableCountState(count);
      SetCategoryCount(newResult);
      notification.success('검색 성공');
    } catch (e) {
      notification.error('발송 정보를 가져오지 못했습니다.');
    }
    setLoading(false);
  };

  const categoryTypeClick = (value) => {
    let data = allTableDataState.filter((item) => {
      console.log(item.status);
      console.log(value);
      return item.status === value;
    });
    setTableDataState(data);
    setTableCountState(data.length);
  };

  const SetCategoryCount = (tableList) => {
    let confirmNewOrderWait = 0;
    let deliveryPrepareWait = 0;
    let deliveryCancle = 0;
    let deliveryChange = 0;
    let checkNewOrder = 0;
    let orderConfirm = 0;

    tableList.forEach((element) => {
      switch (element.status) {
        case '신규주문지연':
          confirmNewOrderWait++;
          break;
        case '배송준비 지연':
          deliveryPrepareWait++;
          break;
        case '발송전 취소요청':
          deliveryCancle++;
          break;
        case '발송전 배송지변경':
          deliveryChange++;
          break;
        case '신규주문':
          checkNewOrder++;
          break;
        case '발주확인 완료':
          orderConfirm++;
          break;
        default:
          break;
      }
    });

    setCategoryCountArrayState([
      confirmNewOrderWait,
      deliveryPrepareWait,
      deliveryCancle,
      deliveryChange,
      checkNewOrder,
      orderConfirm,
    ]);
  };

  const list = [
    {
      title: '먼저 확인해주세요!',
      itemList: [
        {
          label: '신규주문 지연',
          value: categoryCountArrayState[0],
          img: <AppstoreTwoToneIcon />,
        },
        {
          label: '배송준비 지연',
          value: categoryCountArrayState[1],
          img: <AppstoreTwoToneIcon />,
        },
        {
          label: '발송전 취소요청',
          value: categoryCountArrayState[2],
          img: <AppstoreTwoToneIcon />,
        },
        {
          label: '발송전 배송지변경',
          value: categoryCountArrayState[3],
          img: <AppstoreTwoToneIcon />,
        },
      ],
    },
    {
      title: '발송처리를 진행해 주세요!',
      itemList: [
        {
          label: '신규주문',
          value: categoryCountArrayState[4],
          img: <AppstoreTwoToneIcon />,
        },
        {
          label: '발주확인 완료',
          value: categoryCountArrayState[5],
          img: <AppstoreTwoToneIcon />,
        },
      ],
    },
  ];

  const handleTableChange = (pagination, filter, sort) => {
    setProductOffset(pagination.current - 1);
  };

  return (
    <div>
      <BoardHeader list={list} onClick={categoryTypeClick} />
      <Filter getApiOrderConfirmData={getApiOrderConfirmData} />
      <Table
        count={tableCountState}
        tableData={tableDataState}
        limit={limit}
        handleTableChange={handleTableChange}
        loading={loading}
      />
    </div>
  );
};

export default OrderConfirm;
