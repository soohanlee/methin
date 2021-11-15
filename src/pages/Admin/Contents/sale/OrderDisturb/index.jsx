import React, { useState, useRef, useEffect } from 'react';

import styled from 'styled-components';

// import Filter from './Filter';
import Table from './Table';
import { Input } from 'antd';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicCheckBox from 'pages/Admin/components/Form/BasicCheckBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import { notification } from 'utils/notification';
import moment from 'moment';
import { DateFormat } from 'configs/config';

const RegistertBox = styled.div`
  background-color: white;
`;

const SelectBox = styled(BasicSelectBox)`
  width: ${(props) => props.width};
  margin-bottom: ${(props) => props.marginbottom};
`;

const SelectCheckBox = styled.div`
  margin-bottom: 2rem;
  display: flex;
`;
const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const BasicButtonStyled = styled(BasicButton)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-left: ${(props) => props.marginleft};
  align-items: center;
`;

const InputBox = styled(Input)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-bottom: ${(props) => props.marginbottom};
`;

const Registert = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 100%;
  height: 20rem;
  background-color: white;
  justify-content: space-between;
  border: 1px solid #f0f0f0;
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  display: felx;
`;
const Title = styled.div`
  width: 20%;
  background-color: #f9f9f9;
  padding: 2rem;
`;
const Content = styled.div`
  width: 80%;
  padding: 2rem;
`;

const DisturbSalesBox = styled.div`
  background-color: white;
  width: 100%;
`;
const InquiryConditionsBox = styled.div`
  width: 100%;
  height: 6rem;
  background-color: #f9f9f9;
  border: 1px solid #f0f0f0;
  border-left: 0px;
  margin-top: 1rem;
  border-right: 0px;
`;

const InquiryConditions = styled.div`
  width: 65rem;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 발주 확인/발송관리
