//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import appStore from 'models/store';

import ParticipantDetails from './index';

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <ParticipantDetails />
  </Provider>,
);

//-----------  Tests  -----------//

describe('<ParticipantDetails />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1);
  });
});
