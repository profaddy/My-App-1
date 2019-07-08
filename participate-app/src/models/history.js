//-----------  Imports  -----------//

import { createBrowserHistory } from 'history'

import { basename }             from 'utilities/routing'

//-----------  Definitions  -----------//

const history = createBrowserHistory({
  basename: '/'
})

//-----------  Exports  -----------//

export default history