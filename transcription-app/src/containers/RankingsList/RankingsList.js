//-----------  Imports  -----------//

import Styled           from './styles'

import React            from 'react'
import PropTypes        from 'prop-types'

import Avatar           from '@miro/core-ui/src/components/Avatar'
import ErrorBlock       from '@miro/core-ui/src/components/ErrorBlock'
import LoadingBlock     from '@miro/core-ui/src/components/LoadingBlock'

import { rankingShape } from 'models/rankings/helpers'

import { formatTime }   from '@miro/core-ui/src/utilities/formatters'

import TrophyIcon       from '@miro/core-ui/src/assets/icons/winner.svg'

//-----------  Component  -----------//

class RankingsList extends React.Component {

  componentDidMount(){
    if (!this.props.hasLoaded)
      this.props.requestRankings()
  }

  //-----------  HTML Render  -----------//

  render(){
    const { error, rankings, isLoading, requestRankings } = this.props

    return (
      <Styled.RankingsList>
        {rankings && rankings.map(ranking => (
          <Styled.RankingBlock key={ranking.id}>
            {(1 === ranking.id) ? <TrophyIcon /> : <div />}
            <Avatar url={ranking.avatar} size={2.5} ranking={ranking.ranking} />
            <h6>{ranking.name}</h6>
            <Styled.Time ranking={ranking.ranking}>
              {formatTime(ranking.time)}
            </Styled.Time>
          </Styled.RankingBlock>
        ))}
        {(error && !isLoading) && <ErrorBlock error={error} onRetry={requestRankings} />}
        {(!rankings.length && isLoading) && <LoadingBlock title='Fetching Rankings...' />}
      </Styled.RankingsList>
    )
  }
}

//-----------  Type Definitions  -----------//

RankingsList.propTypes = {
  rankings        : PropTypes.arrayOf(PropTypes.shape(rankingShape)),
  error           : PropTypes.any,
  isLoading       : PropTypes.bool,
  hasLoaded       : PropTypes.bool,
  requestRankings : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default RankingsList
