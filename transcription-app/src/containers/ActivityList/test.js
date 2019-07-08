//-----------  Imports  -----------//

import React              from 'react'
import { mount, shallow } from 'enzyme'
import { Provider }       from 'react-redux'

import appStore           from 'models/store'

import Connected          from './index'
import ActivityList       from './ActivityList'

import { activitiesMock } from 'models/activity/__mocks__/api'

//-----------  Definitions  -----------//

const activity       = activitiesMock(4)
const requestActiviy = jest.fn()

const container = shallow(
  <Provider store={appStore}>
    <Connected />
  </Provider>
)

const component = mount(
  <ActivityList activity={activity} requestActiviy={requestActiviy} />
)

//-----------  Tests  -----------//

describe('<ActivityList />', () => {
  it('renders container', () => {
    expect(container.length).toBe(1)
  })

  it('renders component', () => {
    expect(component.length).toBe(1)
  })

  it('calls requst rankings on mount', () => {
    component.instance().componentDidMount()

    expect(requestActiviy).toHaveBeenCalled()
  })

  it('renders error state', () => {
    component.setProps({ activity: [], error: new Error('error') })

    expect(component.exists('[onRetry]')).toBe(true)
  })

  it('renders loading state', () => {
    component.setProps({ error: null, isLoading: true })

    expect(component.exists('[title]')).toBe(true)
  })
})
