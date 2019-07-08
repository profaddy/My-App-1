//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import TabLinks from './index'

//-----------  Definitions  -----------//

const component = shallow(<TabLinks/>)

//-----------  Tests  -----------//

describe('<TabLinks />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
