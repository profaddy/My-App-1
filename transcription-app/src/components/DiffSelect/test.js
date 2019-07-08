//-----------  Imports  -----------//

import React      from 'react'
import { mount }  from 'enzyme'

import DiffSelect from './index'

//-----------  Definitions  -----------//

const inputA = 'Then John went home.'
const inputB = 'Then Steve went home.'

const component = mount(
  <DiffSelect diffA='John' diffB='Steve' contextA={inputA} contextB={inputB} onClick={() => {}} focus />
)

const clickEvt = { nativeEvent: { stopImmediatePropagation: () => {} }}

//-----------  Tests  -----------//

describe('<DiffSelect />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })

  it('renders the longer of two diffs', () => {
    const display  = component.find('span.real').text()
    const expected = 'Steve'

    expect(display).toEqual(expected)
  })

  it('displays the correct diff on click', () => {
    component.find('div[color]').first().props().onClick(clickEvt)

    const display  = component.find('span.real').text()
    const expected = 'John'

    expect(display).toEqual(expected)
  })

  it('displays manual input', () => {
    const inputText = 'Something I typed...'

    component.find('div[color]').last().props().onClick(clickEvt)
    component.find('textarea').props().onChange({ target: { value: inputText }})

    const display  = component.find('span.real').text()
    const expected = inputText

    expect(display).toEqual(expected)
  })
})
