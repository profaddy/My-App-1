//-----------  Imports  -----------//

import Styled from './styles';
import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import FormField from '@miro/core-ui/lib/forms/FormField';
import FormSubmit from '@miro/core-ui/lib/forms/FormSubmit';
import Button from '@miro/core-ui/lib/components/Button';
import gamePoster from 'assets/poster.png';

//-----------  Component  -----------//

export const GameDetail = ({ detail, ...props }) => (
  <Styled.GameDetail>
    <Styled.Poster>
      <img src={gamePoster} alt="" />
    </Styled.Poster>
    {detail && (
      <Styled.Content>
        <Definition term={detail.name} description={detail.duration} />
        <Definition term={'Test Area'} description={detail.test_area} />
        <Definition term={'Description'} description={detail.description} />
      </Styled.Content>
    )}
  </Styled.GameDetail>
);

const Definition = ({ term, description }) => (
  <Styled.Definition>
    <Styled.DefinitionTerm>{term}</Styled.DefinitionTerm>
    <Styled.DefinitionDescription>{description}</Styled.DefinitionDescription>
  </Styled.Definition>
);

//-----------  Type Definitions  -----------//

GameDetail.propTypes = {};

//-----------  Export  -----------//

export default GameDetail;
