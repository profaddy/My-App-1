//-----------  Imports  -----------//

import React              from 'react'
import { mount, shallow } from 'enzyme'
import { Provider }       from 'react-redux'

import appStore           from 'models/store'

import Connected          from './index'
import RankingsList       from './RankingsList'

import { rankingsMock }   from 'models/rankings/__mocks__/api'

//-----------  Definitions  -----------//

const rankings        = rankingsMock(4)
const requestRankings = jest.fn()

const container = shallow(
  <Provider store={appStore}>
    <Connected />
  </Provider>
)

const component = mount(
  <RankingsList rankings={rankings} requestRankings={requestRankings} />
)

//-----------  Tests  -----------//

describe('<RankingsList />', () => {
  it('renders container', () => {
    expect(container.length).toBe(1)
  })

  it('renders component', () => {
    expect(component.length).toBe(1)
  })

  it('calls requst rankings on mount', () => {
    component.instance().componentDidMount()

    expect(requestRankings).toHaveBeenCalled()
  })

  it('renders error state', () => {
    component.setProps({ rankings: [], error: new Error('error') })

    expect(component.exists('[onRetry]')).toBe(true)
  })

  it('renders loading state', () => {
    component.setProps({ error: null, isLoading: true })

    expect(component.exists('[title]')).toBe(true)
  })
})
