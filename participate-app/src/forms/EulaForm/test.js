//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import EulaForm from './index'

//-----------  Definitions  -----------//

const component = shallow(<EulaForm/>)

//-----------  Tests  -----------//

describe('<EulaForm />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
