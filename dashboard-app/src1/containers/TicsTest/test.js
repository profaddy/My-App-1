//-----------  Imports  -----------//

import groupBy from 'lodash/groupBy';

import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';

import appStore from 'models/store';
import { gloablFields } from 'containers/TestWrapper';

import fields, { visualList, calculateTotals } from './config';

import TestWrapper, { TicsTest } from './TicsTest';

//-----------  Definitions  -----------//

const props = {
  location: { pathname: '/tests/1' },
  onSubmit: jest.fn(),
  calculated: {
    total: calculateTotals(),
  },
};

//-----------  Renders  -----------//

const container = mount(
  <Provider store={appStore}>
    <TestWrapper {...props} />
  </Provider>,
);

const component = shallow(<TicsTest {...props} />);

//-----------  Component Tests  -----------//

describe('<TicsTest />', () => {
  it('renders container', () => {
    expect(container.length).toBe(1);
  });

  it('renders component', () => {
    expect(component.length).toBe(1);
  });

  it('disables and initializes the Immediate Memory field', () => {
    const fieldProps = container.find('Field input').get(4).props;

    expect(fieldProps.disabled).toEqual(true);
    expect(fieldProps.value).toEqual('0');
  });

  it('displays the correct number of inputs', () => {
    const allFields = fields.length;
    const blindFields = allFields - visualList.length;

    expect(component.find('Field').length).toEqual(allFields);

    component.setProps({ isBlind: true });

    expect(component.find('Field').length).toEqual(blindFields);
  });
});

//-----------  Field Tests  -----------//

describe('TicsTest: Fields', () => {
  const types = groupBy(fields, 'type');

  it('has a switch property', () => {
    expect(types.switch.length).toEqual(1);
  });

  it('has number fields with all nessisary properties', () => {
    types.number.forEach(field => {
      expect(field).toEqual(
        expect.objectContaining({
          name: expect.stringMatching(/^[a-z0-9_]+$/i),
          label: expect.anything(),
          required: true,
          validate: expect.arrayContaining([
            expect.arrayContaining([expect.any(Function), expect.anything()]),
          ]),
        }),
      );
    });
  });
});

//-----------  Calculations Tests  -----------//

describe('TicsTest: Calculations', () => {
  it('calculates correct value', () => {
    const testValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const calculated = calculateTotals(testValues);
    const expected = 55;

    expect(calculated).toEqual(expected);
  });

  it('ignores global field values', () => {
    const testValues = Object.assign(
      { a: 1, b: 2, c: 3 },
      gloablFields.reduce((sum, key) => ({ [key]: 10, ...sum }), {}),
    );

    const calculated = calculateTotals(testValues);
    const expected = 6;

    expect(Object.keys(testValues)).toEqual(
      expect.arrayContaining(['a', 'b', 'c', ...gloablFields]),
    );
    expect(calculated).toEqual(expected);
  });
});
