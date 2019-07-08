//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import { studyShape } from 'models/studies/helpers';
import { baseLinkTabs } from 'models/routing/helpers';

import Card from 'components/Card';
import TabLinks from 'components/TabLinks';
import CardWrapper from 'components/CardWrapper';
import PageWrapper from 'components/PageWrapper';
import PageHeader from 'components/PageHeader';
import CreateStudy from 'forms/CreateStudy';

import Modal from '@miro/core-ui/lib/components/Modal';
import Button from '@miro/core-ui/lib/components/Button';

//-----------  Definitions  -----------//

const cardKeys = ['description', 'createdDate', 'duration'];

//-----------  Component  -----------//

class StudiesRoute extends React.Component {
  componentDidMount() {
    this.props.requestStudies();
  }

  //-----------  Event Handlers  -----------//

  closeModal = () => {
    this.props.history.push('/studies');
  };

  onSubmitSuccess = study => {
    console.log(study);
    this.props.history.push(`/studies/${study.id}`);
  };

  //-----------  HTML Render  -----------//

  render() {
    const { match, studies } = this.props;

    return (
      <PageWrapper title="Studies" breadcrumbs={['Home', 'Studies']}>
        <Styled.StudiesRoute>
          <TabLinks tabs={baseLinkTabs} />
          <PageHeader
            title={`${studies.length} Studies`}
            buttonName="Create New Study"
            buttonLink="/studies/new"
          />
          <CardWrapper>
            {studies.map(study => (
              <Card
                key={study.id}
                keys={cardKeys}
                title={study.name}
                details={study}
              >
                <Button to={`/studies/${study.id}`} active small>
                  Read More
                </Button>
              </Card>
            ))}
          </CardWrapper>
        </Styled.StudiesRoute>

        <Modal
          label="Create Study"
          isOpen={match.path.endsWith('new')}
          onRequestClose={this.closeModal}
          contentStyles={{ padding: '2rem 12rem', maxWidth: '68rem' }}
        >
          <CreateStudy
            cancel={this.closeModal}
            // onSubmitSuccess={this.onSubmitSuccess}
          />
        </Modal>
      </PageWrapper>
    );
  }
}

//-----------  Type Definitions  -----------//

StudiesRoute.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  studies: PropTypes.arrayOf(PropTypes.shape(studyShape)),
  requestStudies: PropTypes.func.isRequired,
};

//-----------  Export  -----------//

export default StudiesRoute;
