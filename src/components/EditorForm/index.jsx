import React, { useState } from 'react';
import styled from 'styled-components';
import { Checkbox, Label } from 'components/styled/Form';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { uploadImg } from 'apis/product';

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.div`
  font-size: 1.6rem;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.LINE};
`;

const SubTitle = styled.div`
  min-width: 6rem;
`;

const Input = styled.input`
  border: 0.1rem solid ${(props) => props.theme.LINE};
  border-radius: 0.2rem;
  padding: 1rem 2rem;
  width: 100%;
`;

const TextArea = styled.textarea`
  border: 0.1rem solid ${(props) => props.theme.LINE};
  border-radius: 0.2rem;
  padding: 1rem 2rem;
  width: 100%;
  height: 26rem;
  &::placeholder {
    font-size: 1.4rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const EditorForm = ({
  categoryTitle,
  title,
  description,
  isSecret,
  setTitle,
  setDesc,
}) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  async function beforeUpload(file) {
    console.log('file', file);
    const form = new FormData();
    form.append('source', file);
    const data = {
      source: file,
    };
    try {
      const result = await uploadImg(data);
      console.log('result', result);
    } catch (e) {}
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    // const isLt2M = file.size / 1024 / 1024 < 2;
    // if (!isLt2M) {
    //   message.error('Image must smaller than 2MB!');
    // }
    // return isJpgOrPng && isLt2M;
    return isJpgOrPng;
  }

  const handleChange = (info) => {
    console.log('info', info);

    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImageUrl(imageUrl);
        setLoading(false);
      });
    }
  };

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  return (
    <Container>
      <Title>{categoryTitle}</Title>
      <InputContainer>
        <SubTitle>제목</SubTitle>
        <Input
          name="title"
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
      </InputContainer>

      <InputContainer>
        <SubTitle>내용</SubTitle>
        <TextArea
          name="desc"
          placeholder={
            isSecret
              ? '궁금한건 무엇이든 물어봐주세요!'
              : `1) 다른 고객에게 도움이 되는 후기를 공유해주세요. 
2) 제품을 활용한 맛있는 조리 사진을 올려주세요.
3) 맛과 식감에 대한 솔직한 후기를 작성해주세요.
4) 최소 5자 이상 작성해야 등록이 가능합니다.`
          }
          value={description}
          onChange={(e) => setDesc(e.target.value)}
        />
      </InputContainer>

      <InputContainer>
        <SubTitle>내용</SubTitle>
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
          ) : (
            uploadButton
          )}
        </Upload>
      </InputContainer>

      {isSecret && (
        <>
          <Checkbox id="checkbox" />
          <Label htmlFor="checkbox">비밀 글로 문의하기</Label>
        </>
      )}
    </Container>
  );
};

export default EditorForm;
