//-----------  Imports  -----------//

import React               from 'react'
import { shallow }         from 'enzyme'
import { Provider }        from 'react-redux'
import { MemoryRouter }    from 'react-router-dom'

import appStore            from 'models/store'

import Connected           from './index'
import AssignmentsList     from './AssignmentsList'

import { assignmentsMock } from 'models/assignments/__mocks__/api'
import { assignmentsFunc } from 'models/assignments/selectors'

//-----------  Definitions  -----------//

const data        = assignmentsMock(4)
const assignments = assignmentsFunc(data)

const container = shallow(
  <Provider store={appStore}>
    <Connected />
  </Provider>
)

const component = shallow(
  <MemoryRouter>
    <AssignmentsList assignments={assignments} requestAssignments={() => {}} />
  </MemoryRouter>
).dive().dive()

//-----------  Tests  -----------//

describe('<AssignmentsList />', () => {
  it('renders container', () => {
    expect(container.length).toBe(1)
  })

  it('renders component', () => {
    expect(component.length).toBe(1)
  })

  it('renders empty state', () => {
    component.setProps({ assignments: [] })

    expect(component.exists('[empty]')).toBe(true)
  })

  it('renders error state', () => {
    component.setProps({ error: new Error('error') })

    expect(component.exists('ErrorBlock')).toBe(true)
  })

  it('renders loading state', () => {
    component.setProps({ error: null, isLoading: true })

    expect(component.exists('[title]')).toBe(true)
  })
})
