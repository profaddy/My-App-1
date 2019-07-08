//-----------  Imports  -----------//

import { createBrowserHistory } from 'history'

//-----------  Definitions  -----------//

const history = createBrowserHistory({
  basename: ('production' === process.env.NODE_ENV)
    ? `/${process.env.APP_ROOT}/`
    : '/'
})

//-----------  Exports  -----------//

export default history