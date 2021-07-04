import { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import CategoryModal from './CategoryModal';
import CountryModal from './CountryModal';
import ImageModal from './ImageModal';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  > button {
    margin-right: 1rem;
    &:last-child {
      margin: 0;
    }
  }
`;

const Title = ({ dataList }) => {
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
        dataList={dataList}
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
          <Button onClick={handleExcelClick}>엑셀양식다운로드</Button>
          <Button onClick={handleImageClick}>이미지업로드</Button>
          <Button onClick={handleFileClick}>파일 업로드</Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Title;
