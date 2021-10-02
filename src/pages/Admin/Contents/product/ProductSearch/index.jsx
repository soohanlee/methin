import 'antd/dist/antd.css';
import Title from './Title';
import Category from './Category';
import Setting from './Setting';
import Table from './Table';
import { useEffect, useState } from 'react';
import { notification } from 'utils/notification';
import { getProductList, getProductDetail } from 'apis/product';
import moment from 'moment';
import { DateFormat } from 'configs/config';
import BoardHeader from 'pages/Admin/components/BoardHeader';
import AppstoreTwoTone from '@ant-design/icons/AppstoreTwoTone';
import styled, { css } from 'styled-components';
const Icon = css`
  font-size: 4rem;
  margin-right: 1rem;
`;

const AppstoreTwoToneIcon = styled(AppstoreTwoTone)`
  ${Icon}
`;

const ProductSearch = () => {
  const [allTableDataState, setAllTableDataState] = useState([]);
  const [tableDataState, setTableDataState] = useState([]);
  const [tableCountState, setTableCountState] = useState(0);
  const [categoryCountArrayState, setCategoryCountArrayState] = useState([]);
  const [productOffset, setProductOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getApiProductData(productOffset);
  }, [productOffset]);

  useEffect(() => {
    async function fetchAndSetUser() {
      await getApiProductData();
    }
    fetchAndSetUser();
  }, []);

  const getApiProductData = async (offset = 0) => {
    try {
      setLoading(true);
      const result = await getProductList(offset);
      const list = result.data.data.list;
      const count = result.data.data.list.length;

      const newResult = list.map((item, index) => {
        let {
          ship_category,
          ship_pay_type,
          status,
          preview_status,
          sales_start_date,
          sales_end_date,
          created_at,
          updated_at,
        } = item;
        if (status === 0) {
          status = '판매준비';
        } else if (status === 1) {
          status = '판매중';
        } else {
          status = '판매종료';
        }
        return {
          ...item,
          ship_category: ship_category === 0 ? '무료' : '유료',
          ship_pay_type: ship_pay_type === 0 ? '선불' : '착불',
          status: status,
          preview_status: preview_status === 0 ? 'NO' : 'YES',
          sales_start_date: moment(sales_start_date).format(DateFormat.Default),
          sales_end_date: moment(sales_end_date).format(DateFormat.Default),
          created_at: moment(created_at).format(DateFormat.Default),
          updated_at: moment(updated_at).format(DateFormat.Default),
          key: index,
        };
      });

      console.log(newResult);

      setAllTableDataState(newResult);
      setTableDataState(newResult);
      setTableCountState(count);
      SetCategoryCount(newResult);
      notification.success('상품 정보를 가져왔습니다.');
    } catch (e) {
      console.log('e', e);
      notification.error('상품 정보를 가져오지 못했습니다.');
    }
    setLoading(false);
  };

  const getSearchProductData = async (id) => {
    try {
      const result = await getProductDetail(id);
      const resultArray = [result.data.data];
      setTableDataState(resultArray);
      notification.success('검색 성공');
    } catch (e) {
      notification.error('검색 정보를 가져오지 못했습니다.');
    }
  };

  const SetCategoryCount = (tableList) => {
    let all = 0;
    let ready = 0;
    let onSale = 0;
    let soldOut = 0;
    let stop = 0;
    let end = 0;

    tableList.forEach((element) => {
      switch (element.status) {
        case '판매준비':
          ready++;
          break;
        case '판매중':
          onSale++;
          break;
        case '품절':
          soldOut++;
          break;
        case '판매중지':
          stop++;
          break;
        case '판매종료':
          end++;
          break;
        default:
          break;
      }
    });
    all = tableList.length;
    setCategoryCountArrayState([all, ready, onSale, soldOut, stop, end]);
  };

  const handleTableChange = (pagination, filter, sort) => {
    setProductOffset(pagination.current - 1);
  };

  const list = [
    {
      itemList: [
        {
          label: '전체',
          value: categoryCountArrayState[0],
          img: <AppstoreTwoToneIcon />,
        },
        {
          label: '판매준비',
          value: categoryCountArrayState[1],
          img: <AppstoreTwoToneIcon />,
        },
        {
          label: '판매중',
          value: categoryCountArrayState[2],
          img: <AppstoreTwoToneIcon />,
        },
        {
          label: '품절',
          value: categoryCountArrayState[3],
          img: <AppstoreTwoToneIcon />,
        },
        {
          label: '판매중지',
          value: categoryCountArrayState[4],
          img: <AppstoreTwoToneIcon />,
        },
        {
          label: '판매종료',
          value: categoryCountArrayState[5],
          img: <AppstoreTwoToneIcon />,
        },
      ],
    },
  ];

  const categoryTypeClick = (value) => {
    let data = allTableDataState.filter((item) => {
      return item.status === value;
    });
    setTableDataState(data);
    setTableCountState(data.length);
  };

  return (
    <>
      <Title />
      <BoardHeader onClick={categoryTypeClick} list={list} />

      <Setting
        getApiProductData={getApiProductData}
        getSearchProductData={getSearchProductData}
      />

      <Table
        setTableDataState={setTableDataState}
        count={tableCountState}
        tableList={tableDataState}
        loading={loading}
        handleTableChange={handleTableChange}
        getApiProductData={getApiProductData}
      />
    </>
  );
};

export default ProductSearch;
