//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import Modal from '@miro/core-ui/lib/components/Modal';
import FormField from '@miro/core-ui/lib/forms/FormField';
import FormSubmit from '@miro/core-ui/lib/forms/FormSubmit';
import Button from '@miro/core-ui/lib/components/Button';
import QuestionnaireCard from 'components/QuestionnaireCard';
import CategoryTabs from 'components/CategoryTabs';
import QuestionnaireDetail from 'containers/QuestionnaireDetail';

//-----------  Component  -----------//
export const ChooseQuestionnairesForm = ({
  // handleSubmit,
  activeCategoryTabId,
  questionnaireCategories,
  questionnaires,
  activateCategoryTab,
  isQuestionnaireDetailModalOpen,
  questionnaireDetailId,
  showQuestionnaireDetailModal,
  chosenQuestionnaires,
  chooseQuestionnaire,
  ...props
}) => (
  <Styled.ChooseQuestionnairesForm /* onSubmit={handleSubmit} */>
    <CategoryTabs
      tabs={[{ id: undefined, name: 'All' }, ...questionnaireCategories]}
      activeTabId={activeCategoryTabId}
      activateTab={activateCategoryTab}
    />
    <Styled.CardContainer>
      {questionnaires &&
        questionnaires
          .filter(item =>
            activeCategoryTabId ? item.category === activeCategoryTabId : true,
          )
          .map(questionnaire => (
            <QuestionnaireCard
              key={questionnaire.id}
              content={questionnaire}
              viewAction={showQuestionnaireDetailModal}
              chooseAction={() => chooseQuestionnaire(questionnaire.id)}
              checked={chosenQuestionnaires.includes(questionnaire.id)}
            />
          ))}
    </Styled.CardContainer>
    <Modal
      label="Questionnaire detail"
      isOpen={isQuestionnaireDetailModalOpen}
      onRequestClose={() => showQuestionnaireDetailModal(false)}
      contentStyles={{ maxWidth: '88rem' }}
      overlayStyles={{}}
    >
      <QuestionnaireDetail
        close={() => showQuestionnaireDetailModal(false)}
        detail={
          questionnaires &&
          questionnaires.find(
            questionnaire => questionnaire.id === questionnaireDetailId,
          )
        }
      />
    </Modal>
    <Styled.Footer>
      <Button to={`/batteries/${props.match.params.batteryId}/order/`}>
        Next: Ordering
      </Button>
    </Styled.Footer>
  </Styled.ChooseQuestionnairesForm>
);

//-----------  Type Definitions  -----------//

ChooseQuestionnairesForm.propTypes = {
  // onSubmit: PropTypes.func.isRequired,
};

//-----------  Export  -----------//

export default ChooseQuestionnairesForm;
