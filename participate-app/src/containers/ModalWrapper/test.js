//-----------  Imports  -----------//

import React          from 'react'
import { mount }      from 'enzyme'
import { Provider }   from 'react-redux'

import appStore       from 'models/store'

import ModalWrapper from './index'

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <ModalWrapper />
  </Provider>
)

//-----------  Tests  -----------//

describe('<ModalWrapper />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1)
  })
})
