//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import AudioControls from './index'

//-----------  Definitions  -----------//

const component = shallow(<AudioControls/>)

//-----------  Tests  -----------//

describe('<AudioControls />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
