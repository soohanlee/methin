import React, { forwardRef } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 43rem;
`;

const Input = styled.input`
  display: flex;
  border: none;
  border-bottom: 0.2rem solid ${(props) => props.color};
  background: transparent;
  color: ${(props) => props.color};
  line-height: 4rem;
  padding-right: 6rem;
  width: 100%;
  font-size: 1.4rem;
  ::placeholder {
    color: ${(props) => props.color};
  }
`;

const Icon = styled.div`
  display: flex;
  color: ${(props) => props.color};
  position: absolute;
  right: 0;
`;

const SearchInput = (
  { color = '#ffffff', onKeyPress, onClick, placeholder, className },
  ref,
) => {
  return (
    <InputContainer className={className}>
      <Input
        color={color}
        ref={ref}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
      />
      <Icon onClick={onClick} color={color}>
        아이콘
      </Icon>
      {/* 아이콘 svg로 받아야 색이 변경됨 */}
    </InputContainer>
  );
};

export default forwardRef(SearchInput);
