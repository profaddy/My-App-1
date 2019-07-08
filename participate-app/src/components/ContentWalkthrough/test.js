//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import ContentWalkthrough from './index'

//-----------  Definitions  -----------//

const component = shallow(<ContentWalkthrough/>)

//-----------  Tests  -----------//

describe('<ContentWalkthrough />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
