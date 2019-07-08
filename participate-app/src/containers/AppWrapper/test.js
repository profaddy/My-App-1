//-----------  Imports  -----------//

import React          from 'react'
import { mount }      from 'enzyme'
import { Provider }   from 'react-redux'

import appStore       from 'models/store'

import AppWrapper from './index'

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <AppWrapper />
  </Provider>
)

//-----------  Tests  -----------//

describe('<AppWrapper />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1)
  })
})
