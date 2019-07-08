//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';

import { StaticOverlay } from './index';

//-----------  Definitions  -----------//

const container = mount(<StaticOverlay isLoading={true} isLoggedIn={false} />);

//-----------  Tests  -----------//

describe('<StaticOverlay />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1);
  });
});
