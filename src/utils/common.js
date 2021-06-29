import { getCartCookies, setCartCookies } from 'utils/tokenManager';

export function getLocalStorageData(name) {
  try {
    const data = window.localStorage.getItem(name);

    if (typeof data === 'string') {
      return JSON.parse(data);
    }

    return undefined;
  } catch (e) {
    return undefined;
  }
}

export function changeNumberDigits(value) {
  return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}

export function removeRest(value) {
  if (value) {
    return value.replace(/,/gi, '');
  } else {
    return value;
  }
}

export const addCartList = (data) => {
  const cartList = getCartCookies();
  const result = JSON.parse(cartList);

  const cartInfo = [{ product_id: data.product_id, count: data.count }];
  const addResult = result.concat(cartInfo);
  if (result.find(({ product_id }) => product_id === data.product_id)) {
    return 'isExist';
  } else {
    setCartCookies(addResult);
    return 'added';
  }
};
