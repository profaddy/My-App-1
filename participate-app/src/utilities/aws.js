//-----------  Imports  -----------//

import get   from 'lodash/get'

import axios from 'axios'

//-----------  Definitions  -----------//

const aws = axios.create({ baseURL: process.env.AWS_ROOT })

//-----------  Response Handlers  -----------//

aws.interceptors.response.use(res => {
  return get(res, 'data')
}, res => {
  return Promise.reject(res)
})

//-----------  Instance  -----------//

export default aws
