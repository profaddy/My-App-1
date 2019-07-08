//-----------  Imports  -----------//

import api from '@miro/core-ui/lib/utilities/api';
import urlCreator from 'utilities/api.creator';

//-----------  Endpoints  -----------//

export const requestStudies = () => {
  return api.get(urlCreator('/studies/'));
};

export const createStudy = data => {
  console.log(data);
  const formData = new FormData();

  if (data.consentform) {
    formData.append('concentform', data.consentform);
  }
  formData.append('description', data.description);
  formData.append('name', data.name);
  formData.append('irb_no', data.irb_no);
  formData.append('sponsor', data.sponsor);
  formData.append('type', data.type);
  console.log(formData);

  return api.post(urlCreator('/studies/'), formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};
