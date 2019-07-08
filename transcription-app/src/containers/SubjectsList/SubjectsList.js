//-----------  Imports  -----------//

import Styled              from './styles'

import React               from 'react'
import PropTypes           from 'prop-types'

import SubjectTitle        from 'components/SubjectTitle'
import ErrorBlock          from '@miro/core-ui/src/components/ErrorBlock'
import LoadingBlock        from '@miro/core-ui/src/components/LoadingBlock'
import Button              from '@miro/core-ui/src/components/Button'

import { assignmentShape } from 'models/assignments/helpers'

import { formatDate }      from '@miro/core-ui/src/utilities/formatters'

//-----------  Component  -----------//

class SubjectsList extends React.Component {

  state = {
    isAccepting: !!this.props.currentId
  }

  //-----------  Event Handlers  -----------//

  assignSubject = (id) => {
    this.setState({ isAccepting: id })
    this.props.assignSubject(id)
  }

  //-----------  HTML Render  -----------//

  render(){
    const { error, subjects, isLoading, hasAssignments, requestSubjects } = this.props
    const { isAccepting } = this.state
    let date, rows = []

    subjects && subjects.map(subject => {
      if (date !== formatDate(subject._createdAt, 'MMMM Do', true)){
        date = formatDate(subject._createdAt, 'MMMM Do', true)
        rows.push(
          <Styled.Date key={date} today={'Today' === date}>{date}</Styled.Date>
        )
      }

      rows.push(
        <Styled.SubjectBlock key={subject.id}>
          <SubjectTitle subject={subject} alert />
          <h6>{('Today' === date) ? 'New' : ' '}</h6>
          <div>
            <Button small
              disabled={!!isAccepting || hasAssignments}
              loading={(subject.id === isAccepting)}
              onClick={() => this.assignSubject(subject.id)}
            >
              {(subject.id === isAccepting) ? 'Loading' : 'Accept'}
            </Button>
          </div>
        </Styled.SubjectBlock>
      )
    })

    return (
      <Styled.SubjectsList>
        {rows.length ? rows : (
          <Styled.Empty empty>
            No Transcriptions in Queue
            <small>please check back later</small>
          </Styled.Empty>
        )}
        {(error && !isLoading) && <ErrorBlock error={error} onRetry={requestSubjects} />}
        {(!subjects.length && isLoading) && <LoadingBlock title='Fetching Subjects...' />}
      </Styled.SubjectsList>
    )
  }
}

//-----------  Type Definitions  -----------//

SubjectsList.propTypes = {
  subjects        : PropTypes.arrayOf(PropTypes.shape(assignmentShape)),
  error           : PropTypes.any,
  isLoading       : PropTypes.bool,
  hasAssignments  : PropTypes.bool,
  assignSubject   : PropTypes.func.isRequired,
  requestSubjects : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default SubjectsList
