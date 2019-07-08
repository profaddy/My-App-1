//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import CreateBatteryWrapper from './index'

//-----------  Definitions  -----------//

const component = shallow(<CreateBatteryWrapper/>)

//-----------  Tests  -----------//

describe('<CreateBatteryWrapper />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
