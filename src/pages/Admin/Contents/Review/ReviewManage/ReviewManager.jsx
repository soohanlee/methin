import React, { useState, useEffect } from 'react';
import { Rate } from 'antd';
import ReviewModal from './ReviewModal';
import { getProductReview } from 'apis/product';
import moment from 'moment';
import { DateFormat } from 'configs/config';
import { notification } from 'utils/notification';
import BasicTable from 'pages/Admin/components/Table/Table';
import styled from 'styled-components';

const ATextStyled = styled.a`
  color: #3698f3;
`;

const ReviewManager = () => {
  const [isReviewModalState, setReviewModalState] = useState(false);
  const [selectReviewDataState, setSelectReviewDataState] = useState();

  const limit = 16;
  const [tableDataState, setTableDataState] = useState([]);
  const [tableCountState, setTableCountState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productOffset, setProductOffset] = useState(0);
  const [selectedTableKeysState, setSelectedTableKeysState] = useState([]);
  const [selectedTableRowsState, setSelectedTableRowsState] = useState([]);

  useEffect(() => {
    getApiReviewData(productOffset);
  }, [productOffset]);

  useEffect(() => {
    async function fetchAndSetUser() {
      await getApiReviewData();
    }
    fetchAndSetUser();
  }, []);

  const getApiReviewData = async (offset = 0) => {
    try {
      setLoading(true);
      const result = await getProductReview(offset);
      const list = result.data.data.list;
      const count = result.data.data.list.length;

      let newResult = list.map((item, index) => {
        let { created_at } = item;

        return {
          ...item,
          created_at: moment(created_at).format(DateFormat.Default),
          key: index,
        };
      });

      newResult = [
        {
          id: '14143124',
          product_id: '품목',
          user_id: 'kog3312',
          grade: 3,
          title: '타이틀',
          body: '바디입니다.',
          created_at: '2019-05-05',
          email: 'kog3312@famoz.co.kr',
          nickname: '화찌',
          phone: '010-9479-1485',
          key: 0,
        },
        {
          id: '14143124',
          product_id: '품목',
          user_id: 'kog3312',
          grade: 3,
          title: '타이틀',
          body: '바디입니다.',
          created_at: '2019-05-05',
          email: 'kog3312@famoz.co.kr',
          nickname: '화찌',
          phone: '010-9479-1485',
          key: 1,
        },
        {
          id: '14143124',
          product_id: '품목',
          user_id: 'kog3312',
          grade: 3,
          title: '타이틀',
          body: '바디입니다.',
          created_at: '2019-05-05',
          email: 'kog3312@famoz.co.kr',
          nickname: '화찌',
          phone: '010-9479-1485',
          key: 2,
        },
        {
          id: '14143124',
          product_id: '품목',
          user_id: 'kog3312',
          grade: 3,
          title: '타이틀',
          body: '바디입니다.',
          created_at: '2019-05-05',
          email: 'kog3312@famoz.co.kr',
          nickname: '화찌',
          phone: '010-9479-1485',
          key: 3,
        },
        {
          id: '14143124',
          product_id: '품목',
          user_id: 'kog3312',
          grade: 3,
          title: '타이틀',
          body: '바디입니다.',
          created_at: '2019-05-05',
          email: 'kog3312@famoz.co.kr',
          nickname: '화찌',
          phone: '010-9479-1485',
          key: 4,
        },
        {
          id: '14143124',
          product_id: '품목',
          user_id: 'kog3312',
          grade: 3,
          title: '타이틀',
          body: '바디입니다.',
          created_at: '2019-05-05',
          email: 'kog3312@famoz.co.kr',
          nickname: '화찌',
          phone: '010-9479-1485',
          key: 5,
        },
        {
          id: '14143124',
          product_id: '품목',
          user_id: 'kog3312',
          grade: 3,
          title: '타이틀',
          body: '바디입니다.',
          created_at: '2019-05-05',
          email: 'kog3312@famoz.co.kr',
          nickname: '화찌',
          phone: '010-9479-1485',
          key: 6,
        },
        {
          id: '14143124',
          product_id: '품목',
          user_id: 'kog3312',
          grade: 3,
          title: '타이틀',
          body: '바디입니다.',
          created_at: '2019-05-05',
          email: 'kog3312@famoz.co.kr',
          nickname: '화찌',
          phone: '010-9479-1485',
          key: 7,
        },
        {
          id: '14143124',
          product_id: '품목',
          user_id: 'kog3312',
          grade: 3,
          title: '타이틀',
          body: '바디입니다.',
          created_at: '2019-05-05',
          email: 'kog3312@famoz.co.kr',
          nickname: '화찌',
          phone: '010-9479-1485',
          key: 8,
        },
        {
          id: '14143124',
          product_id: '품목',
          user_id: 'kog3312',
          grade: 3,
          title: '타이틀',
          body: '바디입니다.',
          created_at: '2019-05-05',
          email: 'kog3312@famoz.co.kr',
          nickname: '화찌',
          phone: '010-9479-1485',
          key: 9,
        },
        {
          id: '14143124',
          product_id: '품목',
          user_id: 'kog3312',
          grade: 3,
          title: '타이틀',
          body: '바디입니다.',
          created_at: '2019-05-05',
          email: 'kog3312@famoz.co.kr',
          nickname: '화찌',
          phone: '010-9479-1485',
          key: 10,
        },
        {
          id: '14143124',
          product_id: '품목',
          user_id: 'kog3312',
          grade: 3,
          title: '타이틀',
          body: '바디입니다.',
          created_at: '2019-05-05',
          email: 'kog3312@famoz.co.kr',
          nickname: '화찌',
          phone: '010-9479-1485',
          key: 11,
        },
        {
          id: '14143124',
          product_id: '품목',
          user_id: 'kog3312',
          grade: 3,
          title: '타이틀',
          body: '바디입니다.',
          created_at: '2019-05-05',
          email: 'kog3312@famoz.co.kr',
          nickname: '화찌',
          phone: '010-9479-1485',
          key: 12,
        },
      ];

      setTableDataState(newResult);
      setTableCountState(count);
      notification.success('검색성공');
      console.log(newResult);
    } catch (e) {
      notification.error('배송 정보를 가져오지 못했습니다.');
    }
    setLoading(false);
  };

  useEffect(() => {}, []);

  const columns = [
    {
      title: '주문번호',
      dataIndex: 'id',
      align: 'center',
      width: 150,
    },
    {
      title: '상품번호',
      dataIndex: 'product_id',
      align: 'center',
      width: 130,
    },
    {
      title: '사용자번호',
      dataIndex: 'user_id',
      align: 'center',
      width: 130,
    },
    {
      title: '평점',
      dataIndex: 'grade',
      render: (grade) => <Rate disabled value={grade} />,
      align: 'center',
      width: 150,
    },
    {
      title: '리뷰제목',
      dataIndex: 'title',
      align: 'center',
      width: 150,
    },
    {
      title: '리뷰내용',
      dataIndex: 'body',
      render: (body, record) => (
        <ATextStyled
          onClick={() => {
            console.log(record);
            setReviewModalState(true);
            setSelectReviewDataState(record);
          }}
        >
          {body}
        </ATextStyled>
      ),
      align: 'center',
      width: 200,
    },
    {
      title: '리뷰날짜',
      dataIndex: 'created_at',
      align: 'center',
      width: 200,
    },
    {
      title: '이메일',
      dataIndex: 'email',
      align: 'center',
    },
    {
      title: '이름',
      dataIndex: 'nickname',
      align: 'center',
      width: 130,
    },
    {
      title: '전화번호',
      dataIndex: 'phone',
      align: 'center',
      width: 200,
    },
  ];

  const handleTableChange = (pagination, filter, sort) => {
    setProductOffset(pagination.current - 1);
  };

  const handleChange = (selectedRowKeys, selectedRows) => {
    console.log('selectedRowKeys', selectedRowKeys);
    setSelectedTableKeysState(selectedRowKeys);
  };

  return (
    <>
      <ReviewModal
        title="리뷰 상세보기"
        centered
        visible={isReviewModalState}
        selectReviewDataState={selectReviewDataState}
        onOk={() => {
          setReviewModalState(false);
        }}
        onCancel={() => {
          setReviewModalState(false);
        }}
        width={1000}
        okText="확인"
        cancelText="취소"
      ></ReviewModal>
      <BasicTable
        scroll={{ x: 'max-content', y: '40vw' }}
        data={tableDataState}
        columns={columns}
        selectionType="checkbox"
        onChange={handleChange}
        onTableChange={handleTableChange}
        loading={loading}
        total={tableCountState}
        pageSize={limit}
      ></BasicTable>
    </>
  );
};

export default ReviewManager;
