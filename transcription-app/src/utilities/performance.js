//-----------  Imports  -----------//

import isArray from 'lodash/isArray'

//-----------  Helpers  -----------//

export function estimateTime(filesOrCount){
  const count = isArray(filesOrCount) ? filesOrCount.length : parseInt(filesOrCount)
  return count * 300
}