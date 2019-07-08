//-----------  Imports  -----------//

import get from 'lodash/get';
import { connect } from 'react-redux';

import { linksSelector } from 'models/sidebar/selectors';

import AppSidebar from './AppSidebar';

//-----------  Redux Maps  -----------//

const mapState = state => ({
  links: linksSelector(state),
  pathname: get(state, 'router.location.pathname'),
});

const mapDispatch = dispatch => ({});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(AppSidebar);
