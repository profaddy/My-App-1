//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import MonthField  from './index'

//-----------  Definitions  -----------//

const name     = 'test_1'
const onChange = jest.fn()

const meta  = { active: false, touched: false, error: false }
const input = { name, onChange }

const component = shallow(
  <MonthField meta={meta} input={input} />
)

//-----------  Tests  -----------//

describe('<MonthField />', () => {
  it('renders', () => {
    expect(component.length).toBe(1)
  })

  it('handles "yes" click', () => {
    component.find('[onClick]').first().props().onClick()

    expect(onChange).toHaveBeenCalledWith('1')
  })

  it('correctly highlights "yes" selection', () => {
    component.setProps({ input: { ...input, value: '1' } })

    const yes = component.find('[onClick]').first().props().selected
    const no  = component.find('[onClick]').last().props().selected

    expect(yes).toEqual(true)
    expect(no).toEqual(false)
  })

  it('handles "no" click', () => {
    component.find('[onClick]').last().props().onClick()

    expect(onChange).toHaveBeenCalledWith('0')
  })

  it('correctly highlights "no" selection', () => {
    component.setProps({ input: { ...input, value: '0' } })

    const yes = component.find('[onClick]').first().props().selected
    const no  = component.find('[onClick]').last().props().selected

    expect(yes).toEqual(false)
    expect(no).toEqual(true)
  })
})
