//-----------  Imports  -----------//

import Styled from './styles';
import React from 'react';
import CheckboxFields from '@miro/core-ui/lib/forms/CheckboxFields';
import CheckboxField from '@miro/core-ui/lib/forms/CheckboxField';
import { Field, reduxForm } from 'redux-form';
// import CheckboxField from 'components/CheckboxField';

//-----------  Component  -----------//

const GameCard = ({
  content,
  checked,
  input,
  viewAction,
  chooseAction,
  ...props
}) => (
  <Styled.GameCard {...props}>
    <Styled.CheckboxContainer>
      <div>
        <div className="selector-wrapper">
          <input
            type="checkbox"
            id={`game-${content.id}`}
            name={`game-${content.id}`}
            onChange={chooseAction}
            checked={checked}
          />
          <label htmlFor={`game-${content.id}`} />
        </div>
      </div>
      <label />
    </Styled.CheckboxContainer>
    <Styled.InnerCard>
      <Styled.Duration>Duration: {content.duration}</Styled.Duration>
      <Styled.Name>{content.name}</Styled.Name>
      <Styled.View onClick={() => viewAction(true, content.id)}>
        View
      </Styled.View>
    </Styled.InnerCard>
  </Styled.GameCard>
);

//-----------  Type Definitions  -----------//

GameCard.propTypes = {};

//-----------  Export  -----------//

export default GameCard;
