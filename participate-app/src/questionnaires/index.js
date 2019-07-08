//-----------  Imports  -----------//

import React           from 'react'
import { Route,
        Redirect }     from 'react-router-dom'

import questionnaires  from 'data/questionnaires'

import ConnectedSwitch from '@miro/core-ui/lib/containers/ConnectedSwitch'

 //-----------  Router Component  -----------//

 export default ({ match }) => (
  <ConnectedSwitch>
    {questionnaires.map(({ slug, form }) => (
      <Route key={slug} path={`${match.path}/${slug}`} component={form} />
    ))}

    <Redirect path={`${match.path}/`} to={`${match.path}/${questionnaires[0].slug}`} />
  </ConnectedSwitch>
)