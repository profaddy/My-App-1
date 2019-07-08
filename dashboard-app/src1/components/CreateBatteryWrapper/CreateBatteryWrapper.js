//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import PageWrapper from 'components/PageWrapper';
import ConnectedSwitch from '@miro/core-ui/lib/containers/ConnectedSwitch';

import Chevron from 'assets/icons/chevron_right.svg';

//-----------  Definitions  -----------//

const tabs = (url) => ([
  {
    path: `${url}/activities`,
    title: 'Choose Activities'
  },
  {
    path: `${url}/questionnaires`,
    title: 'Choose Questionnaires'
  },
  {
    path: `${url}/order`,
    title: 'Choose Ordering'
  },
  {
    path: `${url}/save`,
    title: 'Save',
    clickable: false,
  },
]);

//-----------  Component  -----------//

const CreateBatteryWrapper = ({ match, children }) => (
  <PageWrapper
    title="Choose Activities"
    breadcrumbs={['Home', 'Batteries', 'Create Battery']}
  >
    <Styled.CreateBatteryWrapper>
      <h3>Battery Name</h3>
      <Styled.Tabs>
        {tabs(match.url).map(({ path, title, clickable = true }) => (
          <React.Fragment key={path}>
            {clickable ?
              <NavLink to={path}>
                {title}
              </NavLink>
              :
              <span>
                {title}
              </span>
            }
            <span>
              <Chevron />
            </span>
          </React.Fragment>
        ))}
      </Styled.Tabs>

      <PageWrapper.FullWidth>
        <ConnectedSwitch>
          {children}
        </ConnectedSwitch>
      </PageWrapper.FullWidth>
    </Styled.CreateBatteryWrapper>
  </PageWrapper>
);

//-----------  Type Definitions  -----------//

CreateBatteryWrapper.propTypes = {
  match: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

//-----------  Export  -----------//

export default CreateBatteryWrapper;
