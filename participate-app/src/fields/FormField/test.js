//-----------  Imports  -----------//

import React                from 'react'
import { shallow }          from 'enzyme'
import { Field, reduxForm } from 'redux-form'

import FormField            from './index'

//-----------  Definitions  -----------//

const TestForm = () => (
  <form noValidate>
    <Field
      type='email'
      name='email'
      component={FormField}
    />
  </form>
)

const TestRedux = reduxForm({ form: 'test' })(TestForm)
const component = shallow(<TestRedux />)

//-----------  Tests  -----------//

describe('<FormField />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
