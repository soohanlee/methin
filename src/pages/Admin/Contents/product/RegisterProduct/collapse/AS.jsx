import React, { useState } from 'react';
import styled from 'styled-components';

import { Input as OriginInput, Radio, Select, Checkbox, text } from 'antd';
import CustomCollapse from 'compononets/Collapse';
import LabelContents from 'compononets/Label/LabelContents';

const Input = styled(OriginInput)`
  max-width: 300px;
`;

const { TextArea } = Input;

const AS = () => {
  const [phoneNumber, setPhoneNmuber] = useState('');
  const [info, setInfo] = useState(
    '전화 보다는 메일 혹은 채널톡을 통해 문의하시는게 빠른 답변이 가능합니다!',
  );
  const [specialMatters, setSpecialMatters] = useState();
  return (
    <CustomCollapse header="AS, 특이사항" extra={'뭔가옴'}>
      <LabelContents title="A/S전화번호">
        <Input
          onChange={(e) => setPhoneNmuber(e.target.value)}
          value={phoneNumber}
          placeholder="전화번호 입력 - 제외"
        />
      </LabelContents>

      <LabelContents title="A/S안내">
        <TextArea
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          placeholder="입력해주세요"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </LabelContents>

      <LabelContents title="판매자 특이사항">
        <TextArea
          value={specialMatters}
          onChange={(e) => setSpecialMatters(e.target.value)}
          placeholder="청약철회, 배송기간 및 방법, 교환/반품의 보증 및 추가비용, 판매일시/판매지역/판매수량/인도지역 등과 관련해서 특이사항이 있는 경우, 해외배송상품인 경우 입력"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </LabelContents>
    </CustomCollapse>
  );
};

export default AS;
