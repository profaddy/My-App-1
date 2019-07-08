//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import StaticBase  from './index'

//-----------  Definitions  -----------//

const component = shallow(<StaticBase />)

//-----------  Tests  -----------//

describe('<StaticBase />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
