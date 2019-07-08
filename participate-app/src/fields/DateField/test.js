//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import DateField   from './index'

//-----------  Definitions  -----------//

const component = shallow(<DateField />)

//-----------  Tests  -----------//

describe('<DateField />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
