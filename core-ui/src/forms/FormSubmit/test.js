//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';
import { Field, reduxForm } from 'redux-form';

import FormSubmit from './index';

//-----------  Definitions  -----------//

const TestForm = () => (
  <form noValidate>
    <Field type="email" name="email" component="input" />
    <FormSubmit text="Submit" />
  </form>
);

const TestRedux = reduxForm({ form: 'test' })(TestForm);
const component = shallow(<TestRedux />);

//-----------  Tests  -----------//

describe('<FormSubmit />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1);
  });
});
