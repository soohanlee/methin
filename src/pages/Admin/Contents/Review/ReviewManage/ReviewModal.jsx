import styled from 'styled-components';
import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button, Rate } from 'antd';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import TextAreaBox from 'pages/Admin/components/Form/BasicTextArea';

const LabeTextlStyled = styled.div`
  margin-top: ${(props) => props.top};
  margin-bottom: ${(props) => props.bottom};
  background-color: ${(props) => props.color};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
`;
const RateStyled = styled(Rate)`
  margin-bottom: 7px;
`;

const ReviewModal = ({
  title,
  visible,
  onOk,
  width,
  onCancel,
  selectReviewDataState,
}) => {
  const okClick = () => {
    var resultValue = window.confirm(
      '총 1건 중 1개의 주문건을 상품품절 사유로 취소처리 하시겠습니까?\n상품품절 취소처리시 상품 품절처리도 동시 진행되며,\n구매자에게 추가배송비가 청구되지 않습니다.',
    );

    if (resultValue) {
      alert('1건 중 1건의 취소 처리가 완료되었습니다.');
    }
  };
  const renderModal = () => {
    let key = selectReviewDataState ? selectReviewDataState.key : '';
    let grade = selectReviewDataState ? selectReviewDataState.grade : '';
    let titleName = selectReviewDataState ? selectReviewDataState.title : '';
    let id = selectReviewDataState ? selectReviewDataState.id : '';
    let product_id = selectReviewDataState
      ? selectReviewDataState.product_id
      : '';
    let body = selectReviewDataState ? selectReviewDataState.body : '';
    return (
      <>
        <Modal
          title={title}
          centered
          visible={visible}
          onOk={() => {
            onOk();
            okClick();
          }}
          onCancel={onCancel}
          width={width}
          footer={[
            <Button key="back" onClick={onCancel}>
              닫기
            </Button>,
          ]}
        >
          <LabeTextlStyled bottom="7px">리뷰 글번호 : {key} </LabeTextlStyled>
          <RateStyled disabled value={grade} />
          <LabeTextlStyled top="7px" bottom="7px">
            패키지 : {titleName}
          </LabeTextlStyled>
          <LabeTextlStyled top="7px" bottom="7px">
            상품주문번호 : {id}
          </LabeTextlStyled>
          <LabeTextlStyled top="7px" bottom="7px">
            상품명 : {product_id}
          </LabeTextlStyled>
          <LabeTextlStyled
            padding="10px"
            height="8rem"
            color="#EEEEEE"
            top="20px"
            bottom="20px"
          >
            리뷰 : {body}
          </LabeTextlStyled>
          <LabeTextlStyled top="7px" bottom="7px">
            판매자답글
          </LabeTextlStyled>
          <TextAreaBox label="반복적인 답글이 아닌 정성스러운 답글을 남겨주세요. 낮은 평점의 리뷰에도 귀 기울여 진심을 담아 구매자와 소통해주시면 스토어만족도가 높아집니다.^^" />
          <BasicButton label="리뷰 신고" />
          <BasicButton label="답글 등록" />
        </Modal>
      </>
    );
  };
  return <>{renderModal()}</>;
};
export default ReviewModal;
