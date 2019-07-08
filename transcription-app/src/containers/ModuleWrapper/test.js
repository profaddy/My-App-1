//-----------  Imports  -----------//

import React                  from 'react'
import { shallow }            from 'enzyme'
import { Provider }           from 'react-redux'
import { MemoryRouter }       from 'react-router-dom'

import appStore               from 'models/store'

import Connected              from './index'
import ModuleWrapper          from './ModuleWrapper'

import { roleMock,
         assignmentMock }     from 'models/assignments/__mocks__/api'
import { currentModulesFunc } from 'models/modules/selectors'

//-----------  Definitions  -----------//

const role    = roleMock()
const data    = assignmentMock()
const modules = currentModulesFunc(data, role)
const module  = modules[Object.keys(modules)[0]]

const container = shallow(
  <Provider store={appStore}>
    <Connected />
  </Provider>
)

const component = shallow(
  <MemoryRouter>
    <ModuleWrapper module={module} />
  </MemoryRouter>
).dive().dive()

//-----------  Tests  -----------//

describe('<ModuleWrapper />', () => {
  it('renders container', () => {
    expect(container.length).toBe(1)
  })

  it('renders component', () => {
    expect(component.length).toBe(1)
  })

  it('opens sidebar', () => {
    component.find('a').props().onClick()

    expect(component.state().sidebar).toEqual('annotation')
  })

  it('closes sidebar', () => {
    component.find('AnnotationRules').props().onClose()

    expect(component.state().sidebar).toEqual(null)
  })
})
