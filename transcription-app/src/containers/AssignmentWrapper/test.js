//-----------  Imports  -----------//

import React             from 'react'
import { mount }         from 'enzyme'
import { Provider }      from 'react-redux'

import appStore          from 'models/store'

import AssignmentWrapper from './index'

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <AssignmentWrapper />
  </Provider>
)

//-----------  Tests  -----------//

describe('<AssignmentWrapper />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1)
  })
})
