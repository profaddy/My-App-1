//-----------  Imports  -----------//

import Cookies from 'universal-cookie';
import queryString from 'query-string';

//-----------  Definitions  -----------//

const cookies = new Cookies();
const tokenKey = `${process.env.APP_NAME}-token`;
const cookieOpt = {
  path: '/',
  secure: true,
  domain: '.mirohealth.com',
  expires: new Date(Date.now() + 12096e5),
};

//-----------  Helpers  -----------//

export function isLocalhost() {
  const isDev = true; // ('local' === process.env.MIRO_ENV)
  const isLoc = 'localhost' === window.location.hostname;

  return isDev && isLoc;
}

//-----------  Storage  -----------//

const requestTokenUtility = (key = tokenKey) => {
  if (isLocalhost()) {
    const { token: localToken } = queryString.parse(window.location.search);
    if (localToken) {
      stashTokenWithKey(key, localToken);
      window.location.replace(
        `${window.location.origin}${window.location.pathname}`,
      );
    }
    if (window.localStorage.getItem(key))
      return Promise.resolve(window.localStorage.getItem(key));
    else return Promise.reject(new Error('auth token not available'));
  } else {
    if (cookies.get(key)) return Promise.resolve(cookies.get(key));
    else return Promise.reject(new Error('auth token not available'));
  }
};

export const requestToken = () => {
  return requestTokenUtility();
};

export const requestTokenWithKey = key => {
  return requestTokenUtility(key);
};

export const stashToken = token => {
  if (isLocalhost()) window.localStorage.setItem(tokenKey, token);
  else cookies.set(tokenKey, token, cookieOpt);
};

export const stashTokenWithKey = (key, token) => {
  if (isLocalhost()) {
    window.localStorage.setItem(key, token);
  } else cookies.set(key, token, cookieOpt);
};

export const removeToken = () => {
  if (isLocalhost()) window.localStorage.removeItem(tokenKey);
  else cookies.remove(tokenKey);
};

export const removeKeyToken = key => {
  if (isLocalhost()) window.localStorage.removeItem(key);
  else cookies.remove(key, cookieOpt);
};
