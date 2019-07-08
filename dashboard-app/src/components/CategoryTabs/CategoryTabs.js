//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//-----------  Component  -----------//

const CategoryTabs = ({ tabs, activeTabId, activateTab }) => (
  <Styled.CategoryTabs>
    {tabs.map(tab => (
      <Styled.Tab
        key={tab.id}
        active={activeTabId === tab.id}
        onClick={activeTabId !== tab.id ? () => activateTab(tab.id) : undefined}
      >
        {tab.name}
      </Styled.Tab>
    ))}
  </Styled.CategoryTabs>
);

//-----------  Type Definitions  -----------//

CategoryTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeTabId: PropTypes.number,
};

//-----------  Export  -----------//

export default CategoryTabs;
