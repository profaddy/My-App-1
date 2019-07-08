//-----------  Imports  -----------//

import '@babel/polyfill/noConflict'

import React                  from 'react'
import ReactDOM               from 'react-dom'
import { Provider }           from 'react-redux'
import { AppContainer }       from 'react-hot-loader'
import { ThemeProvider }      from 'styled-components'
import { ConnectedRouter }    from 'connected-react-router'

import { AppWrapper as MiroApp } from '@miro/core-ui'

import history                from 'models/history'
import appStore               from 'models/store'
import AppWrapper             from 'containers/AppWrapper'
import LogRocket from 'logrocket'

// Log Rocket Sessions
if(process.env.MIRO_ENV === 'dev') {
  // LogRocket.init('lnbpsr/miro-participant-dev');
  LogRocket.init('lnbpsr/dev-miro-apps');
}

//-----------  Definitions  -----------//

const rootElem = document.getElementById(process.env.APP_ROOT)


//-----------  Rendering  -----------//

function renderApp(Component) {
  return ReactDOM.render(
    <AppContainer>
      <Provider store={appStore}>
        <ThemeProvider theme={{ mode: 'dark' }}>
          <ConnectedRouter history={history} >
            <MiroApp minWidth={34} mounted>
              <Component />
            </MiroApp>
          </ConnectedRouter>
        </ThemeProvider>
      </Provider>
    </AppContainer>
  , rootElem)
}

renderApp(AppWrapper)

//-----------  Hot Module Replacement  -----------//

// Rerender application components when changes detected in development
if ('development' === process.env.NODE_ENV && module.hot){
  module.hot.accept('./containers/AppWrapper', () => {
    const NextApp = require('./containers/AppWrapper').default
    return renderApp(NextApp)
  })
}
