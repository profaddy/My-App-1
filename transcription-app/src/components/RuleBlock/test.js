//-----------  Imports  -----------//

import faker       from 'faker'

import React       from 'react'
import { shallow } from 'enzyme'

import RuleBlock from './index'

//-----------  Definitions  -----------//

const component = shallow(
  <RuleBlock color='red' title='Testing'>
    {faker.lorem.paragraphs()}
  </RuleBlock>
)

//-----------  Tests  -----------//

describe('<RuleBlock />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
