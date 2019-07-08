//-----------  Imports  -----------//

import React            from 'react'
import { Route,
         Redirect }     from 'react-router-dom'
import Loadable         from 'react-loadable'

import RouteLoader      from '@miro/core-ui/lib/components/RouteLoader'
import ConnectedSwitch  from '@miro/core-ui/lib/containers/ConnectedSwitch'

import IndexRoute       from 'routes/IndexRoute'
import ConsentRoute     from 'routes/ConsentRoute'
import CapacityRoute    from 'routes/CapacityRoute'
import SignatureRoute   from 'routes/SignatureRoute'
import DataSharingRoute from 'routes/DataSharingRoute'
import ReleaseRoute     from 'routes/ReleaseRoute'

import Questionnaires   from 'questionnaires/index'

//-----------  Helpers  -----------//

const load = (component) => Loadable({
  loader  : () => import(`./${component}/index`),
  loading : RouteLoader,
})

//-----------  Router Component  -----------//

export default () => (
  <ConnectedSwitch style={{ position: 'relative' }}>
    <Route path='/' component={IndexRoute} exact />
    <Route path='/consent/info' component={ConsentRoute} />
    <Route path='/consent/capacity' component={CapacityRoute} />
    <Route path='/consent/signature' component={SignatureRoute} />
    <Route path='/consent/sharing' component={DataSharingRoute} />
    <Route path='/questionnaires' component={Questionnaires} />
    <Route path='/release' component={ReleaseRoute} />

    <Redirect from='/consent' to='/consent/info' />
    <Redirect from='/*' to='/' />
  </ConnectedSwitch>
)