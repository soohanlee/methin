import 'antd/dist/antd.css';
import { Radio, Modal } from 'antd';
import styled from 'styled-components';
import BasicAutoComplete from 'pages/Admin/components/Form/BasicAutoComplete';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import { useEffect, useState, useRef } from 'react';
import { getCategory } from 'apis/category';
import { notification } from 'utils/notification';

const ItemContainerStyled = styled.div`
  display: flex;
`;

const SubContainerStyled = styled.div`
  max-width: 30rem;
  width: 100%;
  border: 1px solid black;
  margin-right: 1rem;
`;

const SubItemContainerStyled = styled.div`
  height: 30rem;
  overflow-y: auto;
`;

const ItemStyled = styled.div`
  background: ${(props) => (props.isClicked ? 'lightgrey' : 'white')};
`;

const ItemTitleStyled = styled.div`
  border-bottom: 0.1rem solid black;
`;

const ContainerStyled = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  align-items: center;
`;

const _ContainerStyled = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const TitleTextStyled = styled.div`
  margin-right: 3rem;
`;

const BasicAutoCompleteStyled = styled(BasicAutoComplete)`
  width: 58rem;
  margin-bottom: 1rem;
`;

const CategoryModal = ({ title, visible, setVisible }) => {
  const categoryRef = useRef();
  const [categoryTypeState, setCategoryTypeState] = useState(0);
  const [categoryInputState, setCategoryInputState] = useState(0);
  const [classificationdataState, setClassificationdataState] = useState({});
  const [selectedFirstItemState, setSelectedFirstItemState] = useState(0);
  const [selectdSecondItemState, setSelectedSecondItemState] = useState(0);
  const [categoryDataState, setCategoryDataState] = useState([]);

  const dataKey = Object.keys(classificationdataState);

  const [selectCategoryState, setSelectCategoryState] = useState();
  const [selectCategoryCodeState, setSelectCategoryCodeState] = useState();
  const [categoryTapSelectState, setCategoryTapSelectState] = useState(0);

  useEffect(() => {
    resetData();
  }, [visible === true]);

  useEffect(() => {
    async function fetchAndSetUser() {
      await getApiProductData();
    }
    fetchAndSetUser();
  }, []);

  const getApiProductData = async () => {
    try {
      let result = await getCategory();

      result = result.data.data;
      const newResult = result.map((item) => {
        let { full_name } = item;
        return { value: full_name };
      });

      let newResult2 = [];
      let datas = [result[0].full_name];

      result.forEach((item, count) => {
        let { full_name, depth } = item;
        if (count === 0) return;

        if (depth === 0) {
          let _datas = datas;
          if (newResult2) {
            newResult2 = [...newResult2, _datas];
          } else {
            newResult2 = [_datas];
          }

          datas = [full_name];
          if (result.length - 1 === count) newResult2 = [...newResult2, datas];
        } else {
          datas = [...datas, full_name];
        }
      });

      console.log(newResult2);
      console.log(newResult2[0][0]);

      setClassificationdataState(newResult2);
      setCategoryDataState(newResult);
      notification.success('카테고리 정보를 가져왔습니다.');
    } catch (e) {
      notification.error('카테고리 정보를 가져오지 못했습니다.');
    }
  };

  const handleFristItemClick = (value) => {
    setSelectedFirstItemState(value);
  };

  const handleSecondItemClick = (value) => {
    setSelectedSecondItemState(value);
  };

  const handleOkBtn = () => {
    switch (categoryTypeState) {
      case 0:
        console.log(categoryRef.current.state.value);
        break;
      case 1:
        console.log(selectedFirstItemState);
        console.log(selectdSecondItemState);
        break;
      default:
        break;
    }

    setVisible(false);
  };

  const handleSearchBtn = () => {
    setSelectCategoryState(categoryInputState);
    setSelectCategoryCodeState('Code??');
  };

  const renderChangedTap = () => {
    switch (categoryTypeState) {
      case 0:
        return renderCategorySearch();
      case 1:
        return renderCategorySelect();
      default:
        return renderCategorySearch();
    }
  };

  const handleCategoryInputChnage = (value) => {
    setCategoryInputState(value);
  };

  const renderCategorySearch = () => {
    return (
      <>
        <_ContainerStyled>
          <BasicAutoCompleteStyled
            value={categoryInputState}
            onChange={handleCategoryInputChnage}
            placeholder="카테고리명 입력"
            ref={categoryRef}
            options={categoryDataState}
          ></BasicAutoCompleteStyled>
          <BasicButton onClick={handleSearchBtn} label="검색"></BasicButton>
        </_ContainerStyled>

        <ContainerStyled>
          <TitleTextStyled>
            선택한 카테고리 : {selectCategoryState}
          </TitleTextStyled>
        </ContainerStyled>

        <ContainerStyled>
          <TitleTextStyled>
            선택한 카테고리 코드 : {selectCategoryCodeState}
          </TitleTextStyled>
        </ContainerStyled>
      </>
    );
  };

  const renderCategorySelect = () => {
    return (
      <>
        <ItemContainerStyled>
          <SubContainerStyled>
            <ItemTitleStyled>1차 분류</ItemTitleStyled>
            <SubItemContainerStyled>
              {classificationdataState &&
                classificationdataState.map((item, count) => (
                  <ItemStyled
                    key={count}
                    isClicked={count === selectedFirstItemState}
                    onClick={() => handleFristItemClick(count)}
                  >
                    {item[0][0]}
                  </ItemStyled>
                ))}
            </SubItemContainerStyled>
          </SubContainerStyled>
          <SubContainerStyled>
            <ItemTitleStyled>2차 분류</ItemTitleStyled>
            <SubItemContainerStyled>
              {classificationdataState[selectedFirstItemState] &&
                classificationdataState[selectedFirstItemState].map(
                  (item, count) => (
                    <ItemStyled
                      key={count}
                      isClicked={count === selectdSecondItemState}
                      onClick={() => handleSecondItemClick(count)}
                    >
                      {item}
                    </ItemStyled>
                  ),
                )}
            </SubItemContainerStyled>
          </SubContainerStyled>
        </ItemContainerStyled>
      </>
    );
  };

  const handleCategorySelect = (e) => {
    setCategoryTapSelectState(e.target.value);
  };

  const resetData = () => {
    setCategoryTapSelectState(0);
    setCategoryInputState('');
    setSelectCategoryState('');
    setSelectCategoryCodeState('');
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
          setCategoryTapSelectState('search');
          setCategoryTypeState(0);
        }}
        width={900}
        okText="저장"
        cancelText="닫기"
      >
        <ContainerStyled>
          <ContainerStyled>
            <Radio.Group
              onChange={handleCategorySelect}
              value={categoryTapSelectState}
              defaultValue={0}
            >
              <Radio.Button
                value={0}
                onClick={() => {
                  setCategoryTypeState(0);
                }}
              >
                카테고리명 검색
              </Radio.Button>
              <Radio.Button
                value={1}
                onClick={() => {
                  setCategoryTypeState(1);
                }}
              >
                카테고리명 선택
              </Radio.Button>
            </Radio.Group>
          </ContainerStyled>
          {renderChangedTap()}
        </ContainerStyled>
      </Modal>
    </>
  );
};
export default CategoryModal;

const dataList = {
  축산: ['닭가슴살', '돼지안심', '한우안심'],
  곡물: ['오트밀'],
};
