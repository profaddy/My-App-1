//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import appStore from 'models/store';

import GameCard from './index';

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <GameCard />
  </Provider>,
);

//-----------  Tests  -----------//

describe('<GameCard />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1);
  });
});
