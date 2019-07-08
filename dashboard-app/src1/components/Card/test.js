//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import Card from './index'

//-----------  Definitions  -----------//

const component = shallow(<Card/>)

//-----------  Tests  -----------//

describe('<Card />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
