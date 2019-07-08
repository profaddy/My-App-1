//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import CardWrapper from './index'

//-----------  Definitions  -----------//

const component = shallow(<CardWrapper/>)

//-----------  Tests  -----------//

describe('<CardWrapper />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
