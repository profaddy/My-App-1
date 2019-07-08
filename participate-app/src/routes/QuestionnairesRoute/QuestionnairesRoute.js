//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Component  -----------//

class QuestionnairesRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { props, state } = this

    return (
      <Styled.QuestionnairesRoute title='Lifestyle Questions'>
        <h1>...</h1>
      </Styled.QuestionnairesRoute>
    )
  }
}

//-----------  Type Definitions  -----------//

QuestionnairesRoute.propTypes = {

}

//-----------  Export  -----------//

export default QuestionnairesRoute
