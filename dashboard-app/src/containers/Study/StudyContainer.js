//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import FormField from '@miro/core-ui/lib/forms/FormField';

import SearchIcon from '@miro/core-ui/dist/assets/icons/search.svg';
import Modal from '@miro/core-ui/lib/components/Modal';
import Tabs from 'components/Tabs';
import CreateStudy from 'forms/CreateStudy';
import StudyCard from 'components/StudyCard';
import PageHeader from 'components/PageHeader';
import { tabs } from './config';
import history from 'models/history';

//-----------  Component  -----------//

const create = type => {
  history.push(`/${type}/create`);
};
const getStudyParticipants = id => {
  // console.log(id);
};

const StudyContainer = ({
  showCreateStudy,
  isCreateStudyOpen,
  cards,
  activeTabId,
  activateTab,
  ...props
}) => (
  <Styled.StudyContainer>
    <Tabs list={tabs} activeTabId={activeTabId} activateTab={activateTab} />
    <PageHeader
      title={tabs[activeTabId]['pageTitle'].replace(
        'COUNT_PLACEHOLDER',
        cards.length,
      )}
      buttonName={tabs[activeTabId]['createButton']}
      /* buttonLink='/studies/create' */
      buttonAction={
        tabs[activeTabId]['tab'] === 'studies'
          ? () => showCreateStudy(true)
          : () => create(tabs[activeTabId]['tab'])
      }
    />
    <Styled.CardContainer>
      {cards &&
        cards.map(card => (
          <StudyCard
            key={card.id}
            to={`/${card.id}/participants`}
            content={card}
          />
        ))}
    </Styled.CardContainer>

    <Modal
      label="Create Study"
      isOpen={isCreateStudyOpen}
      onRequestClose={() => showCreateStudy(false)}
      contentStyles={{ marginTop: '0' }}
      overlayStyles={{}}
    >
      <CreateStudy cancel={() => showCreateStudy(false)} />
    </Modal>
  </Styled.StudyContainer>
);

//-----------  Type Definitions  -----------//

StudyContainer.propTypes = {};

//-----------  Export  -----------//

export default StudyContainer;
