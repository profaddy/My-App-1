//-----------  Imports  -----------//

import React          from 'react'
import { mount }      from 'enzyme'
import { Provider }   from 'react-redux'

import appStore       from 'models/store'

import JobWrapper from './index'

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <JobWrapper />
  </Provider>
)

//-----------  Tests  -----------//

describe('<JobWrapper />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1)
  })
})
