//-----------  Imports  -----------//

import '@babel/polyfill/noConflict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';

import { AppWrapper  } from '@miro/core-ui';

import history from 'models/history';
import appStore from 'models/store';
import AppRoutes from 'routes/index';
// import SearchForm from 'containers/SearchForm';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
//-----------  Definitions  -----------//

const rootElem = document.getElementById(process.env.APP_ROOT);

//-----------  Rendering  -----------//

function renderApp(Component) {
  return ReactDOM.render(
    <AppContainer>
      <Provider store={appStore}>
        <ThemeProvider theme={{ mode: 'dark' }}>
          <ConnectedRouter history={history}>
            <div>
              <ReduxToastr
                timeOut={4000}
                newestOnTop={false}
                preventDuplicates
                position="top-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick
              />
              <AppWrapper minWidth={13}>
                <Component />
              </AppWrapper>
            </div>
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
