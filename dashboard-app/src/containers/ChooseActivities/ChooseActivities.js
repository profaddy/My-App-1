//-----------  Imports  -----------//

import React from 'react';
import ChooseActivitiesForm from './ChooseActivitiesForm';

//-----------  Component  -----------//

class ChooseActivities extends React.Component {
  constructor(props) {
    super(props);

    this.showGameDetailModal = this.showGameDetailModal.bind(this);
    this.activateCategoryTab = this.activateCategoryTab.bind(this);

    this.state = {
      isGameDetailModalOpen: false,
      gameDetailId: undefined,
      activeCategoryTabId: undefined,
    };
  }

  componentDidMount() {
    this.props.initBatteryEdit(this.props.match.params.batteryId);
    this.props.requestActivityCategories();
    this.props.requestActivities();
    this.props.requestBatteryActivitiesQuestionnaires(
      this.props.match.params.batteryId,
    );

    this.props.requestQuestionnaireCategories();
    this.props.requestQuestionnaires();
  }

  showGameDetailModal(flag, id) {
    this.setState({ isGameDetailModalOpen: flag, gameDetailId: id });
  }
  activateCategoryTab(id) {
    this.setState({ activeCategoryTabId: id });
    this.props.requestActivities(id);
  }

  //-----------  HTML Render  -----------//

  render() {
    const { ...props } = this.props;

    return (
      <ChooseActivitiesForm
        activeCategoryTabId={this.state.activeCategoryTabId}
        isGameDetailModalOpen={this.state.isGameDetailModalOpen}
        gameDetailId={this.state.gameDetailId}
        showGameDetailModal={this.showGameDetailModal}
        activateCategoryTab={this.activateCategoryTab}
        {...props}
      />
    );
  }
}

//-----------  Type Definitions  -----------//

ChooseActivities.propTypes = {};

//-----------  Export  -----------//

export default ChooseActivities;
