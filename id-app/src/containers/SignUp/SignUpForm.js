//-----------  Imports  -----------//

import Styled from './styles';
import get from 'lodash/get';
import React from 'react';
import PropTypes from 'prop-types';
import EmailPasswordInfo from './EmailPasswordInfo';
import ResearcherInfo from './ResearcherInfo';
import LicenseInfo from './LicenseInfo';
import CollaboratorInfo from './CollaboratorInfo';

//-----------  Component  -----------//

class SignUpForm extends React.Component {
  state = {
    page: 1,
  };

  componentDidMount() {
    this.props.requestLicensingBoards();
    this.props.requestPracticeAreas();
    this.props.requestInstitutions();
  }

  componentWillUnmount() {
    this.props.destroyForm();
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  previousPage = () => {
    this.setState({ page: this.state.page - 1 });
  };

  render() {
    const {
      onSubmit,
      handleSubmit,
      change,
      is_licensed,
      initialValues,
    } = this.props;

    const { page } = this.state;

    const userType = get(this.props, 'match.params.type');

    return (
      <div>
        {page === 1 && (
          <EmailPasswordInfo
            {...this.props}
            userType={userType}
            onSubmit={userType === 'participant' ? onSubmit : this.nextPage}
            initialValues={
              initialValues.type === 'principal investigator'
                ? { ...initialValues, is_licensed: true }
                : { ...initialValues }
            }
          />
        )}

        {page === 2 && (
          <ResearcherInfo
            {...this.props}
            onSubmit={this.nextPage}
            initialValues={{ ...initialValues, is_licensed: true }}
          />
        )}

        {page === 3 && (
          <LicenseInfo
            {...this.props}
            onSubmit={onSubmit}
            nextPage={this.nextPage}
            initialValues={{ ...initialValues, is_licensed: true }}
          />
        )}

        {page === 4 && (
          <CollaboratorInfo
            {...this.props}
            onSubmit={onSubmit}
            initialValues={{ ...initialValues, is_licensed: false }}
          />
        )}
      </div>
    );
  }
}

//-----------  Type Definitions  -----------//

SignUpForm.propTypes = {
  onSubmit: PropTypes.func,
};

//-----------  Export  -----------//

export default SignUpForm;
