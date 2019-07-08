//-----------  Imports  -----------//

import Styled            from './styles'

import React             from 'react'
import PropTypes         from 'prop-types'

import  WelcomScreen from 'containers/WelcomeScreen'

//-----------  Component  -----------//

class IndexRoute extends React.PureComponent {

  //-----------  HTML Render  -----------//

  render(){
    const { onExit, hasEula, hasStudy, onSubmit, ...props } = this.props

    return (
      <Styled.IndexRoute title={process.env.APP_TITLE}>
        <WelcomScreen />
      </Styled.IndexRoute>
    )
  }
}

//-----------  Type Definitions  -----------//

IndexRoute.propTypes = {
  hasEula  : PropTypes.bool.isRequired,
  hasStudy : PropTypes.bool.isRequired,
  onSubmit : PropTypes.func.isRequired,
  onExit   : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default IndexRoute
