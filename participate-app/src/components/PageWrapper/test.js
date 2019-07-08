//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import PageWrapper from './index'

//-----------  Definitions  -----------//

const text = 'Hello'

const component = shallow(
  <PageWrapper title='Test'>
    <h1>{text}</h1>
  </PageWrapper>
)

//-----------  Tests  -----------//

describe('<PageWrapper />', () => {
  it('renders', () => {
    expect(component.length).toBe(1)
  })

  it('renders children', () => {
    expect(component.find('h1').text()).toEqual(text)
  })

  it('renders action', () => {
    component.setProps({ action: (<p>{text}</p>) })

    expect(component.find('p').text()).toEqual(text)
  })
})
