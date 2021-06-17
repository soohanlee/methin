import { Modal,Button } from 'antd';
import 'antd/dist/antd.css';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import TextAreaBox from 'pages/Admin/components/Form/BasicTextArea';
import { Rate } from 'antd';
import styled from 'styled-components';
import React from 'react';


const LabeTextlStyled = styled.div`
margin-top : ${(props) => props.top};
margin-bottom : ${(props) => props.bottom};
background-Color : ${(props) => props.color};
height :${(props) => props.height};
padding : ${(props) => props.padding};
`;
const RateStyled = styled(Rate)`
margin-bottom : 7px;
`;

const ReviewModal = (property) => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const okClick = () => {
    var resultValue = window.confirm(
      '총 1건 중 1개의 주문건을 상품품절 사유로 취소처리 하시겠습니까?\n상품품절 취소처리시 상품 품절처리도 동시 진행되며,\n구매자에게 추가배송비가 청구되지 않습니다.',
    );

    if (resultValue) {
      alert('1건 중 1건의 취소 처리가 완료되었습니다.');
    }
  };

  return (
    <>
      <Modal
        title={property.title}
        centered
        visible={property.visible}
        onOk={() => {
          property.onOk();
          okClick();
        }}
        onCancel={property.onCancel}
        width={property.width}

        footer={[
          <Button key="back" onClick = {property.onCancel}>
            닫기
          </Button>
        ]}

      >
        <LabeTextlStyled bottom = "7px" >리뷰 글번호 : </LabeTextlStyled>
        <RateStyled disabled defaultValue={2} />
        <LabeTextlStyled top = "7px" bottom = "7px">패키지 : 패키지명</LabeTextlStyled>
        <LabeTextlStyled top = "7px" bottom = "7px">상품주문번호 : 00</LabeTextlStyled>
        <LabeTextlStyled top = "7px" bottom = "7px">상품명 : 00</LabeTextlStyled>
        <LabeTextlStyled padding = "10px" height = "8rem" color = "#EEEEEE" top = "20px" bottom = "20px">리뷰 : 00 </LabeTextlStyled>
        <LabeTextlStyled top = "7px" bottom = "7px">판매자답글</LabeTextlStyled>
        <TextAreaBox />
        <BasicButton label = "리뷰 신고" />
        <BasicButton label = "답글 등록" />
      </Modal>
    </>
  );
};
export default ReviewModal;
