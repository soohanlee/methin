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
          ship_pay_type,
          ship_ship_category,
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
          ship_pay_type: ship_pay_type === 0 ? '선불' : '착불',
          ship_ship_category: ship_ship_category === 0 ? '무료' : '유료',
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

      newResult = [
        {
          id: 0,
          ship_confirmedProcess_at: '2019-05-05',
          status: '배송중',
          ship_type: '택배',
          ship_company_name: 'kog3312',
          ship_number: '24135243534635',
          ship_confirmed_at: '2019-05-05',
          buyer_name: '김범희',
          buyer_id: 128301274332,
          recipient_name: '김태훈',
          product_id: '231',
          product_name: '생리대',
          option_name: '뭐들어가는지몰라',
          count: '321',
          price: '321322',
          option_add_price: 32312,
          total_price: 312411,
          paid_at: '2019-05-05',
          ship_pay_type: '신용카드',
          ship_category: '택배',
          total_ship_amount: '3000',
          ship_add_amount: '3000',
          recipient_phone: '000-0000-0000',
          ship_address_main: '서울특별시 마포구 월드컵로7길 57-5 201호',
          buyer_phone: '010-8691-0169',
          ship_zip_code: '07263',
          key: 0,
        },
        {
          id: 0,
          ship_confirmedProcess_at: '2019-05-05',
          status: '배송중',
          ship_type: '택배',
          ship_company_name: 'kog3312',
          ship_number: '24135243534635',
          ship_confirmed_at: '2019-05-05',
          buyer_name: '김범희',
          buyer_id: 128301274332,
          recipient_name: '김태훈',
          product_id: '231',
          product_name: '생리대',
          option_name: '뭐들어가는지몰라',
          count: '321',
          price: '321322',
          option_add_price: 32312,
          total_price: 312411,
          paid_at: '2019-05-05',
          ship_pay_type: '신용카드',
          ship_category: '택배',
          total_ship_amount: '3000',
          ship_add_amount: '3000',
          recipient_phone: '000-0000-0000',
          ship_address_main: '서울특별시 마포구 월드컵로7길 57-5 201호',
          buyer_phone: '010-8691-0169',
          ship_zip_code: '07263',
          key: 1,
        },

        {
          id: 0,
          ship_confirmedProcess_at: '2019-05-05',
          status: '배송중',
          ship_type: '택배',
          ship_company_name: 'kog3312',
          ship_number: '24135243534635',
          ship_confirmed_at: '2019-05-05',
          buyer_name: '김범희',
          buyer_id: 128301274332,
          recipient_name: '김태훈',
          product_id: '231',
          product_name: '생리대',
          option_name: '뭐들어가는지몰라',
          count: '321',
          price: '321322',
          option_add_price: 32312,
          total_price: 312411,
          paid_at: '2019-05-05',
          ship_pay_type: '신용카드',
          ship_category: '택배',
          total_ship_amount: '3000',
          ship_add_amount: '3000',
          recipient_phone: '000-0000-0000',
          ship_address_main: '서울특별시 마포구 월드컵로7길 57-5 201호',
          buyer_phone: '010-8691-0169',
          ship_zip_code: '07263',
          key: 2,
        },

        {
          id: 0,
          ship_confirmedProcess_at: '2019-05-05',
          status: '배송중',
          ship_type: '택배',
          ship_company_name: 'kog3312',
          ship_number: '24135243534635',
          ship_confirmed_at: '2019-05-05',
          buyer_name: '김범희',
          buyer_id: 128301274332,
          recipient_name: '김태훈',
          product_id: '231',
          product_name: '생리대',
          option_name: '뭐들어가는지몰라',
          count: '321',
          price: '321322',
          option_add_price: 32312,
          total_price: 312411,
          paid_at: '2019-05-05',
          ship_pay_type: '신용카드',
          ship_category: '택배',
          total_ship_amount: '3000',
          ship_add_amount: '3000',
          recipient_phone: '000-0000-0000',
          ship_address_main: '서울특별시 마포구 월드컵로7길 57-5 201호',
          buyer_phone: '010-8691-0169',
          ship_zip_code: '07263',
          key: 3,
        },
      ];

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
    setCategoryCountArrayState([shipping, deliveryCompleted]);
  };

  const list = [
    {
      title: '배송중, 배송완료 주문건을 확인해 주세요!',
      itemList: [
        {
          label: '배송중',
          value: categoryCountArrayState[0],
          img: <AppstoreTwoToneIcon />,
        },
        {
          label: '배송완료',
          value: categoryCountArrayState[1],
          img: <AppstoreTwoToneIcon />,
        },
      ],
    },
  ];

  const handleTableChange = (pagination) => {
    setProductOffset(pagination.current - 1);
  };

  const handleCategoryBtn = (e) => {
    alert(e);
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

const list = [
  {
    title: '배송중, 배송완료 주문건을 확인해 주세요!',
    itemList: [
      { label: '배송중', value: 'todayStart', img: <AppstoreTwoToneIcon /> },
      { label: '배송완료', value: 'prePurchase', img: <AppstoreTwoToneIcon /> },
    ],
  },
];
