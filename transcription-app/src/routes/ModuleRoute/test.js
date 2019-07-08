//-----------  Imports  -----------//

import React            from 'react'
import { mount }        from 'enzyme'
import { Provider }     from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import appStore         from 'models/store'

import ModuleRoute      from './index'

//-----------  Definitions  -----------//

const url = '/assignments/1/modules/1'

const container = mount(
  <Provider store={appStore}>
    <MemoryRouter initialEntries={[url]}>
      <ModuleRoute match={{ url }} />
    </MemoryRouter>
  </Provider>
)

//-----------  Tests  -----------//

describe('<ModuleRoute />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1)
  })
})
