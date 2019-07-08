//-----------  Imports  -----------//

import get     from 'lodash/get'
import compact from 'lodash/compact'

//-----------  Helpers  -----------//

export function getBasename(){
  return 'TRR'

  // if (!window) return ''

  // const paths = get(window, 'location.pathname')
  // return compact(paths.split('/'))[0] || ''
}

//-----------  Exports  -----------//

export const basename = getBasename()
