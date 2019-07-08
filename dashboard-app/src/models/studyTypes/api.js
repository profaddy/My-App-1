//-----------  Imports  -----------//

import api from '@miro/core-ui/lib/utilities/api';
import urlCreator from 'utilities/api.creator';

//-----------  Endpoints  -----------//

export const requestStudyTypes = () => {
  return api.get(urlCreator('/studytypes/'));
};
