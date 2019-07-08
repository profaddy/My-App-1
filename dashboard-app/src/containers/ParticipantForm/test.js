//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import appStore from 'models/store';

import ParticipantForm from './index';

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <ParticipantForm />
  </Provider>,
);

//-----------  Tests  -----------//

describe('<ParticipantForm />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1);
  });
});
