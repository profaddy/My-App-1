//-----------  Imports  -----------//

import { connect } from 'react-redux';

import history from 'models/history';

import SearchForm from './SearchForm';

//-----------  Redux Maps  -----------//

const mapState = state => ({});

const mapDispatch = dispatch => ({
  onSubmit: ({ search }) => {
    history.push(`/?search=${search}`);
  },
});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(SearchForm);
