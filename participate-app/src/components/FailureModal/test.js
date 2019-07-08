//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import FailureModal from './index'

//-----------  Definitions  -----------//

const component = shallow(<FailureModal/>)

//-----------  Tests  -----------//

describe('<FailureModal />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
