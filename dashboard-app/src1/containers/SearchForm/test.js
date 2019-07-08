//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import appStore from 'models/store';

import SearchForm from './index';

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <SearchForm />
  </Provider>,
);

//-----------  Tests  -----------//

describe('<SearchForm />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1);
  });
});
