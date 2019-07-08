//-----------  Imports  -----------//

import Styled            from './styles'

import React             from 'react'
import PropTypes         from 'prop-types'

import ErrorBlock        from '@miro/core-ui/src/components/ErrorBlock'
import LoadingBlock      from '@miro/core-ui/src/components/LoadingBlock'

import { activityShape } from 'models/activity/helpers'

import { formatDate }    from '@miro/core-ui/src/utilities/formatters'

//-----------  Component  -----------//

class ActivityList extends React.Component {

  componentDidMount(){
    if (!this.props.hasLoaded)
      this.props.requestActiviy()
  }

  //-----------  HTML Render  -----------//

  render(){
    const { error, activity, isLoading, requestActiviy } = this.props

    return (
      <Styled.ActivitiesList>
        {activity && activity.map(event => (
          <Styled.ActivityBlock key={event.id} color={event.color}>
            <h5>{event.title}</h5>
            <h6>{formatDate(event.createdAt, 'MMMM Do, YYYY', true)}</h6>
          </Styled.ActivityBlock>
        ))}
        {(error && !isLoading) && <ErrorBlock error={error} onRetry={requestActiviy} />}
        {(!activity.length && isLoading) && <LoadingBlock title='Fetching Activity...' />}
      </Styled.ActivitiesList>
    )
  }
}

//-----------  Type Definitions  -----------//

ActivityList.propTypes = {
  activity       : PropTypes.arrayOf(PropTypes.shape(activityShape)),
  error          : PropTypes.any,
  isLoading      : PropTypes.bool,
  hasLoaded      : PropTypes.bool,
  requestActiviy : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default ActivityList
