//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import DropSection from './index'

//-----------  Definitions  -----------//

const component = shallow(<DropSection/>)

//-----------  Tests  -----------//

describe('<DropSection />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
