//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import Stat from './index'

//-----------  Definitions  -----------//

const component = shallow(<Stat/>)

//-----------  Tests  -----------//

describe('<Stat />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
