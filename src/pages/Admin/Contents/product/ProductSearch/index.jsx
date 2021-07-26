import 'antd/dist/antd.css';
import Title from './Title';
import Category from './Category';
import Setting from './Setting';
import Table from './Table';
import { useEffect, useState } from 'react';
import { notification } from 'utils/notification';
import { getProductList, getProductDetail } from 'apis/product';

const ProductSearch = () => {
  const limit = 16;
  const [tableDataState, setTableDataState] = useState([]);
  const [tableCountState, setTableCountState] = useState(0);
  const [categoryCountArrayState, setCategoryCountArrayState] = useState([]);
  const [productOffset,setProductOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    getApiProductData(productOffset);
  },[productOffset]);

  useEffect(() => {
    async function fetchAndSetUser() {
      await getApiProductData();
    }
    fetchAndSetUser();
  }, []);

  const getApiProductData = async (offset=0) => {
    try {
      setLoading(true);
      const result = await getProductList(offset);
      console.log('result', result);
      const list = result.data.data.list;
      const count = result.data.data.count;

      const newResult = list.map((item) => {
        let { ship_category, ship_pay_type, status, preview_status } = item;
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
        };
      });

      setTableDataState(newResult);
      setTableCountState(count);
      CategoryCount(newResult);
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

  const CategoryCount = (tableList) => {
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
  }
  return (
    <>
      <Title />
      <Category
        tableList={tableDataState}
        categoryCountArray={categoryCountArrayState}
      />
      <Setting
        getApiProductData={getApiProductData}
        getSearchProductData={getSearchProductData}
      />

      <Table
        setTableDataState={setTableDataState}
        count={tableCountState}
        tableList={tableDataState}
        limit={limit}
        loading ={loading}
        handleTableChange={handleTableChange}
      />
    </>
  );
};

export default ProductSearch;
