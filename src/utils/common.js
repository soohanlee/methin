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
