//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import Label from './index'

//-----------  Definitions  -----------//

const component = shallow(<Label/>)

//-----------  Tests  -----------//

describe('<Label />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
