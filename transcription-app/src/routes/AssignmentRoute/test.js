//-----------  Imports  -----------//

import React                  from 'react'
import { mount, shallow }     from 'enzyme'
import { Provider }           from 'react-redux'
import { MemoryRouter }       from 'react-router-dom'

import appStore               from 'models/store'

import Connected              from './index'
import AssignmentRoute        from './AssignmentRoute'

import { roleMock,
         assignmentMock }     from 'models/assignments/__mocks__/api'
import { currentModulesFunc,
         orderedModulesFunc } from 'models/modules/selectors'

//-----------  Definitions  -----------//

const role       = roleMock()
const data       = assignmentMock()
const modulesObj = currentModulesFunc(data, role)
const modules    = orderedModulesFunc(modulesObj)

const url = '/assignments/1'

const container = mount(
  <Provider store={appStore}>
    <MemoryRouter initialEntries={[url]}>
      <Connected />
    </MemoryRouter>
  </Provider>
)

const component = shallow(
  <MemoryRouter>
    <AssignmentRoute modules={modules} />
  </MemoryRouter>
).dive().dive()

//-----------  Tests  -----------//

describe('<AssignmentRoute />', () => {
  it('renders container', () => {
    expect(container.length).toBe(1)
  })

  it('renders component', () => {
    expect(component.length).toBe(1)
  })
})
