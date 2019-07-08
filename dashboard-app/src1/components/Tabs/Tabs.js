//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//-----------  Component  -----------//

const Tabs = ({ list, activeTabId, activateTab }) => (
  <Styled.Tabs>
    {list.map(tab => (
      <Styled.Tab
        key={tab.tabId}
        active={activeTabId === tab.tabId}
        onClick={
          activeTabId !== tab.tabId ? () => activateTab(tab.tabId) : undefined
        }
      >
        {tab.tabTitle}
      </Styled.Tab>
    ))}
  </Styled.Tabs>
);

//-----------  Type Definitions  -----------//

Tabs.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeTabId: PropTypes.number.isRequired,
};

//-----------  Export  -----------//

export default Tabs;
