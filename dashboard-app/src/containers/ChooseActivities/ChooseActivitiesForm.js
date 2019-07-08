//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import Modal from '@miro/core-ui/lib/components/Modal';
import FormField from '@miro/core-ui/lib/forms/FormField';
import FormSubmit from '@miro/core-ui/lib/forms/FormSubmit';
import Button from '@miro/core-ui/lib/components/Button';
import GameCard from 'components/GameCard';
import CategoryTabs from 'components/CategoryTabs';
import GameDetail from 'containers/GameDetail';
import QuestionnaireCard from 'components/QuestionnaireCard';
import { Form } from 'redux-form';

//-----------  Component  -----------//
export const ChooseActivitiesForm = ({
  // handleSubmit,
  activateCategoryTab,
  chooseActivity,
  chosenActivities,
  activityCategories,
  activities,
  activeCategoryTabId,
  isGameDetailModalOpen,
  gameDetailId,
  showGameDetailModal,
  ...props
}) => (
  <Styled.ChooseActivitiesForm /* onSubmit={handleSubmit} */>
    <CategoryTabs
      tabs={[{ id: undefined, name: 'All' }, ...activityCategories]}
      activeTabId={activeCategoryTabId}
      activateTab={activateCategoryTab}
    />
    <Styled.CardContainer>
      {activities
        .filter(item =>
          activeCategoryTabId ? item.category === activeCategoryTabId : true,
        )
        .map(activity => (
          <GameCard
            key={activity.id}
            content={activity}
            viewAction={showGameDetailModal}
            chooseAction={() => {
              chooseActivity(activity.id);
            }}
            checked={chosenActivities.includes(activity.id)}
          />
        ))}
    </Styled.CardContainer>

    <Modal
      label="Game detail"
      isOpen={isGameDetailModalOpen}
      onRequestClose={() => showGameDetailModal(false)}
      contentStyles={{ maxWidth: '88rem' }}
      overlayStyles={{}}
    >
      <GameDetail
        close={() => showGameDetailModal(false)}
        detail={activities.find(activity => activity.id === gameDetailId)}
      />
    </Modal>
    <Styled.Footer>
      <Button to={`/batteries/${props.match.params.batteryId}/questionnaires/`}>
        Next: Questionnaires
      </Button>
    </Styled.Footer>
  </Styled.ChooseActivitiesForm>
);

//-----------  Type Definitions  -----------//

ChooseActivitiesForm.propTypes = {
  // onSubmit: PropTypes.func.isRequired,
};

//-----------  Export  -----------//

export default ChooseActivitiesForm;
