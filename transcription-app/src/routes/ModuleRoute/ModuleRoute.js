//-----------  Imports  -----------//

import get             from 'lodash/get'
import compact         from 'lodash/compact'

import React           from 'react'
import PropTypes       from 'prop-types'
import { Redirect }    from 'react-router-dom'

import { moduleShape } from 'models/modules/helpers'

//-----------  Component  -----------//

class ModuleRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { match, module, ...props } = this.props

    const parts = compact(match.url.split('/'))
    const tsrID = get(module, 'audioAssignments.0.id')

    const to = tsrID && [ ...parts, 'transcriptions', tsrID ].join('/')

    return (!to) ? null : (<Redirect to={'/' + to} />)
  }
}

//-----------  Type Definitions  -----------//

ModuleRoute.propTypes = {
  module: PropTypes.shape(moduleShape)
}

//-----------  Export  -----------//

export default ModuleRoute
