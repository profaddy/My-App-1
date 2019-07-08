//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';

import { userShape } from 'models/user/helpers';

// import AlertsIcon from 'assets/icons/alerts.svg';

//-----------  Definitions  -----------//

// const count = 3;

//-----------  Component  -----------//

class AccountHeader extends React.Component {
  //-----------  HTML Render  -----------//

  render() {
    const { user, signOut } = this.props;

    return user && user.email ? (
      <Styled.AccountHeader>
        {/* <AlertsIcon /> */}
        {/* <Styled.Badge count={count} /> */}
        <span>{user.email}</span>
        {user._avatar && (
          <Styled.Avatar style={{ backgroundImage: `url(${user._avatar})` }} />
        )}
        <Button text="Log Out" onClick={signOut} small />
      </Styled.AccountHeader>
    ) : (
      <Styled.AccountHeader>
        <Button text="Log Out" onClick={signOut} small />
      </Styled.AccountHeader>
    );
  }
}

//-----------  Type Definitions  -----------//

AccountHeader.propTypes = {
  user: PropTypes.shape(userShape),
  signOut: PropTypes.func.isRequired,
};

//-----------  Export  -----------//

export default AccountHeader;
