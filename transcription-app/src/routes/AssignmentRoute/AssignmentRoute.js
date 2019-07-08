//-----------  Imports  -----------//

import isEmpty         from 'lodash/isEmpty'

import Styled          from './styles'

import React           from 'react'
import PropTypes       from 'prop-types'

import Stat            from 'components/Stat'
import LoadingBlock    from '@miro/core-ui/src/components/LoadingBlock'
import Button          from '@miro/core-ui/src/components/Button'

import { moduleShape } from 'models/modules/helpers'
import { formatTime }  from '@miro/core-ui/src/utilities/formatters'

import FileIcon        from '@miro/core-ui/src/assets/icons/file.svg'
import TimeIcon        from '@miro/core-ui/src/assets/icons/time.svg'

//-----------  Component  -----------//

class AssignmentRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { modules, assignmentId } = this.props

    return (
      <Styled.AssignmentRoute>
        <Styled.ModuleWrapper>
          {(!isEmpty(modules)) ? modules.map(({ records, started, activity, completed, totalTime }, index) => (
            <Styled.ModuleBlock key={activity.id} next={(!index)} completed={completed}>
              <strong>{activity.name}</strong>
              <Stat type='Records' value={records} icon={FileIcon} />
              <Stat type='Total time' value={formatTime(totalTime)} icon={TimeIcon} />
              <Styled.Percentage completed={completed}>
                {(100 === completed) ? 'Completed' : (0 !== completed) ? `${completed}%` : null}
              </Styled.Percentage>
              <Button small
                to={`/assignments/${assignmentId}/modules/${activity.id}`}
                disabled={(!completed && !started && !!index)}
                active={(!completed || !index)}
              >
                {(100 === completed) ? 'Edit' : 'Start'}
              </Button>
            </Styled.ModuleBlock>
          )) : (
            <Styled.ModuleBlock>
              <LoadingBlock title='Fetching Modules...' />
            </Styled.ModuleBlock>
          )}
        </Styled.ModuleWrapper>

        <Styled.JobFooter>
          <Button to='/' active>Save</Button>
        </Styled.JobFooter>
      </Styled.AssignmentRoute>
    )
  }
}

//-----------  Type Definitions  -----------//

AssignmentRoute.propTypes = {
  modules      : PropTypes.arrayOf(PropTypes.shape(moduleShape)),
  assignmentId : PropTypes.string,
}

//-----------  Export  -----------//

export default AssignmentRoute
