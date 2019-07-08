//-----------  Imports  -----------//

import omitBy from 'lodash/omitBy';
import isFunction from 'lodash/isFunction';
import isUndefined from 'lodash/isUndefined';

import React from 'react';
// import PropTypes from 'prop-types';

import { errorClass } from 'utilities/constants';

import Button from 'components/Button';
import FieldError from 'forms/FieldError';

//-----------  Definitions  -----------//

function findState({ submitting, submitSucceeded, submitFailed }) {
  if (submitting) return 'loading';
  if (submitFailed) return 'error';
  if (submitSucceeded) return 'success';
  return null;
}

function highlightError() {
  setTimeout(() => {
    const elem = document.getElementsByClassName(errorClass)[0];

    if (!!elem) {
      if (isFunction(elem.focus)) elem.focus();
      if (isFunction(elem.scrollIntoView))
        elem.scrollIntoView({ behavior: 'smooth' });
    }
  }, 10);
}

//-----------  Component  -----------//

class FormSubmit extends React.Component {
  state = {
    submitState: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    const isDirty = this.props.pristine !== nextProps.pristine;
    const isDisabled = this.props.disabled !== nextProps.disabled;
    const isDifferent = this.state.submitState !== nextState.submitState;
    const isSucceeded =
      this.props.submitSucceeded !== nextProps.submitSucceeded;
    const canChange = this.props.canReset
      ? true
      : 'success' !== this.state.submitState;
    const textChange = this.props.text !== nextProps.text;
    const childChange = this.props.children !== nextProps.children;

    if (!this.props.submitFailed && nextProps.submitFailed) highlightError();

    if (nextState.submitState == null && nextProps.submitting) return false;

    return (
      isDirty ||
      isDisabled ||
      isSucceeded ||
      (isDifferent && canChange) ||
      textChange ||
      childChange
    );
  }

  componentWillReceiveProps(nextProps) {
    const propsChange =
      this.props.submitting !== nextProps.submitting ||
      this.props.submitFailed !== nextProps.submitFailed ||
      this.props.submitSucceeded !== nextProps.submitSucceeded;

    if (propsChange) {
      const nextState = findState(nextProps);
      clearTimeout(this.canReset);

      if ('loading' === nextState) this.setState({ submitState: nextState });
      if ('error' === nextState)
        this.setState({ submitState: nextState }, this.canResetState);
      else if ('loading' === this.state.submitState && 'success' === nextState)
        this.canReset = setTimeout(
          () => this.setState({ submitState: nextState }),
          750,
        );
      else if ('success' === this.state.submitState && this.props.canReset)
        this.canReset = setTimeout(
          () => this.setState({ submitState: null }),
          2000,
        );
      else this.setState({ submitState: nextState });
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.submitting &&
      !this.props.submitting &&
      this.props.submitFailed
    )
      highlightError();
  }

  componentWillUnmount() {
    // Clear any setTimeout calls that might happen after unmounting
    clearTimeout(this.canReset);
  }

  //-----------  Helpers  -----------//

  canResetState = () => {
    this.canReset = setTimeout(
      () => this.setState({ submitState: null }),
      1200,
    );
  };

  //-----------  Event Handlers  -----------//

  onSubmit = () => {
    this.canResetState();

    if (this.props.submitFailed) {
      this.setState({ submitState: 'error' });
      highlightError();
    }
  };

  //-----------  HTML Render  -----------//

  render() {
    const {
      text,
      small,
      error,
      active,
      canReset,
      disabled,
      children,
      submitSucceeded,
    } = this.props;
    const { submitState } = this.state;

    const hasError = 'error' === submitState;
    const isLoading = 'loading' === submitState;
    const isDisabled = disabled || isLoading || (!canReset && submitSucceeded);
    const buttonText = text || children || 'Submit';
    const buttonProps = omitBy({ small, active }, isUndefined);

    return (
      <Button
        type="submit"
        error={hasError}
        loading={isLoading}
        disabled={isDisabled}
        onClick={this.onSubmit}
        active={true}
        {...buttonProps}
      >
        {buttonText}

        <FieldError isActive={!!error} isInvalid={!!error}>
          {error}
        </FieldError>
      </Button>
    );
  }
}

//-----------  Type Definitions  -----------//

FormSubmit.propTypes = {};

//-----------  Export  -----------//

export default FormSubmit;
