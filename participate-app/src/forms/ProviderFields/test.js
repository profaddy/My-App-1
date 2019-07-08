//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import ProviderFields from './index'

//-----------  Definitions  -----------//

const component = shallow(<ProviderFields/>)

//-----------  Tests  -----------//

describe('<ProviderFields />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
