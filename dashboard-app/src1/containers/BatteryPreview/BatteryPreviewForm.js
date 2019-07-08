//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import Modal from '@miro/core-ui/lib/components/Modal';
import FormField from '@miro/core-ui/lib/forms/FormField';
import FormSubmit from '@miro/core-ui/lib/forms/FormSubmit';
import Button from '@miro/core-ui/lib/components/Button';
import OrderCard from 'components/OrderCard';

//-----------  Component  -----------//
export const BatteryPreviewForm = ({
  // handleSubmit,
  activities,
  questionnaires,
  order,
  batterySaveObj,
  requestEditBattery,
  editSuccess,
  ...props
}) => (
  <Styled.BatteryPreviewForm /* onSubmit={handleSubmit} */>
    <Styled.Heading>PREVIEW</Styled.Heading>
    <Styled.CardContainer>
      {order.map((element, index) => {
        const orderElement =
          element.type === 'activity'
            ? activities.find(activity => activity.id === element.activity)
            : questionnaires.find(
                questionnaire => questionnaire.id === element.questionnaire,
              );
        return (
          <OrderCard
            key={index}
            index={element.counter}
            name={orderElement.name}
            duration={orderElement.duration}
          />
        );
      })}
    </Styled.CardContainer>
    <Styled.Footer>
      <Button to={`/batteries/${props.match.params.batteryId}/order/`}>
        Back
      </Button>
      <Button
        onClick={() =>
          requestEditBattery(props.match.params.batteryId, batterySaveObj)
        }
      >
        Save
      </Button>
    </Styled.Footer>
    <Modal
      label="Save Success"
      isOpen={!!editSuccess}
      // onRequestClose={() => showGameDetailModal(false)}
      contentStyles={{ maxWidth: '88rem' }}
      overlayStyles={{}}
    >
      <div>
        <h1>GOOD JOB</h1>
        <h2>YOU CREATED A NEW BATTERY</h2>
        <h2>CREATE DATE: </h2>
        <div>
          <Button to={`/batteries/`}>Done</Button>
          <Button to={`/batteries/new`}>Create another battery</Button>
        </div>
      </div>
    </Modal>
  </Styled.BatteryPreviewForm>
);

//-----------  Type Definitions  -----------//

BatteryPreviewForm.propTypes = {
  // onSubmit: PropTypes.func.isRequired,
};

//-----------  Export  -----------//

export default BatteryPreviewForm;
