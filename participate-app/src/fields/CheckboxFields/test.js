//-----------  Imports  -----------//

import set            from 'lodash/set'

import React          from 'react'
import { shallow }    from 'enzyme'

import CheckboxFields from './index'

//-----------  Definitions  -----------//

const name     = 'test_1'
const value    = 'testing'
const options  = ['ONE', 'TWO', 'THREE']
const onChange = jest.fn()

const meta  = { touched: false, error: false }
const event = set({}, 'target.value', value)
const input = { name, onChange }

const component = shallow(
  <CheckboxFields meta={meta} input={input} options={options} />
)

//-----------  Tests  -----------//

describe('<CheckboxFields />', () => {
  it('renders', () => {
    expect(component.length).toBe(1)
  })

  it('renders the correct nuber of choices', () => {
    const choices  = component.find('input').length
    const expected = options.length

    expect(choices).toEqual(expected)
  })

  it('handles a change event correctly', () => {
    component.find('input').last().props().onChange(event)

    expect(onChange).toHaveBeenCalledWith({ [value]: true })
  })
})
