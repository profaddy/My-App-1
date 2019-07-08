//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import ConsentForm from './index'

//-----------  Definitions  -----------//

const component = shallow(<ConsentForm/>)

//-----------  Tests  -----------//

describe('<ConsentForm />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
