//-----------  Imports  -----------//

import React from 'react';
import BatteryOrderingForm from './BatteryOrderingForm';

//-----------  Component  -----------//

class BatteryOrdering extends React.Component {
  constructor(props) {
    super(props);

    // this.showGameDetailModal = this.showGameDetailModal.bind(this);
    // this.activateCategoryTab = this.activateCategoryTab.bind(this);

    this.state = {
      // isGameDetailModalOpen: false,
      // gameDetailId: undefined,
      // activeCategoryTabId: undefined,
    };
  }

  componentDidMount() {
    this.props.requestQuestionnaireCategories();
    this.props.requestQuestionnaires();

    this.props.requestActivityCategories();
    this.props.requestActivities();
    this.props.requestBatteryActivitiesQuestionnaires(
      this.props.match.params.batteryId,
    );
  }

  // showGameDetailModal(flag, id) {
  //   this.setState({ isGameDetailModalOpen: flag, gameDetailId: id });
  // }
  // activateCategoryTab(id) {
  //   this.setState({ activeCategoryTabId: id });
  //   this.props.requestActivities(id);
  // }

  //-----------  HTML Render  -----------//

  render() {
    const { ...props } = this.props;
    console.log(props);
    return (
      <BatteryOrderingForm
        // activeCategoryTabId={this.state.activeCategoryTabId}
        // isGameDetailModalOpen={this.state.isGameDetailModalOpen}
        // gameDetailId={this.state.gameDetailId}
        // showGameDetailModal={this.showGameDetailModal}
        // activateCategoryTab={this.activateCategoryTab}
        {...props}
      />
    );
  }
}

//-----------  Type Definitions  -----------//

BatteryOrdering.propTypes = {};

//-----------  Export  -----------//

export default BatteryOrdering;
