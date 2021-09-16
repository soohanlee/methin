import styled from 'styled-components';
import 'antd/dist/antd.css';
import BasicModal from 'pages/Admin/components/Modal/BasicModal';
import React, { useRef } from 'react';

import { useReactToPrint } from 'react-to-print';

const ContentBox = styled.div``;
const ContentScroll = styled.div`
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
const ContentList = styled.div`
  border: 1px solid #f0f0f0;
  border-bottom: 0px;

  &: last-child {
    border-bottom: 1px solid #f0f0f0;
  }
`;

const ContentTitle = styled.div`
  width: ${(props) => props.width};
  border-right: 1px solid #f0f0f0;
  border-top: 0px;
  &: last-child {
    border-top: 1px solid #f0f0f0;
    border-right: 0px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentPropertyBox = styled.div`
  border-left: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  &: last-child {
    border-bottom: 0px;
  }
  display: flex;
`;

const ContentProperty = styled.div`
  width: ${(props) => props.width};
  height: 7rem;
  border-right: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.fontSize};
  text-align: center;
  padding: 10px;
`;

const OrderSheetPrintModal = ({
  title,
  visible,
  onCancel,
  selectedTableRowsState,
}) => {
  const okClick = () => {
    handlePrint();
  };

  const renderList = () => {
    return selectedTableRowsState.map(
      (
        {
          created_at,
          id,
          recipient_name,
          buyer_name,
          product_name,
          option_name,
          ship_address_main,
          ship_message,
          price,
          count,
          ship_pay_type,
          recipient_phone,
          buyer_phone,
        },
        num,
      ) => {
        return (
          <ContentList>
            <ContentTitle width="4rem">{num}</ContentTitle>
            <ContentTitle>
              <ContentPropertyBox>
                <ContentProperty fontSize="13px" width="15rem">
                  {created_at}
                  <br />
                  <br />
                  {id}
                </ContentProperty>
                <ContentProperty fontSize="13px" width="37.1rem">
                  {product_name}
                  <br />
                  <br />({option_name})
                </ContentProperty>
                <ContentProperty fontSize="13px" width="12rem">
                  {price} 원
                  <br />
                  <br />({count})
                </ContentProperty>
                <ContentProperty fontSize="13px" width="12rem">
                  {ship_pay_type}
                </ContentProperty>
              </ContentPropertyBox>
              <ContentPropertyBox>
                <ContentProperty fontSize="13px" width="15rem">
                  {recipient_name}
                  <br />
                  <br />({buyer_name})
                </ContentProperty>
                <ContentProperty fontSize="13px" width="37.1rem">
                  {ship_address_main}
                  <br />
                  <br />({ship_message})
                </ContentProperty>
                <ContentProperty fontSize="13px" width="24rem">
                  {recipient_phone}
                  <br />
                  <br />({buyer_phone})
                </ContentProperty>
              </ContentPropertyBox>
            </ContentTitle>
          </ContentList>
        );
      },
    );
  };

  const getModalHeight = () => {
    return selectedTableRowsState.length <= 3
      ? selectedTableRowsState.length * 170
      : 500;
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <BasicModal
        title={title}
        centered
        visible={visible}
        onOk={okClick}
        onCancel={onCancel}
        width={900}
        bodyStyle={{ overflowY: 'scroll' }}
        okText="인쇄하기"
        cancelText="닫기"
      >
        <ContentBox ref={componentRef}>
          <ContentList>
            <ContentTitle width="4rem">번호</ContentTitle>
            <ContentTitle>
              <ContentPropertyBox>
                <ContentProperty width="15rem">
                  주문일
                  <br />
                  주문번호
                </ContentProperty>
                <ContentProperty width="37.5rem">
                  상품명/옵션
                  <br />
                  (상품주문번호)
                </ContentProperty>
                <ContentProperty width="12rem">
                  상품금액
                  <br />
                  (수량)
                </ContentProperty>
                <ContentProperty width="12rem">배송비형태</ContentProperty>
              </ContentPropertyBox>
              <ContentPropertyBox>
                <ContentProperty width="15rem">
                  수취인
                  <br />
                  (구매자명)
                </ContentProperty>
                <ContentProperty width="37.5rem">
                  배송지 주소
                  <br />
                  (배송메모/배송희망일)
                </ContentProperty>
                <ContentProperty width="24rem">
                  수취인연락처
                  <br />
                  (구매자 연락처)
                </ContentProperty>
              </ContentPropertyBox>
            </ContentTitle>
          </ContentList>
          <ContentScroll height={`${getModalHeight()}px`}>
            {renderList()}
          </ContentScroll>
        </ContentBox>
      </BasicModal>
    </>
  );
};
export default OrderSheetPrintModal;
