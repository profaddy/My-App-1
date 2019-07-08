//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';

import DelayedUnmount from './index';

//-----------  Setup  -----------//

jest.useFakeTimers();

//-----------  Definitions  -----------//

const component = shallow(
  <DelayedUnmount delay={50} mounted={true}>
    <h1>Hello!</h1>
  </DelayedUnmount>,
);

//-----------  Tests  -----------//

describe('<DelayedUnmount />', () => {
  it('Renders', () => {
    expect(component.find('h1').text()).toBe('Hello!');
  });

  it('delays removal of children', () => {
    component.setProps({ mounted: false });
    jest.runAllTimers();
    component.update();

    expect(component.find('h1').length).toEqual(0);
  });
});
