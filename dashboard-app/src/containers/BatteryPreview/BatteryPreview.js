//-----------  Imports  -----------//

import React from 'react';
import BatteryPreviewForm from './BatteryPreviewForm';

//-----------  Component  -----------//

class BatteryPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
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

  //-----------  HTML Render  -----------//

  render() {
    const { ...props } = this.props;
    // console.log(props);
    return <BatteryPreviewForm {...props} />;
  }
}

//-----------  Type Definitions  -----------//

BatteryPreview.propTypes = {};

//-----------  Export  -----------//

export default BatteryPreview;
