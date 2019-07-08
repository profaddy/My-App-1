//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import AnnotationRules from './index'

//-----------  Definitions  -----------//

const component = shallow(<AnnotationRules onClose={() => {}} />)

//-----------  Tests  -----------//

describe('<AnnotationRules />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
