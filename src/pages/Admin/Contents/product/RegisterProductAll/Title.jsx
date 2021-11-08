import { useState } from 'react';
import styled from 'styled-components';
import { message, Upload, Button } from 'antd';
import CategoryModal from './CategoryModal';
import CountryModal from './CountryModal';
import ImageModal from './ImageModal';
import { CSVLink } from 'react-csv';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  width: 98%;
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

  const handleFileClick = () => {};

  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    beforeUpload(file) {
      if (file.name.indexOf('xls') === -1 && file.name.indexOf('csv') === -1) {
        message.error(`${file.name} is not a xml`);
      } else {
        message.success(`${file.name} is xml`);
        console.log(file);

        // return new Promise((resolve) => {

        // reader.onload = () => {
        //   const img = document.createElement('img');
        //   img.src = reader.result;
        //   img.onload = () => {
        //     const canvas = document.createElement('canvas');
        //     canvas.width = img.naturalWidth;
        //     canvas.height = img.naturalHeight;
        //     const ctx = canvas.getContext('2d');
        //     ctx.drawImage(img, 0, 0);
        //     ctx.fillStyle = 'red';
        //     ctx.textBaseline = 'middle';
        //     ctx.font = '33px Arial';
        //     ctx.fillText('Ant Design', 20, 20);
        //     canvas.toBlob(resolve);
        //   };
        // };
        // });
      }
    },
  };

  return (
    <>
      <CategoryModal
        title="카테고리 찾기"
        visible={categoryVisibleState}
        setVisible={setCategoryVisibleState}
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
          <CSVLink data={[]} headers={columns} filename={'상품 일괄 등록.csv'}>
            <Button>엑셀양식다운로드</Button>
          </CSVLink>
          <Button onClick={handleImageClick}>이미지업로드</Button>
          <Upload {...props}>
            <Button onClick={handleFileClick}>파일 업로드</Button>
          </Upload>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Title;

const columns = [
  {
    label: '처리상태',
    key: 'status',
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
