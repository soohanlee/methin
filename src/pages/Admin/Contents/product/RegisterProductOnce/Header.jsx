import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

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

const header = () => {
  const handleCategoryClick = () => {
    alert("카테고리 찾기 클릭")
  }

  const handleOriginClick = () => {
    alert("원산지 찾기 클릭")
  }

  const handleExcelClick = () => {
    alert("엑셀양식다운로드 클릭")
  }

  const handleImageClick = () => {
    alert("이미지업로드 클릭")
  }

  const handleFileClick = () => {
    alert("파일 업로드 클릭")
  }

  return (
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
  );
};

export default header;
