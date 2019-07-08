//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import Waitlist_img from 'assets/images/waitlist_img.svg';
// import EligibilityFailure from 'assets/icons/EligibilityFailure.svg';

import Button from '@miro/core-ui/lib/components/Button';

//-----------  Component  -----------//

const ScreeningCompleteModal = ({ signout }) => (
  <Styled.ScreeningCompleteModal>
    <Styled.EligibilityIcon>
      <Waitlist_img />
    </Styled.EligibilityIcon>
    <Styled.EligibilityDisclaimer>
      <div>
        <h2>Your screeening process is complete</h2>
      </div>
      <Styled.EligibilityMessage>
        <p>
          For any additional questions please contact your study administrator.
        </p>
        <p>Thankyou</p>
      </Styled.EligibilityMessage>
      <Styled.EligibilityButton>
        <Button onClick={signout} active>
          LOGOUT
        </Button>
      </Styled.EligibilityButton>
    </Styled.EligibilityDisclaimer>
  </Styled.ScreeningCompleteModal>
);

//-----------  Type Definitions  -----------//

ScreeningCompleteModal.propTypes = {
  error: PropTypes.any,
  title: PropTypes.string,
  message: PropTypes.string,
  subtitle: PropTypes.string,
};
//-----------  Export  -----------//

export default ScreeningCompleteModal;
