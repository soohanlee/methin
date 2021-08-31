import { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import CategoryModal from './CategoryModal';
import CountryModal from './CountryModal';
import ImageModal from './ImageModal';
import { CSVLink }  from 'react-csv'
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  > * {
    margin-right: 1rem;
    &:last-child {
      margin: 0;
    }
  }
`;

const Title = ({ categoryList, dataList }) => {
  const [categoryVisibleState, setCategoryVisibleState] = useState(false);
  const [countryVisibleState, setCountryVisibleState] = useState(false);
  const [imageVisibleState, setImageVisibleState] = useState(false);

  const handleCategoryClick = () => {
    setCategoryVisibleState(true);
  };

  const handleOriginClick = () => {
    setCountryVisibleState(true);
  };
  const handleImageClick = () => {
    setImageVisibleState(true);
  };
  const handleExcelClick = () => {
    alert('엑셀양식다운로드 클릭');
  };

  const handleFileClick = () => {
    alert('파일 업로드 클릭');
  };
  return (
    <>
      <CategoryModal
        title="카테고리 찾기"
        visible={categoryVisibleState}
        setVisible={setCategoryVisibleState}
        categoryList={categoryList}
      />
      <CountryModal
        title="원산지 찾기"
        visible={countryVisibleState}
        setVisible={setCountryVisibleState}
      />
      <ImageModal
        visible={imageVisibleState}
        setVisible={setImageVisibleState}
        onClick={setImageVisibleState}
        // countryRef={countryRef}
      />
      <Container>
        <ButtonContainer>
          <Button onClick={handleCategoryClick}>카테고리 찾기</Button>
          <Button onClick={handleOriginClick}>원산지 찾기</Button>
        </ButtonContainer>

        <ButtonContainer>
          <CSVLink data={dataList} headers={columns} filename={'상품 일괄 등록.csv'}>
            <Button>엑셀양식다운로드</Button>
          </CSVLink>
          <Button onClick={handleImageClick}>이미지업로드</Button>
          <Button onClick={handleFileClick}>파일 업로드</Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Title;

const columns = [
  {
    label: '처리상태',
    key: 'status'
  },
  {
    label: '실패사유',
    key: 'fail',
  },
  {
    label: '상품번호',
    key: 'id',
  },
  {
    label: '판매상태',
    key: 'status',
  },
  {
    label: '카테고리',
    key: 'category',
  },
  {
    label: '상품명',
    key: 'name',
  },
  {
    label: '판매가',
    key: 'actual_price',
  },
  {
    label: '재고수량',
    key: 'count',
  },
];
