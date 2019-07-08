//-----------  Imports  -----------//

import Styled from './styles';
import React from 'react';

//-----------  Component  -----------//

const OrderCard = ({ index, name, duration, isDragging, ...props }) => (
  <Styled.OrderCard isDragging={isDragging}>
    <Styled.index>{index + 1}</Styled.index>
    <Styled.name>{name}</Styled.name>
    <Styled.duration>Duration: {duration}</Styled.duration>
    <span>Test area</span>
    <span>version info</span>
    <span>Details</span>
  </Styled.OrderCard>
);

//-----------  Type Definitions  -----------//

OrderCard.propTypes = {};

//-----------  Export  -----------//

export default OrderCard;
