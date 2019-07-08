//-----------  Imports  -----------//

import React           from 'react'
import { mount }       from 'enzyme'

import DiffCompare     from './index'
import { getContext,
         renderDiffs } from './DiffCompare'

//-----------  Definitions  -----------//

const map    = {}
const inputA = 'Lorem ipsum dolor sit amet, consectetur aditpiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
const inputB = 'Lorem ipsum doloris sit amet, consectetur aditpiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut emimem ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat!'

document.addEventListener = jest.fn((event, cb) => {
  map[event] = cb
})

const component = mount(
  <DiffCompare inputA={inputA} inputB={inputB} onSubmit={() => {}} />
)

const tabEvt = { code: 'Tab', preventDefault: () => {} }

//-----------  Tests  -----------//

describe('<DiffCompare />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })

  it('renders expected number of diff selection components', () => {
    const children = component.find('DiffSelect').length
    const expected = component.state().diffKeys.length

    expect(children).toEqual(expected)
  })

  it('changes focus on tab', () => {
    expect(component.state().focused).toEqual(component.state().diffKeys[0])
    map.keydown(tabEvt)

    const focused  = component.state().focused
    const expected = component.state().diffKeys[1]

    expect(focused).toEqual(expected)
  })

  it('cycles focus on tab from last element', () => {
    for (var i = 1; i < component.state().diffKeys.length; i++)
      map.keydown(tabEvt)

    const focused  = component.state().focused
    const expected = component.state().diffKeys[0]

    expect(focused).toEqual(expected)
  })

  it('cycles backwards on shift tab', () => {
    map.keydown({ ...tabEvt, shiftKey: true })

    const focused  = component.state().focused
    const expected = component.state().diffKeys[component.state().diffKeys.length - 1]

    expect(focused).toEqual(expected)
  })

  it('loses focus on outside click', () => {
    map.click()

    const focused  = component.state().focused
    const expected = null

    expect(focused).toEqual(expected)
  })

  it('regains focus when child element clicked', () => {
    component.find('DiffSelect').first().props().onClick()

    const focused  = component.state().focused
    const expected = component.state().diffKeys[0]

    expect(focused).toEqual(expected)
  })
})

describe('DiffCompare.getContext', () => {
  it('generates correct context at start of input', () => {
    const result   = getContext(inputA, 0, 6)
    const expected = (
      <p>
        <strong>Lorem </strong>
        ipsum dolor sit amet, consectetur aditpiscing
      </p>
    )

    expect(result).toEqual(expected)
  })

  it('generates correct context in middle of input', () => {
    const result   = getContext(inputA, 20, 6)
    const expected = (
      <p>
        m dolor si
        <strong>t amet</strong>
        , consectetur aditpiscing elit, sed do eiusmo
      </p>
    )

    expect(result).toEqual(expected)
  })
})

describe('DiffCompare.renderDiffs', () => {
  const diffs = renderDiffs(inputA, inputB)

  it('generates the correct number of diffs', () => {
    const result   = diffs.diffKeys.length
    const expected = 5

    expect(result).toEqual(expected)
  })

  it('generates the correct number of span displays', () => {
    const result   = diffs.children.length
    const expected = 10

    expect(result).toEqual(expected)
  })
})