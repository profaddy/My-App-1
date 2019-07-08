//-----------  Imports  -----------//
import React from 'react';
import { parse, stringify } from 'query-string';

//-----------  Validation  -----------//

//-----------  Component  -----------//

const RedirectRoute = ({ ...props }) => {
  const { uid, verify, ...searchQuery } = parse(props.location.search);

  //Handle referrer storing and redirection

  if (verify && !uid) {
    props.history.push(`/verify/${verify}${'?' + stringify(searchQuery)}`);
  } else if (verify && uid) {
    props.history.push(
      `/reset/${uid}/${verify}${'?' + stringify(searchQuery)}`,
    );
  } else {
    props.history.push(`/signin${'?' + stringify(searchQuery)}`);
  }

  return <div />;
};

export default RedirectRoute;
