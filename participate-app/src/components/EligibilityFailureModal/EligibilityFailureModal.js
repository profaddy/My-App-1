//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import EligibilityFailure from 'assets/icons/EligibilityFailure.svg';
import Button from '@miro/core-ui/lib/components/Button';

//-----------  Component  -----------//

const EligibilityFailureModal = ({ signout }) => (
  <Styled.EligibilityFailureModal>
    <Styled.EligibilityIcon>
      <EligibilityFailure />
    </Styled.EligibilityIcon>
    <div>
      <h2>Thank you for participating</h2>
    </div>
    <Styled.EligibilityMessage>
      <p>At this time, none of our studies are good fit for you.</p>
      <p>Please check back with us in the future!</p>
    </Styled.EligibilityMessage>
    <Styled.EligibilityButton>
      <Button onClick={signout} active>
        LOGOUT
      </Button>
    </Styled.EligibilityButton>
  </Styled.EligibilityFailureModal>
);

//-----------  Type Definitions  -----------//

EligibilityFailureModal.propTypes = {
  error: PropTypes.any,
  title: PropTypes.string,
  message: PropTypes.string,
  subtitle: PropTypes.string,
};
//-----------  Export  -----------//

export default EligibilityFailureModal;
