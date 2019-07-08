//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import appStore from 'models/store';

import IndexRoute from './index';

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <StaticRouter context={{}}>
      <IndexRoute />
    </StaticRouter>
  </Provider>,
);

//-----------  Tests  -----------//

describe('<IndexRoute />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1);
  });
});
