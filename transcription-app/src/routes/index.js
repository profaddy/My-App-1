//-----------  Imports  -----------//

import React             from 'react'
import { Route,
         Redirect }      from 'react-router-dom'
import Loadable          from 'react-loadable'

import RouteLoader       from '@miro/core-ui/src/components/RouteLoader'

import AssignmentWrapper from 'containers/AssignmentWrapper'
import ModuleWrapper     from 'containers/ModuleWrapper'
import DashboardWrapper  from 'containers/DashboardWrapper'

//-----------  Helpers  -----------//

const load = (component) => Loadable({
  loader  : () => import(`./${component}/index`),
  loading : RouteLoader,
})

//-----------  Router Component  -----------//

export default () => (
  <DashboardWrapper>
    <Route path='/' component={load('DashboardRoute')} exact />
    <Route path='/assignments' component={load('DashboardRoute')} exact />
    <Route path='/assignments/:assignmentID' render={({ match: { url, params } }) => (
      <AssignmentWrapper assignmentID={params.assignmentID}>
        <Route path={`${url}/`} component={load('AssignmentRoute')} exact />
        <Route path={`${url}/modules/:moduleID`} render={({ match: { url, params } }) => (
          <ModuleWrapper moduleID={params.moduleID}>
            <Route path={`${url}/`} component={load('ModuleRoute')} exact />
            <Route path={`${url}/transcriptions`} component={load('ModuleRoute')} exact />
            <Route path={`${url}/transcriptions/:transcriptionID`} component={load('TranscriptionRoute')} />
          </ModuleWrapper>
        )} />
      </AssignmentWrapper>
    )} />
    <Redirect from='/*' to='/' />
  </DashboardWrapper>
)
