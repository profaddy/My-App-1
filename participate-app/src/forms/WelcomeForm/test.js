//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import WelcomeForm from './index'

//-----------  Definitions  -----------//

const component = shallow(<WelcomeForm/>)

//-----------  Tests  -----------//

describe('<WelcomeForm />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
