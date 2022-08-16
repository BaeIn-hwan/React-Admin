import { TypeAll } from '@/interface/common/common';

const setStorage = (type: string, key: string, value: TypeAll): void => {
  const _value = JSON.stringify(value);

  if (type === 'local') {
    localStorage.setItem(key, _value);
  } else {
    sessionStorage.setItem(key, _value);
  }
};

const getStorage = (type: string, key: string): TypeAll => {
  if (type === 'local') {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key) || '')
      : null;
  } else {
    return sessionStorage.getItem(key)
      ? JSON.parse(sessionStorage.getItem(key) || '')
      : null;
  }
};

const removeStorage = (type: string, key: string): void => {
  if (type === 'local') {
    localStorage.removeItem(key);
  } else {
    sessionStorage.removeItem(key);
  }
};

const clearStorage = (type: string): void => {
  if (type === 'local') {
    localStorage.clear();
  } else {
    sessionStorage.clear();
  }
};

export { setStorage, getStorage, removeStorage, clearStorage };
