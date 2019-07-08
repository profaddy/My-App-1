//-----------  Imports  -----------//

import React from 'react';
import ChooseQuestionnairesForm from './ChooseQuestionnairesForm';

//-----------  Component  -----------//

class ChooseQuestionnaires extends React.Component {
  constructor(props) {
    super(props);

    this.showQuestionnaireDetailModal = this.showQuestionnaireDetailModal.bind(
      this,
    );
    this.activateCategoryTab = this.activateCategoryTab.bind(this);

    this.state = {
      isQuestionnaireDetailModalOpen: false,
      questionnaireDetailId: undefined,
      activeCategoryTabId: undefined,
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

  showQuestionnaireDetailModal(flag, id) {
    this.setState({
      isQuestionnaireDetailModalOpen: flag,
      questionnaireDetailId: id,
    });
  }
  activateCategoryTab(id) {
    this.setState({ activeCategoryTabId: id });
    this.props.requestQuestionnaires(id);
  }

  //-----------  HTML Render  -----------//

  render() {
    const { ...props } = this.props;

    return (
      <ChooseQuestionnairesForm
        isQuestionnaireDetailModalOpen={
          this.state.isQuestionnaireDetailModalOpen
        }
        questionnaireDetailId={this.state.questionnaireDetailId}
        showQuestionnaireDetailModal={this.showQuestionnaireDetailModal}
        activateCategoryTab={this.activateCategoryTab}
        activeCategoryTabId={this.state.activeCategoryTabId}
        {...props}
      />
    );
  }
}

//-----------  Type Definitions  -----------//

ChooseQuestionnaires.propTypes = {};

//-----------  Export  -----------//

export default ChooseQuestionnaires;
