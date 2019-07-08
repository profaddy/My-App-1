//-----------  Imports  -----------//

import React          from 'react'
import { mount }      from 'enzyme'
import { Provider }   from 'react-redux'

import appStore       from 'models/store'

import WelcomeScreen from './index'

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <WelcomeScreen />
  </Provider>
)

//-----------  Tests  -----------//

describe('<WelcomeScreen />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1)
  })
})
