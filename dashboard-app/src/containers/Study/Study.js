//-----------  Imports  -----------//

import React from 'react';
import StudyContainer from './StudyContainer';
import Styled from './styles';
import { tabs } from './config';

//-----------  Component  -----------//

class Study extends React.Component {
  constructor(props) {
    super(props);

    this.showCreateStudyModal = this.showCreateStudyModal.bind(this);
    this.activateTab = this.activateTab.bind(this);

    this.state = {
      isCreateStudyOpen: false,
      activeTabId: 0,
    };
  }

  showCreateStudyModal(flag) {
    if (!flag) {
      this.props.getStudies();
    }
    this.setState({ isCreateStudyOpen: flag });
  }

  activateTab(tabId) {
    this.setState({ activeTabId: tabId });
  }

  componentDidMount() {
    this.props.getCards(tabs[this.state.activeTabId].tab);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.activeTabId !== prevState.activeTabId) {
      this.props.getCards(tabs[this.state.activeTabId].tab);
    }
  }

  //-----------  HTML Render  -----------//

  render() {
    const { ...props } = this.props;

    return (
      <StudyContainer
        showCreateStudy={this.showCreateStudyModal}
        isCreateStudyOpen={this.state.isCreateStudyOpen}
        activeTabId={this.state.activeTabId}
        activateTab={this.activateTab}
        {...props}
      />
    );
  }
}

//-----------  Type Definitions  -----------//

Study.propTypes = {};

//-----------  Export  -----------//

export default Study;
