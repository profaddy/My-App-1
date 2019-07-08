//-----------  Imports  -----------//

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import RouteLoader from 'components/RouteLoader';

//-----------  Helpers  -----------//

const load = component =>
  Loadable({
    loader: () => import(`./${component}/index`),
    loading: RouteLoader,
  });

//-----------  Router Component  -----------//

export default () => (
  <Switch>
    <Route path="/" component={load('IndexRoute')} exact />
    <Redirect from="/*" to="/" />
  </Switch>
);
