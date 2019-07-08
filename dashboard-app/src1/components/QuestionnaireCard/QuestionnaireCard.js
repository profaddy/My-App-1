//-----------  Imports  -----------//

import Styled from './styles';
import React from 'react';
import CheckboxFields from '@miro/core-ui/lib/forms/CheckboxFields';
import CheckboxField from '@miro/core-ui/lib/forms/CheckboxField';
import { Field, reduxForm } from 'redux-form';

//-----------  Component  -----------//

const QuestionnaireCard = ({
  content,
  viewAction,
  chooseAction,
  checked,
  ...props
}) => (
  <Styled.QuestionnaireCard {...props}>
    <Styled.CheckboxContainer>
      <div>
        <div className="selector-wrapper">
          <input
            type="checkbox"
            id={`questionnaire-${content.id}`}
            name={`questionnaire-${content.id}`}
            onChange={chooseAction}
            checked={checked}
          />
          <label htmlFor={`questionnaire-${content.id}`} />
        </div>
      </div>
    </Styled.CheckboxContainer>
    <Styled.InnerCard>
      <Styled.Name>{content.name}</Styled.Name>
      <Styled.Pages>Pages: {content.duration}</Styled.Pages>
      <Styled.Duration>Duration: {content.duration}</Styled.Duration>
      <Styled.View onClick={() => viewAction(true, content.id)}>
        View
      </Styled.View>
    </Styled.InnerCard>
  </Styled.QuestionnaireCard>
);

//-----------  Type Definitions  -----------//

QuestionnaireCard.propTypes = {};

//-----------  Export  -----------//

export default QuestionnaireCard;
