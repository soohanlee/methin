import { Modal } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const ContentBox = styled.div``;

const ContentList = styled.div`
  display: flex;
  border: 1px solid #f0f0f0;
`;

const ContentTitle = styled.div`
  width: ${(props) => props.width};
  border-bottom: 1px solid #f0f0f0;
  border-right: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentPropertyBox = styled.div`
  display: flex;
  border-bottom: 1px solid #f0f0f0;
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

const OrderSheetModal = ({ sheetList, title, visible, onCancel }) => {
  const okClick = () => {};

  const renderList = () => {
    return sheetList.map(
      ({ date, productName, price, process, name, adress, phoneNum }, num) => {
        return (
          <ContentList>
            <ContentTitle width="4rem">{num}</ContentTitle>
            <ContentTitle>
              <ContentPropertyBox>
                <ContentProperty fontSize="13px" width="15rem">
                  {date}
                </ContentProperty>
                <ContentProperty fontSize="13px" width="42rem">
                  {productName}
                </ContentProperty>
                <ContentProperty fontSize="13px" width="12rem">
                  {price}
                </ContentProperty>
                <ContentProperty fontSize="13px" width="12rem">
                  {process}
                </ContentProperty>
              </ContentPropertyBox>
              <ContentPropertyBox>
                <ContentProperty fontSize="13px" width="15rem">
                  {name}
                </ContentProperty>
                <ContentProperty fontSize="13px" width="42rem">
                  {adress}
                </ContentProperty>
                <ContentProperty fontSize="13px" width="24rem">
                  {phoneNum}
                </ContentProperty>
              </ContentPropertyBox>
            </ContentTitle>
          </ContentList>
        );
      },
    );
  };

  return (
    <>
      <Modal
        title={title}
        centered
        visible={visible}
        onOk={okClick}
        onCancel={onCancel}
        width={900}
        okText="인쇄하기"
        cancelText="닫기"
      >
        <ContentBox>
          <ContentList>
            <ContentTitle width="4rem">번호</ContentTitle>
            <ContentTitle>
              <ContentPropertyBox>
                <ContentProperty width="15rem">
                  주문일
                  <br />
                  주문번호
                </ContentProperty>
                <ContentProperty width="42rem">
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
                <ContentProperty width="42rem">
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
          {renderList()}
        </ContentBox>
      </Modal>
    </>
  );
};
export default OrderSheetModal;
