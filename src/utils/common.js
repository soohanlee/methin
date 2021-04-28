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
  return value.replace(/,/gi, '');
}
