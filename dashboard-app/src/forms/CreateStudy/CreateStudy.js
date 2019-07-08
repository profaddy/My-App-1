//-----------  Imports  -----------//

import React from 'react';
import CreateStudyForm from './CreateStudyForm';

//-----------  Component  -----------//

class CreateStudy extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      fileError: ''
    }
  }

  setFileError = (msg) => {
    this.setState({
      fileError: msg
    });
  }


  componentDidMount() {
    this.props.requestStudyTypes();
  }

  //-----------  HTML Render  -----------//

  render() {
    const { ...props } = this.props;

    return <CreateStudyForm setFileError={this.setFileError} fileError={this.state.fileError} {...props} />;
  }
}

//-----------  Type Definitions  -----------//

CreateStudy.propTypes = {};

//-----------  Export  -----------//

export default CreateStudy;
