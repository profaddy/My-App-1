//-----------  Imports  -----------//

import get from 'lodash/get';

import axios from 'axios';

//-----------  Definitions  -----------//

const api = axios.create({
  baseURL: process.env.API_ROOT,
});

//-----------  Response Handlers  -----------//

api.interceptors.response.use(
  res => {
    return get(res, 'data');
  },
  res => {
    return Promise.reject(res);
  },
);

//-----------  Instance  -----------//

export default api;
