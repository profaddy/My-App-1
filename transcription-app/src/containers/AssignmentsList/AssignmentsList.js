//-----------  Imports  -----------//

import Styled              from './styles'

import React               from 'react'
import PropTypes           from 'prop-types'

import ErrorBlock          from 'components/ErrorBlock'
import SubjectTitle        from 'components/SubjectTitle'
import LoadingBlock        from '@miro/core-ui/src/components/LoadingBlock'
import Button              from '@miro/core-ui/src/components/Button'

import { assignmentShape } from 'models/assignments/helpers'

//-----------  Component  -----------//

class AssignmentsList extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { error, assignments, isLoading, requestAssignments } = this.props

    return (
      <Styled.AssignmentsList>
        {(assignments && assignments.length) ? assignments.map(assignment => (
          <Styled.AssignmentBlock key={assignment.id}>
            <SubjectTitle subject={assignment} alert />
            <Styled.Current>
              {/* <small>CURRENT PROCESS</small>
              <h5>{workingModule}</h5> */}
              <Button to={`/assignments/${assignment.id}`} active small>Continue</Button>
            </Styled.Current>
          </Styled.AssignmentBlock>
        )) : (!!error) ? (
          <ErrorBlock error={error} onRetry={requestAssignments} />
        ) : (!isLoading) ? (
          <Styled.Empty empty>
            No Transcriptions in Progress
            <small><span>⬐</span> select a subject from the list below <span>⬎</span></small>
          </Styled.Empty>
        ) : (
          <LoadingBlock title='Fetching Data...' />
        )}
      </Styled.AssignmentsList>
    )
  }
}

//-----------  Type Definitions  -----------//

AssignmentsList.propTypes = {
  assignments        : PropTypes.arrayOf(PropTypes.shape(assignmentShape)),
  error              : PropTypes.any,
  isLoading          : PropTypes.bool,
  requestAssignments : PropTypes.func.isRequired
}

//-----------  Export  -----------//

export default AssignmentsList
