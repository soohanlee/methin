import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Filter from './Filter';
import Table from './Table';
import BoardHeader from 'pages/Admin/components/BoardHeader';
import AppstoreTwoTone from '@ant-design/icons/AppstoreTwoTone';
import { notification } from 'utils/notification';
import { getPaidWithPaymentConfirmedList } from 'apis/payment';

const Icon = css`
  font-size: 4rem;
  margin-right: 1rem;
`;

const AppstoreTwoToneIcon = styled(AppstoreTwoTone)`
  ${Icon}
`;
// 발주 확인/발송관리
const OrderManage = () => {
  const limit = 16;
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
      const result = await getPaidWithPaymentConfirmedList(offset);
      const list = result.data.data.list;
      const count = result.data.data.list.length;

      let newResult = list.map((item, index) => {
        let { status, ship_pay_type, ship_ship_category } = item;
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

          ship_pay_type: ship_pay_type === 0 ? '선불' : '착불',
          ship_ship_category: ship_ship_category === 0 ? '무료' : '유료',
          key: index,
        };
      });

      setTableDataState(newResult);
      setTableCountState(count);
      SetCategoryCount(newResult);
      notification.success('상품 정보를 가져왔습니다.');
    } catch (e) {
      notification.error('상품 정보를 가져오지 못했습니다.');
      console.log(e);
    }
    setLoading(false);
  };

  const handleClick = (value) => {
    switch (value) {
      case 'todayDelay':
        console.log('todayDelay');
        break;
      case 'preOrderDelay':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
      case 'newOrderDelay':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
      case 'deliveryPreparationDelay':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
      case 'cancleRequest':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
      case 'changeDelivery':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
      case 'autoProcessing':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
      case 'todayStart':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
      case 'prePurchase':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
      case 'newOrder':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
      case 'confirmOrderCheck':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;

      default:
        console.log(`Sorry, we are out of .`);
    }
  };

  const data = [{ value: 1 }, { value: 2 }, { value: 3 }];

  const handleTableChange = (pagination, filter, sort) => {
    setProductOffset(pagination.current - 1);
  };

  const SetCategoryCount = (tableList) => {
    let confirmNewOrder = 0;
    let deliveryPrepare = 0;
    let deliveryCancle = 0;
    let deliveryChange = 0;
    let checkNewOrder = 0;
    let orderConfirm = 0;

    tableList.forEach((element) => {
      switch (element.status) {
        case '신규주문':
          confirmNewOrder++;
          break;
        case '배송준비':
          deliveryPrepare++;
          break;
        case '발송전 취소':
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
      confirmNewOrder,
      deliveryPrepare,
      deliveryCancle,
      deliveryChange,
      checkNewOrder,
      orderConfirm,
    ]);
    console.log(categoryCountArrayState[0]);
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

  return (
    <div>
      <BoardHeader list={list} onClick={handleClick} />
      <Filter getApiDeliveryData={getApiDeliveryData} />
      <Table
        count={tableCountState}
        limit={limit}
        loading={loading}
        handleTableChange={handleTableChange}
        tableData={tableDataState}
      />
    </div>
  );
};

export default OrderManage;
