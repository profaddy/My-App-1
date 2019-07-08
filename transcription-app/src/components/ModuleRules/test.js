//-----------  Imports  -----------//

import React       from 'react'
import { mount } from 'enzyme'

import ModuleRules from './index'

//-----------  Definitions  -----------//

const activities = ['Repetition', 'Reading', 'Picture', 'Categories', 'Letter']
const component  = mount(<ModuleRules openSidebar = {() => {}} />)

//-----------  Tests  -----------//

describe('<ModuleRules />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })

  it('renders each specific ruleset', () => {
    activities.forEach(activity => {
      component.setProps({ activity })
      const title = component.find('a[color] h5').text()

      expect(title).toEqual(expect.stringContaining(activity))
    })
  })
})
