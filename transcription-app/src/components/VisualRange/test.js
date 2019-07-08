//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import VisualRange from './index'

//-----------  Definitions  -----------//

const component = shallow(<VisualRange value={0} color='#0290ff' />)

//-----------  Tests  -----------//

describe('<VisualRange />', () => {
  it('renders', () => {
    expect(component.length).toBe(1)
  })
})
