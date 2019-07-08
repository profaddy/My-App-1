//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';
import { reduxForm } from 'redux-form';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import appStore from 'models/store';

import TestWrapper from './index';
import { goToNext, notesName } from './TestWrapper';
// import { FormWrapper } from 'components/FormWrapper';

//-----------  Definitions  -----------//

const index = 1;
const text = 'Testing';
const push = jest.fn();
const handleSubmit = jest.fn();
const pathname = idx => `/tests/${idx}`;

const props = idx => ({
  location: { pathname: pathname(idx) },
  history: { push },
  handleSubmit,
  idx,
});

const Wrapper = reduxForm({
  form: 'test',
})(FormWrapper(_ => <h1>{text}</h1>));

//-----------  Renders  -----------//

const component = mount(
  <Provider store={appStore}>
    <Wrapper {...props(index)} />
  </Provider>,
);

const redirect = mount(
  <Provider store={appStore}>
    <MemoryRouter>
      <Wrapper {...props(50)} />
    </MemoryRouter>
  </Provider>,
);

//-----------  Tests  -----------//

describe('<TestWrapper />', () => {
  it('renders', () => {
    expect(component.length).toBe(1);
  });

  it('renders children', () => {
    expect(component.find('h1').text()).toEqual(text);
  });

  it('redirects with index beyond the forms list', () => {
    expect(redirect.find('Redirect').length).toBe(1);
  });

  it('opens notes field on click', () => {
    expect(component.find(`textarea[name="${notesName}"]`).length).toBe(0);
    component
      .find('div[open]')
      .props()
      .onClick();

    expect(component.find(`textarea[name="${notesName}"]`).length).toBe(0);
  });

  it('submits test on button click', () => {
    component.find('button[type="submit"]').simulate('submit');

    expect(handleSubmit).toBeCalled();
  });
});

describe('TestWrapper: goToNext()', () => {
  it('returns correct URL (for next form)', () => {
    goToNext(props(index));

    expect(push).toBeCalledWith(pathname(index + 1));
  });

  it('returns correct URL (for form completion)', () => {
    goToNext(props(50));

    expect(push).toBeCalledWith(expect.stringContaining('completed'));
  });
});
