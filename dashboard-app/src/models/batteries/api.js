//-----------  Imports  -----------//

import api from '@miro/core-ui/lib/utilities/api';
import urlCreator from 'utilities/api.creator';

//-----------  Endpoints  -----------//

export const requestBatteries = () => {
  return api.get(urlCreator('/battery/batteries/'));
  // return require('./__mocks__/api').requestBatteries();
};

export const createBattery = params => {
  // console.log(params);
  return api.post(urlCreator('/battery/batteries/'), params);
  // return Promise.resolve({ id: 1, ...params });
};
