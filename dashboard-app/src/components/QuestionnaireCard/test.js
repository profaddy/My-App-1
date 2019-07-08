//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import appStore from 'models/store';

import QuestionnaireCard from './index';

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <QuestionnaireCard />
  </Provider>,
);

//-----------  Tests  -----------//

describe('<QuestionnaireCard />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1);
  });
});
