//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';

import Pagination from './index';

//-----------  Definitions  -----------//

const total = 5;
const onChange = jest.fn();

const component = shallow(
  <Pagination total={total} current={1} onChange={onChange} />,
);

//-----------  Tests  -----------//

describe('<Pagination />', () => {
  it('renders', () => {
    expect(component.length).toBe(1);
  });

  it('renders correct number of children', () => {
    expect(component.find('[selected]').length).toBe(total);
  });

  it('disables back arrow correctly', () => {
    const first = component
      .find('[disabled]')
      .first()
      .props().disabled;
    const last = component
      .find('[disabled]')
      .last()
      .props().disabled;

    expect(first).toBe(true);
    expect(last).toBe(false);
  });

  it('calls onChange correctly', () => {
    component
      .find('[selected]')
      .last()
      .simulate('click');
    component.setProps({ current: total });

    expect(onChange).toHaveBeenCalledWith(total);
  });

  it('disables next arrow correctly', () => {
    const first = component
      .find('[disabled]')
      .first()
      .props().disabled;
    const last = component
      .find('[disabled]')
      .last()
      .props().disabled;

    expect(first).toBe(false);
    expect(last).toBe(true);
  });

  it('highlights correct page', () => {
    component.find('[selected]').forEach((link, index) => {
      expect(link.props().selected).toBe(total === index + 1);
    });
  });
});
