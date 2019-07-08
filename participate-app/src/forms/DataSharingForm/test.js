//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import DataSharingForm from './index'

//-----------  Definitions  -----------//

const component = shallow(<DataSharingForm />)

//-----------  Tests  -----------//

describe('<DataSharingForm />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
