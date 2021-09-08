import styled from 'styled-components';

export const BackIcon = styled.img.attrs({
  src: '/assets/images/mobile/black-back-icon.svg',
})`
  width: 2.5rem;
  height: 2.5rem;
`;

export const CartIcon = styled.img.attrs((props) => ({
  src: props.white
    ? '/assets/images/mobile/black-cart-icon.svg'
    : '/assets/images/top-white-cart-icon.svg',
}))`
  width: 2rem;
  height: 2rem;
  margin-left: 2rem;
`;
