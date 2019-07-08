//-----------  Imports  -----------//

import Styled              from './styles'

import React               from 'react'
import PropTypes           from 'prop-types'

import Modal               from '@miro/core-ui/src/components/Modal'
import Button              from '@miro/core-ui/src/components/Button'
import ScrollBlock         from 'components/ScrollBlock'

import ActivityList        from 'containers/ActivityList'
import RankingsList        from 'containers/RankingsList'
import SubjectsList        from 'containers/SubjectsList'
import AssignmentsList     from 'containers/AssignmentsList'

import { assignmentShape } from 'models/assignments/helpers'

//-----------  Component  -----------//

class DashboardRoute extends React.Component {

  constructor(props){
    super(props)

    this.closeModal = this.closeModal.bind(this)
  }

  //-----------  Event Handlers  -----------//

  closeModal(){
    const { history } = this.props
    history.replace('/')
  }

  //-----------  HTML Render  -----------//

  render(){
    const { completed } = this.props

    return (
      <Styled.DashboardRoute>
        <Styled.Column>
          <ScrollBlock title='Current Transcriptions' active>
            <AssignmentsList />
          </ScrollBlock>

          <ScrollBlock title='Transcription Queue'>
            <SubjectsList />
          </ScrollBlock>

          {/* <ScrollBlock title='Rankings' limited={21}>
            <RankingsList />
          </ScrollBlock> */}
        </Styled.Column>

        <Styled.Column>
          {/* <ScrollBlock title='Recent Performance'>
            <div style={{ height: '10rem' }} />
          </ScrollBlock>

          <ScrollBlock title='Activity' limited={63.5}>
            <ActivityList />
          </ScrollBlock> */}
        </Styled.Column>

        <Modal label={`Completed Subject ${completed}`} isOpen={!!completed} onRequestClose={this.closeModal}>
          <Styled.CompletedModal>
            <h1>Good Job</h1>
            <h2>You completed the subject</h2>
            <h3>Subject ID: {completed}</h3>
            <Button onClick={this.closeModal} active>
              Select New Subject
            </Button>
          </Styled.CompletedModal>
        </Modal>
      </Styled.DashboardRoute>
    )
  }
}

//-----------  Type Definitions  -----------//

DashboardRoute.propTypes = {
  completed: PropTypes.string
}

//-----------  Export  -----------//

export default DashboardRoute
