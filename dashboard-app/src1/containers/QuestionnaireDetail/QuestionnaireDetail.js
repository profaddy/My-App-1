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

export const QuestionnaireDetail = ({ detail, ...props }) => (
  <Styled.QuestionnaireDetail>
    <Styled.Poster>
      <img src={gamePoster} />
    </Styled.Poster>
    {detail && (
      <Styled.Content>
        <Styled.Definition>
          <Styled.DefinitionTerm>{detail.name}</Styled.DefinitionTerm>
          <Styled.DefinitionDescription>
            Pages: {detail.pages}
          </Styled.DefinitionDescription>
          <Styled.DefinitionDescription>
            Duration: {detail.duration}
          </Styled.DefinitionDescription>
          <Styled.DefinitionDescription>
            Version: {detail.version}
          </Styled.DefinitionDescription>
        </Styled.Definition>
        <Definition term={'Test Area'} description={detail.testArea} />
        <Definition term={'Description'} description={detail.description} />
      </Styled.Content>
    )}
  </Styled.QuestionnaireDetail>
);

const Definition = ({ term, description }) => (
  <Styled.Definition>
    <Styled.DefinitionTerm>{term}</Styled.DefinitionTerm>
    <Styled.DefinitionDescription>{description}</Styled.DefinitionDescription>
  </Styled.Definition>
);

//-----------  Type Definitions  -----------//

QuestionnaireDetail.propTypes = {};

//-----------  Export  -----------//

export default QuestionnaireDetail;
