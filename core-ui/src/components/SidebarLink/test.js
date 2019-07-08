//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';

import SidebarLink from './index';

//-----------  Definitons  -----------//

const links = 'Styled(NavLink)';

const dataGenerator = (children = 0, grandChildren = 0) => ({
  to: '/link',
  title: 'Link',
  nested: !children
    ? undefined
    : Array(children).fill(dataGenerator(grandChildren)),
});

//-----------  Tests  -----------//

describe('<SidebarLink />', () => {
  it('handles empty datasets correctly', () => {
    const empty = shallow(<SidebarLink data={{}} />);
    expect(empty.find(links).length).toBe(0);
  });

  it('handles link with no nesting', () => {
    const noNest = shallow(<SidebarLink data={dataGenerator(0)} />);
    expect(noNest.find(links).length).toBe(1);
  });

  it('handles link with shallow nesting', () => {
    const children = 5;

    const oneLevel = shallow(<SidebarLink data={dataGenerator(children)} />);
    expect(oneLevel.find(links).length).toBe(1 + children);
  });

  it('handles link with deep nesting', () => {
    const children = 5;
    const grandChildren = 5;

    const twoLevels = shallow(
      <SidebarLink data={dataGenerator(children, grandChildren)} />,
    );
    expect(twoLevels.find(links).length).toBe(
      1 + children + children * grandChildren,
    );
  });
});
