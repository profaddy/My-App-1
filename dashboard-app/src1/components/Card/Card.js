//-----------  Imports  -----------//

import pick from 'lodash/pick';
import startCase from 'lodash/startCase';

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

//-----------  Component  -----------//

const Card = ({ keys, title, details, children }) => (
  <Styled.Card>
    <Styled.CardTitle>{title}</Styled.CardTitle>

    <Styled.CardDetails>
      {Object.keys(pick(details, keys)).map(key => (
        <li key={key}>
          <strong>{startCase(key)}</strong>
          <span>{details[key] || 'n/a'}</span>
        </li>
      ))}
    </Styled.CardDetails>

    <Styled.CardActions>{children}</Styled.CardActions>
  </Styled.Card>
);

//-----------  Type Definitions  -----------//

Card.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.object.isRequired,
  children: PropTypes.node,
};

//-----------  Export  -----------//

export default Card;
