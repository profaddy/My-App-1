//-----------  Imports  -----------//

import PropTypes from 'prop-types';

//-----------  Type Definitions  -----------//

export const sidebarShape = {
  to: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  exact: PropTypes.bool,
  nested: PropTypes.array,
  disabled: PropTypes.bool,
};
