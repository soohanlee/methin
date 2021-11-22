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
  if (value) {
    return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return value;
  }
}

export function removeRest(value) {
  if (value) {
    return value.replace(/,/gi, '');
  } else {
    return value;
  }
}

export const addCartListToCookies = (data) => {
  const cartList = getCartCookies();
  const result = cartList.slice();
  const existItem = result.find(
    ({ product_id }) => product_id === data.product_id,
  );
  if (existItem) {
    const newProductList = result.map((item) => {
      if (item.product_id === data.product_id) {
        return { ...item, count: item.count + data.count };
      } else {
        return item;
      }
    });

    setCartCookies(newProductList);

    return 'isExist';
  } else {
    const cartInfo = [{ product_id: data.product_id, count: data.count }];
    const addResult = result.concat(cartInfo);

    setCartCookies(addResult);
    return 'added';
  }
};
