//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import ReadingExamples from './index'

//-----------  Definitions  -----------//

const component = shallow(<ReadingExamples onClose={() => {}} />)

//-----------  Tests  -----------//

describe('<ReadingExamples />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
