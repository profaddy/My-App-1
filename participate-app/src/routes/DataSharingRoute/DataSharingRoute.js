//-----------  Imports  -----------//

import Styled            from './styles'

import React             from 'react'
import PropTypes         from 'prop-types'

import DataSharingForm   from 'forms/DataSharingForm'

//-----------  Component  -----------//

class DataSharingRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { onExit, onSubmit, willShare, canConsent } = this.props

    return (
      <Styled.DataSharingRoute title='Additional Questions'>
        <DataSharingForm
          canConsent={canConsent}
          willShare={willShare}
          onExit={onExit}
          onSubmit={onSubmit}
        />
      </Styled.DataSharingRoute>
    )
  }
}

//-----------  Type Definitions  -----------//

DataSharingRoute.propTypes = {
  willShare  : PropTypes.bool.isRequired,
  onExit     : PropTypes.func.isRequired,
  onSubmit   : PropTypes.func.isRequired,
  canConsent : PropTypes.bool.isRequired,
}

//-----------  Export  -----------//

export default DataSharingRoute
