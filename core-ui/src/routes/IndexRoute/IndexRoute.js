//-----------  Imports  -----------//

import Styled from './styles';
import React from 'react';
import Styleguide from 'components/Styleguide';

//-----------  Component  -----------//

class IndexRoute extends React.Component {
  //-----------  HTML Render  -----------//

  render() {
    return (
      <Styled.IndexRoute>
        <Styleguide />
      </Styled.IndexRoute>
    );
  }
}

//-----------  Type Definitions  -----------//

IndexRoute.propTypes = {};

//-----------  Export  -----------//

export default IndexRoute;
