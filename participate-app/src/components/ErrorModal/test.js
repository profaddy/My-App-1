//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import ErrorModal from './index'

//-----------  Definitions  -----------//

const component = shallow(<ErrorModal/>)

//-----------  Tests  -----------//

describe('<ErrorModal />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
