//-----------  Imports  -----------//

import React          from 'react'
import { mount }      from 'enzyme'
import { Provider }   from 'react-redux'

import appStore       from 'models/store'

import StudyHeader from './index'

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <StudyHeader />
  </Provider>
)

//-----------  Tests  -----------//

describe('<StudyHeader />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1)
  })
})
