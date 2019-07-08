//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import AppHeader from 'components/AppHeader';
import DelayedUmmount from 'components/DelayedUnmount';

import AppSidebar from 'containers/AppSidebar';
import LoadingBar from 'containers/LoadingBar';
import AccountHeader from 'containers/AccountHeader';
import StaticOverlay from 'containers/StaticOverlay';

import { loadDelay } from 'utilities/constants';

import SearchIcon from 'assets/icons/search.svg';

//-----------  Component  -----------//

class AppWrapper extends React.Component {
  componentWillMount() {
    this.props.appInit();
  }

  //-----------  Helpers  -----------//

  renderSearch = () => {
    return (
      <Styled.GlobalSearch>
        <SearchIcon />
        <input type="text" placeholder="Search by ID..." />
      </Styled.GlobalSearch>
    );
  };

  //-----------  HTML Render  -----------//

  render() {
    const { search, header, children, minWidth, isMounted } = this.props;

    return (
      <Styled.AppWrapper>
        <DelayedUmmount delay={loadDelay} mounted={isMounted}>
          <AppSidebar />

          <Styled.ContentWrapper minWidth={minWidth}>
            <AppHeader>
              {!!search ? search : <Styled.Spacer />}
              {!!header ? header : <AccountHeader />}
            </AppHeader>

            {children}
          </Styled.ContentWrapper>
        </DelayedUmmount>

        <StaticOverlay />

        <LoadingBar />
      </Styled.AppWrapper>
    );
  }
}

//-----------  Type Definitions  -----------//

AppWrapper.propTypes = {
  search: PropTypes.node,
  header: PropTypes.node,
  minWidth: PropTypes.number,
  children: PropTypes.element.isRequired,
  isMounted: PropTypes.bool.isRequired,
  appInit: PropTypes.func.isRequired,
};

//-----------  Export  -----------//

export default AppWrapper;
