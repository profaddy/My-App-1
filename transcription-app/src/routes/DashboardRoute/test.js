//-----------  Imports  -----------//

import React              from 'react'
import { mount, shallow } from 'enzyme'
import { Provider }       from 'react-redux'
import { MemoryRouter }   from 'react-router-dom'

import appStore           from 'models/store'

import Connected          from './index'
import DashboardRoute     from './DashboardRoute'

//-----------  Definitions  -----------//

const url = '/'

const container = mount(
  <Provider store={appStore}>
    <MemoryRouter initialEntries={[url]}>
      <Connected />
    </MemoryRouter>
  </Provider>
)

const handler   = jest.spyOn(DashboardRoute.prototype, 'closeModal')
const component = shallow(
  <DashboardRoute history={{ replace: () => {} }} />
)

//-----------  Tests  -----------//

describe('<DashboardRoute />', () => {
  it('renders container', () => {
    expect(container.length).toBe(1)
  })

  it('renders component', () => {
    expect(component.length).toBe(1)
  })

  it('opens modal on completion', () => {
    expect(component.find('Modal').props().isOpen).toEqual(false)
    component.setProps({ completed: '123456' })

    expect(component.find('Modal').props().isOpen).toEqual(true)
  })

  it('closes modal on request close', () => {
    component.find('Modal').props().onRequestClose()

    expect(handler).toHaveBeenCalled()
  })
})
