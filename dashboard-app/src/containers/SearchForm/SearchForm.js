//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import FormField from '@miro/core-ui/lib/forms/FormField';

import SearchIcon from '@miro/core-ui/dist/assets/icons/search.svg';

//-----------  Component  -----------//

const SearchForm = ({ submitting, handleSubmit, ...props }) => (
  <Styled.SearchForm noValidate onSubmit={handleSubmit}>
    <SearchIcon />
    <Field
      type="text"
      name="search"
      component={FormField}
      placeholder="Search by Subject ID..."
      required
    />
  </Styled.SearchForm>
);

//-----------  Type Definitions  -----------//

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

//-----------  Export  -----------//

export default reduxForm({ form: 'SearchForm' })(SearchForm);
