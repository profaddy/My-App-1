//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import appStore from 'models/store';

import StudyCard from './index';

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <StudyCard />
  </Provider>,
);

//-----------  Tests  -----------//

describe('<StudyCard />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1);
  });
});
