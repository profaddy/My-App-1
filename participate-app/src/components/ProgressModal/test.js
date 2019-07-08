//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import ProgressModal from './index'

//-----------  Definitions  -----------//

const component = shallow(<ProgressModal/>)

//-----------  Tests  -----------//

describe('<ProgressModal />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
