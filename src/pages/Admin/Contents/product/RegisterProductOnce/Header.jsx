import { useState, useRef } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import CategoryModal from 'pages/Admin/Contents/product/RegisterProductOnce/CategoryModal';
import CountryModal from 'pages/Admin/Contents/product/RegisterProductOnce/CountryModal';
import ImageModal from 'pages/Admin/Contents/product/RegisterProductOnce/ImageModal';

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

const Header = () => {
  const categoryRef = useRef(null);
  const countryRef = useRef(null);
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [countryVisible, setCountryVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [conturySelect, setConturySelect] = useState('korea');
  const [adressSelect, setAdressSelect] = useState('korea');

  const handleCategoryClick = () => {
    setCategoryVisible(true);
  };

  const handleOriginClick = () => {
    setCountryVisible(true);
  };

  const handleExcelClick = () => {
    alert('엑셀양식다운로드 클릭');
  };

  const handleImageClick = () => {
    setImageVisible(true);
  };

  const handleFileClick = () => {
    alert('파일 업로드 클릭');
  };

  const searchData = () => {};
  const addVisible = () => {};
  const setAddVisible = () => {};
  return (
    <>
      <CategoryModal
        visible={categoryVisible}
        setVisible={setCategoryVisible}
        onClick={setCategoryVisible}
        title="카테고리 찾기"
        categoryRef={categoryRef}
      />
      <CountryModal
        visible={countryVisible}
        setVisible={setCountryVisible}
        onClick={setCountryVisible}
        title="원산지 찾기"
        countryRef={countryRef}
        setConturySelect={setConturySelect}
        setAdressSelect={setAdressSelect}
      />
      <ImageModal
        visible={imageVisible}
        setVisible={setImageVisible}
        onClick={setImageVisible}
        countryRef={countryRef}
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

export default Header;
