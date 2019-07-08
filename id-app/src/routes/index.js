//-----------  Imports  -----------//

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import get from 'lodash/get';

import RouteLoader from '@miro/core-ui/lib/components/RouteLoader';
import ConnectedSwitch from '@miro/core-ui/lib/containers/ConnectedSwitch';

import RedirectRoute from './redirect';
import SignIn from 'containers/SignIn';
import SignUp from 'containers/SignUp';
import SignupSuccess from 'containers/SignupSuccess';
import ForgotPassword from 'containers/ForgotPassword';
import ForgotPasswordSuccess from 'containers/ForgotPasswordSuccess';
import SetPassword from 'containers/SetPassword';
import SidebarWrapper from 'components/SidebarWrapper';
import EmailVerification from 'containers/EmailVerification';

//-----------  Helpers  -----------//

const load = component =>
  Loadable({
    loader: () => import(`./${component}/index`),
    loading: RouteLoader,
  });

const withSidebar = (Component, props) => (
  <SidebarWrapper>{<Component {...props} />}</SidebarWrapper>
);

const userTypeMap = {
  pi: 'principal investigator',
};
//-----------  Router Component  -----------//

export default () => (
  <ConnectedSwitch>
    <Route path="/" component={RedirectRoute} exact />
    <Route path="/signin" render={props => withSidebar(SignIn, props)} exact />
    <Route
      path="/signup/:type"
      render={props =>
        withSidebar(SignUp, {
          ...props,
          initialValues: {
            type:
              userTypeMap[get(props, ['match', 'params', 'type'])] ||
              get(props, ['match', 'params', 'type']),
          },
        })
      }
      exact
    />
    <Route
      path="/forgot-password"
      render={props => withSidebar(ForgotPassword, props)}
      exact
    />
    <Route
      path="/forgot-password/reset"
      render={props => withSidebar(ForgotPasswordSuccess, props)}
      exact
    />
    <Route
      path="/signup/success/:type"
      render={props => withSidebar(SignupSuccess, props)}
      exact
    />
    <Route
      path="/reset/:uid/:token"
      render={props => withSidebar(SetPassword, props)}
      exact
    />
    <Route
      path="/verify/:token"
      render={props => withSidebar(EmailVerification, props)}
      exact
    />
    {/* <Route
      path="/tos/"
      render={props => withSidebar(ToS, props)}
      exact
    /> */}
    <Redirect from="/*" to="/" />
  </ConnectedSwitch>
);
