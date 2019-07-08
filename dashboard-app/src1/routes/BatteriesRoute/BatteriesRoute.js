//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import { batteryShape } from 'models/batteries/helpers';
import { baseLinkTabs } from 'models/routing/helpers';

import Card from 'components/Card';
import TabLinks from 'components/TabLinks';
import CardWrapper from 'components/CardWrapper';
import PageWrapper from 'components/PageWrapper';
import PageHeader from 'components/PageHeader';
import CreateBattery from 'forms/CreateBattery';

import Modal from '@miro/core-ui/lib/components/Modal';
import Button from '@miro/core-ui/lib/components/Button';

//-----------  Definitions  -----------//

const cardKeys = [
  'description',
  'createdDate',
  'duration',
  'active',
  'questionnaires',
];

//-----------  Component  -----------//

class BatteriesRoute extends React.Component {
  componentDidMount() {
    this.props.requestBatteries();
  }

  //-----------  Event Handlers  -----------//

  closeModal = () => {
    this.props.history.push('/batteries');
  };

  onSubmitSuccess = battery => {
    // this.props.history.push(`/batteries/${battery.id}`);
  };

  //-----------  HTML Render  -----------//

  render() {
    const { match, batteries } = this.props;

    return (
      <PageWrapper title="Batteries" breadcrumbs={['Home', 'Batteries']}>
        <Styled.BatteriesRoute>
          <TabLinks tabs={baseLinkTabs} />
          <PageHeader
            title={`${batteries.length} Batteries`}
            buttonName="Create New Battery"
            buttonLink="/batteries/new"
          />
          <CardWrapper>
            {batteries.map(battery => (
              <Card
                key={battery.id}
                keys={cardKeys}
                title={battery.name}
                details={battery}
              >
                <Button to={`/batteries/${battery.id}`} active small>
                  Details
                </Button>
              </Card>
            ))}
          </CardWrapper>
        </Styled.BatteriesRoute>

        <Modal
          label="Create Battery"
          isOpen={match.path.endsWith('new')}
          onRequestClose={this.closeModal}
        >
          <CreateBattery
            cancel={this.closeModal}
            onSubmitSuccess={this.onSubmitSuccess}
          />
        </Modal>
      </PageWrapper>
    );
  }
}

//-----------  Type Definitions  -----------//

BatteriesRoute.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  batteries: PropTypes.arrayOf(PropTypes.shape(batteryShape)),
  requestBatteries: PropTypes.func.isRequired,
};

//-----------  Export  -----------//

export default BatteriesRoute;
