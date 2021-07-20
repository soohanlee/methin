import React from 'react';
import styled from 'styled-components';
import { Checkbox, Label } from 'components/styled/Form';

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
          placeholder="내용을 작성해주세요."
          value={description}
          onChange={(e) => setDesc(e.target.value)}
        />
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