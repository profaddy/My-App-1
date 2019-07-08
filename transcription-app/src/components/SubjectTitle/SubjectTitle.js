//-----------  Imports  -----------//

import Styled              from './styles'

import React               from 'react'
import PropTypes           from 'prop-types'

import Stat                from 'components/Stat'

import { assignmentShape } from 'models/assignments/helpers'
import { formatDate,
         formatTime }      from '@miro/core-ui/src/utilities/formatters'

import CalendarIcon        from '@miro/core-ui/src/assets/icons/calendar.svg'
import FolderIcon          from '@miro/core-ui/src/assets/icons/folder.svg'
import ClockIcon           from '@miro/core-ui/src/assets/icons/clock.svg'
import TimeIcon            from '@miro/core-ui/src/assets/icons/time.svg'

//-----------  Component  -----------//

const SubjectTitle = ({ alert, subject, ...props }) => {
  const { _subjectId, _createdAt, _estimatedTime, _audioFilesCount } = subject || {}

  const color = (_estimatedTime < 10000) ? 'red' : 'green'

  return _subjectId && (
    <Styled.SubjectTitle alert={alert} color={color}>
      <h3>
        Subject ID: {_subjectId}
      </h3>
      {/* {alert && (
        <Styled.AlertBlock color={color}>
          <Stat value={formatTime(_estimatedTime)} icon={ClockIcon} />
        </Styled.AlertBlock>
      )} */}
      <Stat type='Date' value={formatDate(_createdAt)} icon={CalendarIcon} />
      <Stat type='Records' value={_audioFilesCount} icon={FolderIcon} />
      {/* <Stat type='Total time' value={formatTime(job.totalTime)} icon={TimeIcon} /> */}
    </Styled.SubjectTitle>
  )
}

//-----------  Type Definitions  -----------//

SubjectTitle.propTypes = {
  alert   : PropTypes.bool,
  subject : PropTypes.shape(assignmentShape).isRequired,
}

//-----------  Export  -----------//

export default SubjectTitle
