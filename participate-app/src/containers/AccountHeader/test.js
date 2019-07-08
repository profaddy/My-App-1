//-----------  Imports  -----------//

import React          from 'react'
import { mount }      from 'enzyme'
import { Provider }   from 'react-redux'

import appStore       from 'models/store'

import AccountHeader from './index'

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <AccountHeader />
  </Provider>
)

//-----------  Tests  -----------//

describe('<AccountHeader />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1)
  })
})
