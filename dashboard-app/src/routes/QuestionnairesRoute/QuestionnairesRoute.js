//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import { questionnaireShape } from 'models/questionnaires/helpers';
import { baseLinkTabs } from 'models/routing/helpers';

import Card from 'components/Card';
import TabLinks from 'components/TabLinks';
import CardWrapper from 'components/CardWrapper';
import PageWrapper from 'components/PageWrapper';
import PageHeader from 'components/PageHeader';

import Modal from '@miro/core-ui/lib/components/Modal';
import Button from '@miro/core-ui/lib/components/Button';

//-----------  Definitions  -----------//

const cardKeys = ['description', 'createdDate', 'pages'];

//-----------  Component  -----------//

class QuestionnairesRoute extends React.Component {
  componentDidMount() {
    this.props.requestQuestionnaires();
  }

  //-----------  Event Handlers  -----------//

  closeModal = () => {
    this.props.history.push('/questionnaires');
  };

  //-----------  HTML Render  -----------//

  render() {
    const { match, questionnaires } = this.props;

    return (
      <PageWrapper
        title="Questionnaires"
        breadcrumbs={['Home', 'Questionnaires']}
      >
        <Styled.QuestionnairesRoute>
          <TabLinks tabs={baseLinkTabs} />
          <PageHeader
            title={`${questionnaires.length} Questionnaires`}
            buttonName="Create New Questionnaire"
            buttonLink="/questionnaires/new"
          />
          <CardWrapper>
            {questionnaires.map(questionnaire => (
              <Card
                key={questionnaire.id}
                keys={cardKeys}
                title={questionnaire.name}
                details={questionnaire}
              >
                <Button to={`/questionnaires/${questionnaire.id}`} active small>
                  Read More
                </Button>
              </Card>
            ))}
          </CardWrapper>
        </Styled.QuestionnairesRoute>

        <Modal
          label="Create Questionnaire"
          isOpen={match.path.endsWith('new')}
          onRequestClose={this.closeModal}
        >
          <h1>(n/a)</h1>
        </Modal>
      </PageWrapper>
    );
  }
}

//-----------  Type Definitions  -----------//

QuestionnairesRoute.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  questionnaires: PropTypes.arrayOf(PropTypes.shape(questionnaireShape)),
  requestQuestionnaires: PropTypes.func.isRequired,
};

//-----------  Export  -----------//

export default QuestionnairesRoute;
