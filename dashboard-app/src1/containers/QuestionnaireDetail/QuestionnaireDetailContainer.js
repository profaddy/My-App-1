//-----------  Imports  -----------//

import React from 'react';
import QuestionnaireDetail from './QuestionnaireDetail';

//-----------  Component  -----------//

class QuestionnaireDetailContainer extends React.Component {
  componentDidMount() {
    // this.props.requestStudyTypes();
  }

  //-----------  HTML Render  -----------//

  render() {
    const { ...props } = this.props;

    return <QuestionnaireDetail {...props} />;
  }
}

//-----------  Type Definitions  -----------//

QuestionnaireDetail.propTypes = {};

//-----------  Export  -----------//

export default QuestionnaireDetail;
