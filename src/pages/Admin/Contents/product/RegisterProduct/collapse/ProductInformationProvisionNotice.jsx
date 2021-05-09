import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

import CustomCollapse from 'pages/Admin/components/Collapse';
import LabelContents from 'pages/Admin/components/Label/LabelContents';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';

const { TextArea } = Input;

const SelectBox = styled(BasicSelectBox)`
  margin-right: 1rem;
`;

const ProductInfoContainer = styled.div`
  padding: 2rem 0;
  border-bottom: 0.1rem solid #dedede;
`;

const InfoTitle = styled.div``;

const ProductInformationProvisionNotice = () => {
  const handleProductListChange = (value) => {
    console.log(value);
  };

  return (
    <CustomCollapse header="상품정보제공고시" extra={'뭔가옴'}>
      <LabelContents title="상품군">
        <SelectBox list={productList} onChange={handleProductListChange} />
      </LabelContents>
      <LabelContents title="종류">
        <Input />
      </LabelContents>
      <LabelContents title="소재">
        <Input />
      </LabelContents>

      <LabelContents title="취급시 주의사항">
        <Input />
      </LabelContents>
      <LabelContents title="품질보증기준">
        <Input />
      </LabelContents>
      <LabelContents title="AS 책임자와 전화번호">
        <Input />
      </LabelContents>
      <ProductInfoContainer>
        <InfoTitle>
          제품하자·오배송 등에 따른 청약철회 등의 경우 청약철회 등을 할 수 있는
          기간 및 통신판매업자가 부담하는 반품비용 등에 관한 정보
        </InfoTitle>
        <TextArea
          defaultValue={
            '전자상거래등에서의소비자보호에관한법률 등에 의한 제품의 하자 또는 오배송 등으로 인한 청약철회의 경우에는 상품 수령 후 3개월 이내, 그 사실을 안 날 또는 알 수 있었던 날로부터 30일 이내에 청약철회를 할 수 있으며, 반품 비용은 통신판매업자가 부담합니다.'
          }
        />
      </ProductInfoContainer>
      <ProductInfoContainer>
        <InfoTitle>
          제품하자가 아닌 소비자의 단순변심, 착오구매에 따른 청약철회등이
          불가능한 경우 그 구체적 사유와 근거
        </InfoTitle>
        <TextArea
          defaultValue={
            '전자상거래 등에서의 소비자보호에 관한 법률 등에 의한 청약철회 제한 사유에 해당하는 경우 및 기타 객관적으로 이에 준하는 것으로 인정되는 경우 청약철회가 제한될 수 있습니다.'
          }
        />
      </ProductInfoContainer>
      <ProductInfoContainer>
        <InfoTitle>재화등의 교환·반품·보증 조건 및 품질보증기준</InfoTitle>
        <TextArea
          defaultValue={
            '소비자분쟁해결기준(공정거래위원회 고시) 및 관계법령에 따릅니다.'
          }
        />
      </ProductInfoContainer>
      <ProductInfoContainer>
        <InfoTitle>
          대금을 환불받기 위한 방법과 환불이 지연될 경우 지연에 따른 배상금을
          지급받을 수 있다는 사실 및 배상금 지급의 구체적 조건 및 절차
        </InfoTitle>
        <TextArea
          defaultValue={
            '주문취소 및 대금의 환불은 네이버페이 마이페이지에서 신청할 수 있으며, 전자상거래 등에서의 소비자보호에 관한 법률에 따라 소비자의 청약철회 후 판매자가 재화 등을 반환 받은 날로부터 3영업일 이내에 지급받은 대금의 환급을 정당한 사유 없이 지연하는 때에는 소비자는 지연기간에 대해서 연 20%의 지연배상금을 판매자에게 청구할 수 있습니다.'
          }
        />
      </ProductInfoContainer>
      <ProductInfoContainer>
        <InfoTitle>
          소비자피해보상의 처리, 재화등에 대한 불만 처리 및 소비자와 사업자
          사이의 분쟁처리에 관한 사항
        </InfoTitle>
        <TextArea
          defaultValue={
            '소비자분쟁해결기준(공정거래위원회 고시) 및 관계법령에 따릅니다.'
          }
        />
      </ProductInfoContainer>
    </CustomCollapse>
  );
};

export default ProductInformationProvisionNotice;

const productList = [{ label: '식품', value: 'food' }];
