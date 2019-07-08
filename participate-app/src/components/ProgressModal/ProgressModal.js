//-----------  Imports  -----------//

import get from 'lodash/get';
import findIndex from 'lodash/findIndex';

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import Button from '@miro/core-ui/lib/components/Button';

//-----------  Definitions  -----------//

const scheduleLink = 'https://calendly.com/miroresearch/miro-004/';

export const steps = [
  {
    key: 'eula',
    title: 'EULA',
    estimate: '5-10 min',
    percentage: 14,
  },
  {
    key: 'consent',
    title: 'Consent',
    estimate: '10-20 min',
    percentage: 34,
  },
  {
    key: 'capacity',
    title: 'Capacity',
    estimate: '5 min',
    percentage: 54,
  },
  {
    key: 'signature',
    title: 'Authorization',
    estimate: '2 min',
    percentage: 74,
  },
  {
    key: 'questionnaires',
    title: 'Health & Lifestyle Questions',
    estimate: '10-15 min',
    percentage: 100,
  },
];

//-----------  Component  -----------//

const ProgressModal = ({
  step,
  message,
  subtitle,
  closeModal,
  signout,
  eligible,
}) => {
  const current = findIndex(steps, ['key', step]);
  const percent = get(steps[current], 'percentage', 0);
  const buttonText = subtitle === 'Congratulations!' ? 'Finish' : 'Next';
  const buttonAction = buttonText === 'Finish' ? signout : closeModal;

  return (
    <Styled.ProgressModal>
      <Styled.ProgressBar width={percent}>
        {steps.map(({ key, title, estimate }, index) => (
          <Styled.Step
            key={key}
            width={100 / steps.length}
            completed={current >= index}
          >
            <small>{estimate || ' '}</small>
            <Styled.Icon completed={current >= index}>
              <span>{current >= index ? '✓' : index + 1}</span>
            </Styled.Icon>
            <h5>{title}</h5>
          </Styled.Step>
        ))}
      </Styled.ProgressBar>

      {subtitle && <h3>{subtitle}</h3>}

      {message && <p>{message}</p>}

      {current < step.length - 1 &&
        (percent === 100 && eligible ? (
          <Button onClick={signout} active>
            Schedule Your Interview
          </Button>
        ) : (
          <Button onClick={buttonAction} active>
            {buttonText}{' '}
          </Button>
        ))}
    </Styled.ProgressModal>
  );
};

//-----------  Type Definitions  -----------//

ProgressModal.propTypes = {
  step: PropTypes.string.isRequired,
  message: PropTypes.string,
  subtitle: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
};

//-----------  Export  -----------//

export default ProgressModal;
