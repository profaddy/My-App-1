//-----------  Imports  -----------//

import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';

import appStore from 'models/store';
import { gloablFields } from 'components/FormWrapper';

import fields, { calculateTotals } from './config';

import FormWrapper, { CreateBattery } from './CreateBattery';

//-----------  Definitions  -----------//

const props = {
  total: calculateTotals(),
  location: { pathname: '/tests/1' },
  onSubmit: jest.fn(),
};

//-----------  Renders  -----------//

const container = mount(
  <Provider store={appStore}>
    <FormWrapper {...props} />
  </Provider>,
);

const component = shallow(<CreateBattery {...props} />);

//-----------  Component Tests  -----------//

describe('<CreateBattery />', () => {
  it('renders container', () => {
    expect(container.length).toBe(1);
  });

  it('renders component', () => {
    expect(component.length).toBe(1);
  });
});

//-----------  Field Tests  -----------//

describe('CreateBattery: Fields', () => {
  it('has all nessisary properties', () => {
    fields.forEach(field => {
      expect(field).toEqual(
        expect.objectContaining({
          type: 'number',
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

describe('CreateBattery: Calculations', () => {
  it('calculates correct value', () => {
    expect(true).toEqual(false);
  });
});
