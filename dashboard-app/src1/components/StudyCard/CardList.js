//-----------  Imports  -----------//

import Styled from './styles';
import React from 'react';
import ListItem from './ListItem';
import moment from 'moment';
//-----------  Component  -----------//

const CardList = ({ content, ...props }) => (
  // <Styled.DL>
  <Styled.UL>
    <ListItem title="Description" content={content.description} />
    <ListItem
      title="Create Date"
      content={moment(content.created).format('MM/DD/YYYY')}
    />
    {/* <ListItem title='Duration' content={ content.modified } /> */}
  </Styled.UL>
  // </Styled.DL>
);

//-----------  Type Definitions  -----------//

CardList.propTypes = {};

//-----------  Export  -----------//

export default CardList;
