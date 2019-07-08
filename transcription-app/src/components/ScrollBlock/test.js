//-----------  Imports  -----------//

import faker       from 'faker'

import React       from 'react'
import { mount }   from 'enzyme'

import ScrollBlock from './index'

//-----------  Definitions  -----------//

const map = {}
document.addEventListener = jest.fn((event, cb) => {
  map[event] = cb
})

const handler   = jest.spyOn(ScrollBlock.prototype, 'handleScroll')
const component = mount(
  <ScrollBlock title='Testing' limited={10}>
    {faker.lorem.paragraphs()}
  </ScrollBlock>
)

//-----------  Tests  -----------//

describe('<ScrollBlock />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })

  it('handles scroll events', () => {
    expect(handler).not.toHaveBeenCalled()

    map.scroll()

    expect(handler).toHaveBeenCalled()
  })
})
