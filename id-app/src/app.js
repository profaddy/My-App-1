//-----------  Imports  -----------//

import '@babel/polyfill/noConflict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';

import history from 'models/history';
import appStore from 'models/store';
import AppRoutes from 'routes/index';

// Log Rocket Sessions
import LogRocket from 'logrocket';

// Log Rocket Sessions
if (process.env.MIRO_ENV === 'dev') {
  // LogRocket.init('lnbpsr/miro-id-app-dev');
  LogRocket.init('lnbpsr/dev-miro-apps');
}

//-----------  Definitions  -----------//

const rootElem = document.getElementById(process.env.APP_ROOT);

//-----------  Rendering  -----------//

function renderApp(Component) {
  return ReactDOM.render(
    <AppContainer>
      <Provider store={appStore}>
        <ThemeProvider theme={{ mode: 'dark' }}>
          <ConnectedRouter history={history}>
            <Component />
          </ConnectedRouter>
        </ThemeProvider>
      </Provider>
    </AppContainer>,
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
