//-----------  Imports  -----------//

import Styled          from './styles'

import React           from 'react'
import PropTypes       from 'prop-types'

import Avatar          from '@miro/core-ui/src/components/Avatar'
import ConnectedSwitch from '@miro/core-ui/src/containers/ConnectedSwitch'

import { userShape }   from 'models/user/helpers'

//-----------  Component  -----------//

class DashboardWrapper extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { user, children, ...props } = this.props

    return (user && user.email) ? (
      <Styled.DashboardWrapper>
        <Styled.DashboardHeader>
          <Avatar url={user._avatar} size={6.5} />
          <div>
            <h4>{user._name}</h4>
            <h5>{user.email}</h5>
          </div>
          {/* <Styled.StatsBlock>
            <h2>{user.stats.totalMins}<small> mins</small></h2>
            <span>Total audio mins</span>
          </Styled.StatsBlock>
          <Styled.StatsBlock>
            <h2>{user.stats.totalSubjects}</h2>
            <span>Finished subjects</span>
          </Styled.StatsBlock>
          <Styled.StatsBlock>
            <h2>{user.stats.totalFiles}</h2>
            <span>Total audio files</span>
          </Styled.StatsBlock> */}
        </Styled.DashboardHeader>

        <ConnectedSwitch>
          {children}
        </ConnectedSwitch>
      </Styled.DashboardWrapper>
    ) : null
  }
}

//-----------  Type Definitions  -----------//

DashboardWrapper.propTypes = {
  user     : PropTypes.shape(userShape),
  children : PropTypes.node,
}

//-----------  Export  -----------//

export default DashboardWrapper
