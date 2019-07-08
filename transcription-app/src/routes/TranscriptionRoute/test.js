//-----------  Imports  -----------//

import React              from 'react'
import { mount, shallow } from 'enzyme'
import { Provider }       from 'react-redux'
import { MemoryRouter }   from 'react-router-dom'

import appStore           from 'models/store'

import Connected          from './index'
import TranscriptionRoute from './TranscriptionRoute'

import { roleMock,
         assignmentMock }     from 'models/assignments/__mocks__/api'
import { currentModulesFunc } from 'models/modules/selectors'

//-----------  Definitions  -----------//

const role          = roleMock()
const data          = assignmentMock()
const modules       = currentModulesFunc(data, role)
const module        = modules[Object.keys(modules)[0]]
const transcription = module.audioAssignments[0]

const url = '/assignments/1/modules/1/transcriptions/1'

const container = mount(
  <Provider store={appStore}>
    <MemoryRouter initialEntries={[url]}>
      <Connected />
    </MemoryRouter>
  </Provider>
)

const component = shallow(
  <MemoryRouter>
    <TranscriptionRoute role={role} transcription={transcription} onSubmit={() => {}} />
  </MemoryRouter>
).dive().dive()

//-----------  Tests  -----------//

describe('<TranscriptionRoute />', () => {
  it('renders container', () => {
    expect(container.length).toBe(1)
  })

  it('renders component', () => {
    expect(component.length).toBe(1)
  })

  it('handles text change (for transcribers)', () => {
    component.find('[onChange]').props().onChange({ target: { value: url }})

    const state    = component.state().text
    const expected = url

    expect(state).toEqual(expected)
  })

  it('handles transcription submission (for transcribers)', () => {
    component.find('Button').props().onClick()

    const state    = component.state().isSubmitting
    const expected = true

    expect(state).toEqual(expected)
  })

  it('displays diff comparison for reviewers', () => {
    component.setProps({ role: roleMock(true) })

    const element  = component.find('DiffCompare').length
    const expected = 1

    expect(element).toEqual(expected)
  })
})
