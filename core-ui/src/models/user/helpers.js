//-----------  Imports  -----------//

import PropTypes from 'prop-types';

//-----------  Type Definitions  -----------//

export const userShape = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  email: PropTypes.string,
  last_name: PropTypes.string,
  first_name: PropTypes.string,
  _name: PropTypes.string,
  _avatar: PropTypes.string,
};
