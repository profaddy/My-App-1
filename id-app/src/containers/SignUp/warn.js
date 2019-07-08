import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Prompt } from 'react-router';
import { connect } from 'react-redux';
import { isDirty, hasSubmitSucceeded, hasSubmitFailed } from 'redux-form';

function warnAboutUnsavedForm(WrappedComponent, formName) {
  class WarnAboutUnsavedChanges extends React.Component {
    static propTypes = {
      isFormDirty: PropTypes.bool,
      leaveMessage: PropTypes.string.isRequired,
    };

    static defaultProps = {
      leaveMessage:
        'Your information in the form will be lost. Are you sure you want to go back?',
    };

    componentDidUpdate() {
      this._promptUnsavedChange(
        this.props.isFormDirty,
        this.props.leaveMessage,
      );
    }

    componentWillUnmount() {
      window.onbeforeunload = null;
    }

    _promptUnsavedChange(isUnsaved = false, leaveMessage) {
      window.onbeforeunload = isUnsaved && (() => leaveMessage);
    }

    render() {
      return (
        <Fragment>
          <WrappedComponent {...this.props} />
          <Prompt
            when={
              this.props.isFormDirty &&
              !this.props.hasFormSubmitSucceeded &&
              !this.props.hasFormSubmitFailed
            }
            message={this.props.leaveMessage}
          />
        </Fragment>
      );
    }
  }

  const mapStateToProps = state => ({
    isFormDirty: isDirty(formName)(state),
    hasFormSubmitSucceeded: hasSubmitSucceeded(formName)(state),
    hasFormSubmitFailed: hasSubmitFailed(formName)(state),
  });

  return withRouter(
    connect(
      mapStateToProps,
      null,
    )(WarnAboutUnsavedChanges),
  );
}

export default warnAboutUnsavedForm;
