import { useState, useRef } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Select, Modal, Radio } from 'antd';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import { CSVLink } from 'react-csv';

const ContainerStyled = styled.div`
  padding: 2rem;
  padding-bottom: 0px;
  border: 1px solid #f0f0f0;
`;

const SubContainerStyled = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
`;

const TitleTextStyled = styled.div`
  margin-right: 3rem;
`;

const BasicTextInputBoxStyled = styled(BasicTextInputBox)`
  width: 58rem;
  margin-right: 3rem;
`;

const BasicButtonStyled = styled(BasicButton)`
  margin-bottom: 1rem;
`;

const CountryModal = ({ title, visible, setVisible }) => {
  const countryRef = useRef(null);
  const [conturySelectState, setConturySelectState] = useState('korea');
  const [districtSelectState, setDistrictSelectState] = useState('경기도');
  const [regionSelectState, setRegionSelectState] = useState('경기도');
  const [countryInput, setCountryInput] = useState('');
  const dataykey = Object.keys(districtList);

  const handleCountryCheck = (e) => {
    setConturySelectState(e.target.value);
  };
  const handleDistrictCheck = (e) => {
    setDistrictSelectState(e);
    setRegionSelectState(districtList[e][0]);
  };
  const handleRegionCheck = (e) => {
    setRegionSelectState(e);
  };
  const handleCountryInput = (e) => {
    setCountryInput(e.target.value);
  };
  const handleOkBtn = () => {
    console.log(conturySelectState);
    console.log(districtSelectState);
    console.log(regionSelectState);
    console.log(countryRef.current.state.value); //원산지 코드
    setVisible(false);
    resetAllValue();
  };

  const resetAllValue = () => {
    setConturySelectState('korea');
    setDistrictSelectState(dataykey[0]);
    setRegionSelectState(districtList[dataykey[0]][0]);
    setCountryInput('');
  };

  return (
    <>
      <Modal
        title={title}
        centered
        visible={visible}
        onOk={handleOkBtn}
        onCancel={() => {
          setVisible(false);
          resetAllValue();
        }}
        width={900}
        okText="확인"
        cancelText="닫기"
      >
        <CSVLink
          data={countryCodeDataList}
          headers={countryCodeColumns}
          filename={'원산지 전체코드.csv'}
        >
          <BasicButtonStyled label="전체코드 다운로드"></BasicButtonStyled>
        </CSVLink>
        <ContainerStyled>
          <SubContainerStyled>
            <TitleTextStyled>원산지</TitleTextStyled>
            <Radio.Group
              value={conturySelectState}
              onChange={handleCountryCheck}
            >
              <Radio value="korea">국산</Radio>
              <Radio value="oceanic">원양산</Radio>
              <Radio value="Income">수입산</Radio>
              <Radio value="etc">기타</Radio>
            </Radio.Group>
          </SubContainerStyled>

          <SubContainerStyled>
            <TitleTextStyled>상세지역</TitleTextStyled>
            <Select
              defaultValue={dataykey[0]}
              list={dataykey}
              onChange={handleDistrictCheck}
            >
              {dataykey.map((item) => (
                <Select key={item}>{item}</Select>
              ))}
            </Select>
            <Select
              value={regionSelectState}
              list={districtList}
              onChange={handleRegionCheck}
            >
              {districtList[districtSelectState].map((item) => (
                <Select key={item}>{item}</Select>
              ))}
            </Select>
          </SubContainerStyled>

          <SubContainerStyled>
            <TitleTextStyled>원산지 코드</TitleTextStyled>
            <BasicTextInputBoxStyled
              value={countryInput}
              onChange={handleCountryInput}
              ref={countryRef}
            />
          </SubContainerStyled>
        </ContainerStyled>
      </Modal>
    </>
  );
};
export default CountryModal;
const districtList = {
  강원도: [
    '춘천',
    '강릉',
    '홍천',
    '철원',
    '화천',
    '양구',
    '인제',
    '속초',
    '고성',
    '양양',
    '강릉',
    '원주',
    '대백',
    '횡성',
    '영월',
    '평창',
    '정선',
    '동해',
    '삼척',
  ],
  경기도: [
    '연천',
    '포천',
    '파주',
    '가평',
    '양주',
    '의정부',
    '고양',
    '남양주',
    '김포',
    '광명',
    '구리',
    '하남',
    '광주',
    '성남',
    '의왕',
    '수원',
    '용인',
    '이천',
    '여주',
  ],
  경상남도: ['거장', '합천', '창녕'],
  경상북도: ['안동', '상주', '구미'],
};
const countryCodeColumns = [
  {
    label: '원산지 코드',
    key: 'country_code',
  },
  {
    label: '지역',
    key: 'region',
  },
];

const countryCodeDataList = {
  country_code: ['00', '01', '02'],
  region: ['국산', '원양산', '수입산'],
};
