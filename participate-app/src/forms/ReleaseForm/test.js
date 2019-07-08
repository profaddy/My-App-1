//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import ReleaseForm from './index'

//-----------  Definitions  -----------//

const component = shallow(<ReleaseForm/>)

//-----------  Tests  -----------//

describe('<ReleaseForm />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
