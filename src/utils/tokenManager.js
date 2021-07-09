import { getLocalStorageData } from 'utils/common';
import { get, set, remove } from 'js-cookie';
import { COOKIE_KEYS, LOCAL_STORAGE_KEYS } from 'configs/config';
import { reissuanceRefreshVerify, jwtVerify, refreshVerify } from 'apis/auth';

export async function getIsRememberToken() {
  return !!getLocalStorageData(LOCAL_STORAGE_KEYS.UserLoginRemember);
}

export async function setIsRememeberToken(isRemeber) {
  return window.localStorage.setItem(
    LOCAL_STORAGE_KEYS.UserLoginRemember,
    JSON.stringify(isRemeber),
  );
}

export function getRefreshToken() {
  const refreshToken = get(COOKIE_KEYS.UserRefreshToken);

  return refreshToken || null;
}

export function getAccessToken() {
  const accessToken = get(COOKIE_KEYS.UserAccessToken);

  return accessToken || null;
}

export async function setRefreshToken(refreshToken, _options) {
  const isRemeberToken = await getIsRememberToken();
  const options = {
    expires: isRemeberToken ? 7 : undefined,
    ..._options,
  };

  set(COOKIE_KEYS.UserRefreshToken, refreshToken, options);
}

export async function setAccessToken(accessToken, _options) {
  const isRemeberToken = await getIsRememberToken();
  const options = {
    expires: isRemeberToken ? 1 : undefined,
    ..._options,
  };

  set(COOKIE_KEYS.UserAccessToken, accessToken, options);
}

export async function setToken(refreshToken, accessToken, options) {
  await setRefreshToken(refreshToken, options);
  await setAccessToken(accessToken, options);
}

export async function setPId(PId, _options) {
  const isRemeberToken = await getIsRememberToken();
  const options = {
    expires: isRemeberToken ? 30 : undefined,
    ..._options,
  };

  set(COOKIE_KEYS.ProjectId, PId, options);
}

export async function cleanRefreshToken() {
  remove(COOKIE_KEYS.UserRefreshToken);
}

export async function cleanAccessToken() {
  remove(COOKIE_KEYS.UserAccessToken);
}

export async function cleanToken() {
  await cleanRefreshToken();
  await cleanAccessToken();
}

//access token 이 유효하지 않고 refresh token 만 유효할때 사용.
export async function getNewAccessToken() {
  const result = reissuanceRefreshVerify();
  if (result.code === 100) {
    const { accessToken: newAccessToken } = result.data;
    const { refreshToken: newRefreshToken } = result.data;
    await setToken(newRefreshToken, newAccessToken);
    return { newAccessToken, newRefreshToken };
  }
}

export async function getIsAvalidAccessToken() {
  const accessToken = getAccessToken();

  if (accessToken) {
    try {
      const response = await jwtVerify();
      if (response.data.message === 'success') {
        return true;
      }
    } catch (e) {
      return false;
    }
  } else {
    return false;
  }
}

export async function getIsAvalidAccessRefreshToken() {
  const refreshToken = await getRefreshToken();

  if (refreshToken) {
    const response = await refreshVerify();

    if (response.code === 100) {
      return true;
    }
  }

  return false;
}

export const getCartCookies = () => {
  if (get(COOKIE_KEYS.cart)) {
    return JSON.parse(get(COOKIE_KEYS.cart));
  } else {
    return false;
  }
};

export const setCartCookies = (data) => {
  set(COOKIE_KEYS.cart, data);
};

export const removeCartCookies = () => {
  remove(COOKIE_KEYS.cart);
};

export const removeCartCookie = (idList) => {
  // idList: array;
  let newList;
  const cookies = getCartCookies();
  for (let i = 0; i < idList.length; i++) {
    const newCookies = cookies.filter(
      ({ product_id }) => `${product_id}` !== idList[i],
    );
    if (i === idList.length - 1) {
      newList = newCookies;
    }
  }

  setCartCookies(newList);
};
