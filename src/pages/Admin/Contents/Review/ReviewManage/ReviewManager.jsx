import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import {Table, Button } from 'antd';
import { Rate } from 'antd';
import ReviewModal from 'pages/Admin/Contents/Review/ReviewManage/ReviewModal';

const ReviewManager = () => {
  const [isReviewModal, setReviewModal] = useState();

  useEffect(() => {
  }, []);

  const columns = [
    {
      title: '주문번호',
      dataIndex: 'id',
    },
    {
      title: '상품번호',
      dataIndex: 'product_id',
    },
    {
      title: '사용자번호',
      dataIndex: 'user_id',
    },
    {
      title: '평점',
      dataIndex: "grade",
      render: (grade) =>  <Rate disabled defaultValue={grade} />,
    },
    {
      title: '리뷰제목',
      dataIndex: 'title',
    },
    {
      title: '리뷰내용',
      dataIndex: 'body',
      render: (body) =>  <div onClick = {()=>{setReviewModal(true)}} >{body}</div>,
    },
    {
      title: '리뷰날짜',
      dataIndex: 'created_at',
    },
    {
      title: '이메일',
      dataIndex: 'email',
    },
    {
      title: '이름',
      dataIndex: 'nickname',
    },
    {
      title: '전화번호',
      dataIndex: 'phone',
    },
  ];

  return <><ReviewModal
  title="리뷰 상세보기"
  centered
  visible={isReviewModal}
  onOk={() => {
    setReviewModal(false);
  }}
  onCancel={() => {
    setReviewModal(false);
  }}
  width={1000}
  okText="확인"
  cancelText="취소"
></ReviewModal><Table columns = {columns}></Table></>;
};

export default ReviewManager;

