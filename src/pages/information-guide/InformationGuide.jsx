import React from 'react';
import { Collapse } from 'antd';
import styled from 'styled-components';

const { Panel } = Collapse;

const Container = styled.div`
  padding: 10rem; ;
`;

const Title = styled.div`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
`;

const CustomCollapse = styled(Collapse)`
  background: #fff;
  border-left: 0;
  border-right: 0;
  &&& .ant-collapse-header {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  &&& .ant-collapse-arrow {
    top: calc(50% - 6px);
    padding: 0;
  }
`;

const SubLabel = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.TEXT_INFORMATION};
  padding-bottom: 1rem;
`;

const InformationGuide = () => {
  return (
    <Container>
      <Title>이용안내</Title>
      <CustomCollapse>
        <Panel header="회원 / 혜택">
          미띤에 회원가입을 하시면 가입 즉시 게시판 이용 및 각종 할인 쿠폰과,
          적립금, 이벤트 혜택을 받으실 수 있습니다. 쿠폰과 적립금은 고르인
          하신후 마이페이지에서 확인 하실 수 있습니다.
        </Panel>
        <Panel header="주문 / 결제">
          상품 주문은 장바구니에 상품 담기 {`>`} 회원 혹은 비회원 주문 {`>`}{' '}
          주문서 작성
          {`>`} 결제방법 선택 및 결제 {`>`} 주문 완료로 이루어집니다.
          <SubLabel>
            비회원 주문인 경우 주문번호를 메모해 두시기 바랍니다.
          </SubLabel>
        </Panel>
        <Panel header="배송">
          미띤은 싱싱한 상품을 고객님의 식탁까지 빠르고 안전하게 배달하기 위해
          항상 노력합니다.
        </Panel>
        <Panel header="취소 / 교환 / 환불">
          주문취소는 배송 단계별로 방법이 상이합니다.
          <br /> -[입금확인] 단계 : 마이컬리 {`>`} 주문내역 {`>`} 상세페이지
          에서 직접 취소 가능 <br /> -[입금확인] 이후 단계 : 고객센터로 문의
          받으신 상품의 이상이 있거나 궁금한 사항이 있따면 언제든지 1:1문의
          게시판에 문의해주세요.
        </Panel>
      </CustomCollapse>
    </Container>
  );
};

export default InformationGuide;
