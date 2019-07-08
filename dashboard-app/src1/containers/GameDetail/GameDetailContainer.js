//-----------  Imports  -----------//

import React from 'react';
import GameDetail from './GameDetail';

//-----------  Component  -----------//

class GameDetailContainer extends React.Component {
  // componentDidMount() {}

  //-----------  HTML Render  -----------//

  render() {
    const { ...props } = this.props;

    return <GameDetail {...props} />;
  }
}

//-----------  Type Definitions  -----------//

GameDetail.propTypes = {};

//-----------  Export  -----------//

export default GameDetail;
