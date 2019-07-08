//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import Transcriber from './index'

//-----------  Definitions  -----------//

const component = shallow(<Transcriber stimuli='n/a' />)

//-----------  Tests  -----------//

describe('<Transcriber />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
