//-----------  Imports  -----------//

import Styled from './styles';
import React from 'react';

//-----------  Component  -----------//

const ListItem = ({ title, content, ...props }) => (
  <Styled.ListItem>
    <Styled.ItemTitle>{title}</Styled.ItemTitle>
    <Styled.ItemDescription>{content}</Styled.ItemDescription>
  </Styled.ListItem>
);

//-----------  Type Definitions  -----------//

ListItem.propTypes = {};

//-----------  Export  -----------//

export default ListItem;