const OrderDisturb = () => {
  const limit = 4;
  const [allTableDataState, setAllTableDataState] = useState([]);
  const [tableDataState, setTableDataState] = useState([]);
  const [tableCountState, setTableCountState] = useState(0);
  const [productOffset, setProductOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const [registTypeState, setRegistTypeState] = useState(0); //등록조건
  const [registTypeInputState, setRegistTypeInputState] = useState(''); //등록조건인풋박스
  const [restrictionInputState, setRestrictionInputState] = useState(''); //제한사유인풋박스
  const [repeatedCheckBoxState, setRepeatedCheckBoxState] = useState(); //반복구매
  const [violenceCheckBoxState, setViolenceCheckBoxState] = useState(); //언어폭력
  const [obstructionCheckBoxState, setObstructionCheckBoxState] = useState(); //영업방해
  const [etcCheckBoxState, setEtcCheckBoxState] = useState(); //기타
  const [searchTypeInputState, setSearchTypeInputState] = useState(); //조회조건인풋

  const registTypeInputRef = useRef(); //등록조건인풋박스
  const restrictionInputRef = useRef(); //제한사유인풋박스
  const repeatedCheckBoxRef = useRef(); //반복구매
  const violenceCheckBoxRef = useRef(); //언어폭력
  const obstructionCheckBoxRef = useRef(); //영업방해
  const etcCheckBoxRef = useRef(); //기타
  const [searchTypeState, setSearchTypeState] = useState('all'); //조회조건 타입
  const searchTypeInputRef = useRef(); //조회조건인풋

  useEffect(() => {
    getApiDisturbData(productOffset);
  }, [productOffset]);

  useEffect(() => {
    async function fetchAndSetUser() {
      await getApiDisturbData();
    }
    fetchAndSetUser();
  }, []);

  const getApiDisturbData = async (offset = 0) => {
    try {
      setLoading(true);
      const result = data;
      const list = result;
      const count = list.length;

      let newResult = list.map((item, index) => {
        let { registerDate } = item;
        return {
          ...item,
          registerDate: moment(registerDate).format(DateFormat.Default),
          key: index,
        };
      });

      setAllTableDataState(newResult);
      setTableDataState(newResult);
      setTableCountState(count);

      notification.success('검색성공');
    } catch (e) {
      notification.error('배송취소 정보를 가져오지 못했습니다.');
    }
    setLoading(false);
  };

  const renderRegistertionConditions = () => {
    const handleRegistType = (value) => {
      setRegistTypeState(value);
    };

    const handleRegistTypeInput = (value) => {
      setRegistTypeInputState(value.target.value);
    };

    const handleRestrictionInput = (value) => {
      setRestrictionInputState(value.target.value);
    };

    const handleRepeatedCheckBox = (value) => {
      setRepeatedCheckBoxState(value.target.checked);
    };

    const handleViolenceCheckBox = (value) => {
      setViolenceCheckBoxState(value.target.checked);
    };

    const handleObstructionCheckBox = (value) => {
      setObstructionCheckBoxState(value.target.checked);
    };

    const handleEtcCheckBox = (value) => {
      setEtcCheckBoxState(value.target.checked);
    };

    const handleRegistBtn = () => {
      console.log(registTypeState);
      console.log(registTypeInputRef.current.state.value);
      console.log(restrictionInputRef.current.state.value);
      console.log(violenceCheckBoxRef.current.state.checked);
      console.log(obstructionCheckBoxRef.current.state.checked);
      console.log(repeatedCheckBoxRef.current.state.checked);
      console.log(etcCheckBoxRef.current.state.checked);

      resetData();
    };

    return (
      <RegistertBox>
        <div>등록하기</div>
        <Registert>
          <Box>
            <Title>등록조건</Title>
            <Content>
              <SelectBox
                list={ResisterTypeList}
                width="15rem"
                marginbottom="1rem"
                value={registTypeState}
                onChange={handleRegistType}
              />
              <InputBox
                ref={registTypeInputRef}
                height="10rem"
                marginbottom="1rem"
                value={registTypeInputState}
                onChange={handleRegistTypeInput}
              />
              <div>복수 등록 (enter 또는 ","로 구분)</div>
            </Content>
          </Box>
          <Box>
            <Title>제한사유</Title>
            <Content>
              <SelectCheckBox>
                <BasicCheckBox
                  ref={repeatedCheckBoxRef}
                  label="구매의사 없는 반복구매"
                  checked={repeatedCheckBoxState}
                  onChange={handleRepeatedCheckBox}
                />
                <BasicCheckBox
                  checked={violenceCheckBoxState}
                  onChange={handleViolenceCheckBox}
                  ref={violenceCheckBoxRef}
                  label="언어폭력"
                />
                <BasicCheckBox
                  checked={obstructionCheckBoxState}
                  onChange={handleObstructionCheckBox}
                  ref={obstructionCheckBoxRef}
                  label="영업방해"
                />
                <BasicCheckBox
                  checked={etcCheckBoxState}
                  onChange={handleEtcCheckBox}
                  ref={etcCheckBoxRef}
                  label="기타"
                />
              </SelectCheckBox>
              <InputBox
                value={restrictionInputState}
                onChange={handleRestrictionInput}
                ref={restrictionInputRef}
                height="10rem"
                marginbottom="1rem"
              />
              <div>제한 상세 사유를 입력하실 수 있습니다.</div>
            </Content>
          </Box>
        </Registert>
        <ButtonBox>
          <BasicButtonStyled
            onClick={handleRegistBtn}
            label="등록"
            width="8rem"
            height="4rem"
          />
        </ButtonBox>
      </RegistertBox>
    );
  };

  //검색글자를 포함하고있는 데이터를 조회
  const handleSearchBtn = () => {
    let tableData = [];

    switch (searchTypeState) {
      case 'all':
        tableData = allTableDataState;
        break;
      case 'buyerId':
        tableData = allTableDataState.filter((element) => {
          return element.buyerID.includes(searchTypeInputState);
        });
        break;
      case 'productOrderNumber':
        tableData = allTableDataState.filter((element) => {
          return element.productOrderNumber === searchTypeInputState;
        });
        break;
      case 'registerDate':
        tableData = allTableDataState.filter((element) => {
          return element.registerDate === searchTypeInputState;
        });
        break;
      case 'registerWhy':
        tableData = allTableDataState.filter((element) => {
          return element.registerWhy === searchTypeInputState;
        });
        break;
    }
    setTableDataState(tableData);
  };
  const renderDisturbSales = () => {
    const handleSearchType = (value) => {
      setSearchTypeState(value);
    };

    const handleSearchTypeInput = (value) => {
      setSearchTypeInputState(value.target.value);
    };

    return (
      <DisturbSalesBox>
        <div>판매방해 고객 리스트 [총 {tableCountState}건]</div>
        <InquiryConditionsBox>
          <InquiryConditions>
            <div>조회조건</div>
            <SelectBox
              value={searchTypeState}
              onChange={handleSearchType}
              width="15rem"
              list={InquiryConditionsTypeList}
            />
            <InputBox
              value={searchTypeInputState}
              onChange={handleSearchTypeInput}
              ref={searchTypeInputRef}
              width="30rem"
            />
            <BasicButtonStyled
              onClick={handleSearchBtn}
              label="조회하기"
              width="10rem"
            />
          </InquiryConditions>
        </InquiryConditionsBox>
      </DisturbSalesBox>
    );
  };

  const handleTableChange = (pagination, filter, sort) => {
    setProductOffset(pagination.current - 1);
  };

  const resetData = () => {
    setRegistTypeState('선택');
    setRegistTypeInputState();
    setRestrictionInputState();
    setRepeatedCheckBoxState();
    setViolenceCheckBoxState();
    setObstructionCheckBoxState();
    setEtcCheckBoxState();
    setSearchTypeInputState();
  };

  return (
    <div>
      <div>{renderRegistertionConditions()}</div>
      <div>{renderDisturbSales()}</div>
      <Table
        count={tableCountState}
        tableData={tableDataState}
        limit={limit}
        handleTableChange={handleTableChange}
        loading={loading}
      />
    </div>
  );
};

export default OrderDisturb;
const ResisterTypeList = [
  { label: '구매자ID', value: 0 },
  { label: '상품주문번호', value: 1 },
];
const InquiryConditionsTypeList = [
  { label: '전체', value: 'all' },
  { label: '구매자ID', value: 'buyerId' },
  { label: '상품주문번호', value: 'productOrderNumber' },
  { label: '등록일자', value: 'registerDate' },
  { label: '등록사유', value: 'registerWhy' },
];

const data = [
  {
    buyerID: 'fl',
    productOrderNumber: '123456789',
    registerDate: '2019-05-05',
    registerWhy: '심심해서',
  },
  {
    buyerID: 'ff',
    productOrderNumber: '123456789',
    registerDate: '2019-05-05',
    registerWhy: '심심해서',
  },
  {
    buyerID: 'ㅁㅁ',
    productOrderNumber: '123456789',
    registerDate: '2019-05-05',
    registerWhy: '심심해서',
  },
  {
    buyerID: 'ㅁㅁ',
    productOrderNumber: '123456789',
    registerDate: '2019-05-05',
    registerWhy: '심심해서',
  },
];
