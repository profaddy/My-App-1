//-----------  Imports  -----------//

import api from '@miro/core-ui/lib/utilities/api';
import urlCreator from 'utilities/api.creator';

//-----------  Endpoints  -----------//

// export const requestQuestionnaires = questionnaireCategoryId => {
//   return api.get('/batteries/');
//   // return require('./__mocks__/api').requestQuestionnaires();
// };

export const createQuestionnaire = params => {
  // return api.post('/questionnaires/', params);
  return Promise.resolve({ id: 1, ...params });
};

export const requestQuestionnaires = questionnaireCategoryId => {
  return api.get(
    urlCreator(
      `/battery/questionnaires/${
        questionnaireCategoryId
          ? `?questionnairecategory_id=${questionnaireCategoryId}`
          : ``
      }`,
    ),
  );
};
