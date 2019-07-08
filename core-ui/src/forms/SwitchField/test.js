//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';

import SwitchField from './index';

//-----------  Definitions  -----------//

const name = 'test_1';
const onChange = jest.fn();

const meta = { touched: false, error: false };
const input = { name, onChange };

const component = shallow(<SwitchField meta={meta} input={input} />);

//-----------  Tests  -----------//

describe('<SwitchField />', () => {
  it('renders', () => {
    expect(component.length).toBe(1);
  });

  it('handles first click (true)', () => {
    component.setProps({ input: input });
    component
      .find('ReactSwitch')
      .props()
      .onChange();

    expect(onChange).toHaveBeenCalledWith('1');
  });

  it('handles second click (false)', () => {
    component.setProps({ input: { ...input, value: '1' } });
    component
      .find('ReactSwitch')
      .props()
      .onChange();

    expect(onChange).toHaveBeenCalledWith('0');
  });

  it('handles third click (true)', () => {
    component.setProps({ input: { ...input, value: '0' } });
    component
      .find('ReactSwitch')
      .props()
      .onChange();

    expect(onChange).toHaveBeenCalledWith('1');
  });
});
