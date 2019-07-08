//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import Button from '@miro/core-ui/lib/components/Button';

import SearchIcon from '@miro/core-ui/lib/assets/icons/search.svg';

//-----------  Component  -----------//

const PageHeader = ({
  title,
  buttonName,
  buttonAction,
  buttonLink,
  ...props
}) => (
  <Styled.PageHeader>
    <Styled.PageTitle>
      <h3>{title}</h3>
    </Styled.PageTitle>
    <Button
      small={true}
      active={true}
      to={buttonLink}
      onClick={buttonAction}
    >
      {buttonName}
    </Button>
  </Styled.PageHeader>
);

//-----------  Type Definitions  -----------//

PageHeader.propTypes = {};

//-----------  Export  -----------//

export default PageHeader;
