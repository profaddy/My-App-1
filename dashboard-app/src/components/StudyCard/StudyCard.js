//-----------  Imports  -----------//

import Styled from './styles';
import React from 'react';
import CardList from './CardList';

//-----------  Component  -----------//

const StudyCard = ({ content, onClick, ...props }) => (
  <Styled.StudyCard {...props}>
    <Styled.CardTitle>{content.name}</Styled.CardTitle>
    <CardList content={content} />
  </Styled.StudyCard>
);

//-----------  Type Definitions  -----------//

StudyCard.propTypes = {};

//-----------  Export  -----------//

export default StudyCard;
