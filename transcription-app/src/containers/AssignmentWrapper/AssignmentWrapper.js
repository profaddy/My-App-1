//-----------  Imports  -----------//

import Styled              from './styles'

import React               from 'react'
import PropTypes           from 'prop-types'
import { Redirect }        from 'react-router-dom'

import SubjectTitle        from 'components/SubjectTitle'
import LoadingBlock        from '@miro/core-ui/src/components/LoadingBlock'

import { assignmentShape } from 'models/assignments/helpers'

//-----------  Component  -----------//

class AssignmentWrapper extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { children, assignment, isLoading, ...props } = this.props

    return (!isLoading && !assignment) ? (<Redirect to='/' />) : (
      <Styled.AssignmentWrapper>
        <Styled.AssignmentHeader>
          {assignment && <SubjectTitle subject={assignment} />}
          {(!assignment && isLoading) && <LoadingBlock title='Fetching Data...' />}
        </Styled.AssignmentHeader>

        {children}
      </Styled.AssignmentWrapper>
    )
  }
}

//-----------  Type Definitions  -----------//

AssignmentWrapper.propTypes = {
  assignment : PropTypes.shape(assignmentShape),
  isLoading  : PropTypes.bool,
  children   : PropTypes.node,
}

//-----------  Export  -----------//

export default AssignmentWrapper
