import { getLocalStorageData } from 'utils/common';
import { get, set, remove } from 'js-cookie';
import { COOKIE_KEYS, LOCAL_STORAGE_KEYS } from 'configs/config';
import {
  getAccessToken as getServerAccessToken,
  checkAccessToken,
} from 'apis/auth';

export async function getIsRememberToken() {
  return !!getLocalStorageData(LOCAL_STORAGE_KEYS.UserLoginRemember);
}

export async function setIsRememeberToken(isRemeber) {
  return window.localStorage.setItem(
    LOCAL_STORAGE_KEYS.UserLoginRemember,
    JSON.stringify(isRemeber),
  );
}

export async function getRefreshToken() {
  const refreshToken = get(COOKIE_KEYS.UserRefreshToken);

  return refreshToken || null;
}

export async function getAccessToken() {
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

export async function cleanPId() {
  remove(COOKIE_KEYS.ProjectId);
}

export async function cleanToken() {
  await cleanRefreshToken();
  await cleanAccessToken();
}

export async function cleanAllToken() {
  await cleanToken();
  await cleanPId();
}

export async function getNewAccessToken() {
  const refreshToken = await getRefreshToken();
  const accessToken = await getAccessToken();

  if (refreshToken && accessToken) {
    const reponse = await getServerAccessToken({ accessToken, refreshToken });

    if (reponse.code === 100) {
      const { accessToken: newAccessToken } = reponse.data;

      await setAccessToken(newAccessToken);

      return newAccessToken;
    }
  }

  await cleanAllToken();

  return null;
}

export async function getIsAvalidAccessToken() {
  const accessToken = await getAccessToken();
  const refreshToken = await getRefreshToken();

  if (accessToken && refreshToken) {
    const response = await checkAccessToken();

    if (response.code === 100) {
      return true;
    }
  }

  await cleanAllToken();

  return false;
}
