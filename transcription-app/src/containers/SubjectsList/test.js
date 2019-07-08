//-----------  Imports  -----------//

import React               from 'react'
import { mount, shallow }  from 'enzyme'
import { Provider }        from 'react-redux'

import appStore            from 'models/store'

import Connected           from './index'
import SubjectsList        from './SubjectsList'

import { assignmentsMock } from 'models/assignments/__mocks__/api'
import { subjectsFunc }    from 'models/subjects/selectors'

//-----------  Definitions  -----------//

const data     = assignmentsMock(4)
const subjects = subjectsFunc(data)

const container = shallow(
  <Provider store={appStore}>
    <Connected />
  </Provider>
)

const component = mount(
  <SubjectsList subjects={subjects} assignSubject={() => {}} requestSubjects={() => {}} />
)

//-----------  Tests  -----------//

describe('<SubjectsList />', () => {
  it('renders container', () => {
    expect(container.length).toBe(1)
  })

  it('renders component', () => {
    expect(component.length).toBe(1)
  })

  it('updates state on assignment click', () => {
    component.find('Button').first().props().onClick()

    expect(component.state().isAccepting).toEqual(subjects[0].id)
  })

  it('sets proper loading state to assigned subject', () => {
    component.find('Button').at(2).props().onClick()
    component.update()

    const button = component.find('Button').at(2)

    expect(button.props().loading).toEqual(true)
    expect(button.text()).toEqual('Loading')
  })

  it('disabled all buttons when has assignments', () => {
    component.setProps({ hasAssignments: true })

    component.find('Button').forEach(button => {
      expect(button.props().disabled).toEqual(true)
    })
  })

  it('renders empty state', () => {
    component.setProps({ subjects: [] })

    expect(component.exists('[empty]')).toBe(true)
  })

  it('renders error state', () => {
    component.setProps({ error: new Error('error') })

    expect(component.exists('[onRetry]')).toBe(true)
  })

  it('renders loading state', () => {
    component.setProps({ isLoading: true })

    expect(component.exists('[title]')).toBe(true)
  })
})
