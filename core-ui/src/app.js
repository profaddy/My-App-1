//-----------  Imports  -----------//

import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';

import AppWrapper from 'containers/AppWrapper';
import appStore, { history } from 'models/app/store';
import AppRoutes from 'routes/index';

//-----------  Definitions  -----------//

const rootElem = document.getElementById(process.env.APP_ROOT);

//-----------  Rendering  -----------//

function renderApp(Component) {
  return ReactDOM.render(
    <Provider store={appStore}>
      <ThemeProvider theme={{ mode: 'light' }}>
        <ConnectedRouter history={history}>
          <AppContainer>
            <AppWrapper>
              <Component />
            </AppWrapper>
          </AppContainer>
        </ConnectedRouter>
      </ThemeProvider>
    </Provider>,
    rootElem,
  );
}

renderApp(AppRoutes);

//-----------  Hot Module Replacement  -----------//

// Rerender application components when changes detected in development
if ('development' === process.env.NODE_ENV && module.hot) {
  module.hot.accept('./routes/index', () => {
    const NextApp = require('./routes/index').default;
    return renderApp(NextApp);
  });
}
