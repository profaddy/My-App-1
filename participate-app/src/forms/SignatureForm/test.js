//-----------  Imports  -----------//

import React         from 'react'
import { shallow }   from 'enzyme'

import SignatureForm from './index'

//-----------  Definitions  -----------//

const component = shallow(<SignatureForm />)

//-----------  Tests  -----------//

describe('<SignatureForm />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
