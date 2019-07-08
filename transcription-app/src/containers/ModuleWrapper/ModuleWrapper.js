//-----------  Imports  -----------//

import get             from 'lodash/get'

import Styled          from './styles'

import React           from 'react'
import PropTypes       from 'prop-types'

import Stat            from 'components/Stat'
import RuleBlock       from 'components/RuleBlock'
import ModuleRules     from 'components/ModuleRules'
import AudioHandler    from 'components/AudioHandler'
import AudioControls   from 'components/AudioControls'
import ReadingExamples from 'components/ReadingExamples'
import AnnotationRules from 'components/AnnotationRules'
import ConnectedSwitch from '@miro/core-ui/src/containers/ConnectedSwitch'

import { moduleShape } from 'models/modules/helpers'
import { formatTime }  from '@miro/core-ui/src/utilities/formatters'

import FileIcon        from '@miro/core-ui/src/assets/icons/file.svg'
import TimeIcon        from '@miro/core-ui/src/assets/icons/time.svg'

//-----------  Component  -----------//

class ModuleWrapper extends React.Component {

  state = {
    sidebar: false
  }

  //-----------  Event Handlers  -----------//

  openSidebar = (sidebar) => {
    this.setState({ sidebar: sidebar })
  }

  closeSidebar = () => {
    this.setState({ sidebar: null })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { module, children, nextModuleUrl, transciptionId, hasTranscription, ...props } = this.props
    const { sidebar } = this.state

    const activity = get(module, 'activity.name')

    return (!module || !module.activity) ? null : (
      <Styled.ModuleWrapper>
        <Styled.ModuleHeader>
          <strong>
            {module.activity.name}
          </strong>
          <Stat type='Records' value={module.records} icon={FileIcon} />
          <Stat type='Time' value={formatTime(module.totalTime)} icon={TimeIcon} />
        </Styled.ModuleHeader>

        <Styled.ModuleContent>
          <Styled.MainColumn>
            <AudioHandler
              nextUrl={nextModuleUrl}
              currentId={transciptionId}
              audioFiles={module.audioAssignments}
              canAdvance={hasTranscription}
            />
            <a onClick={() => this.openSidebar('audio')}>See Available Audio Controls ⟶</a>

            <ConnectedSwitch>
              {children}
            </ConnectedSwitch>
          </Styled.MainColumn>

          <Styled.SideColumn>
            <RuleBlock color='blue' title='Trascription Rules for All Modules' active>
              <ul>
                <li>Put single spaces between words and after punctuation.</li>
                <li>Write numbers as words. (ie. "seven", not "7")</li>
                <li>Use appropriate syntax: commas, semi-colons, periods, exclaimation points, question marks.</li>
              </ul>
            </RuleBlock>
            <ModuleRules activity={activity} openSidebar={this.openSidebar} />
            <RuleBlock color='green' title='Annotation Reference' active>
              <ul>
                <li>Put single spaces between words and after punctuation.</li>
                <li>Write numbers as words. (ie. "seven", not "7")</li>
                <li>Use appropriate syntax: commas, semi-colons, periods, exclaimation points, question marks.</li>
              </ul>
              <a onClick={() => this.openSidebar('annotation')}>Read More Details ⟶</a>
            </RuleBlock>
          </Styled.SideColumn>
        </Styled.ModuleContent>

        <AnnotationRules active={('annotation' === sidebar)} onClose={this.closeSidebar} />
        <ReadingExamples active={('reading' === sidebar)} onClose={this.closeSidebar} />
        <AudioControls active={('audio' === sidebar)} onClose={this.closeSidebar} />
      </Styled.ModuleWrapper>
    )
  }
}

//-----------  Type Definitions  -----------//

ModuleWrapper.propTypes = {
  module           : PropTypes.shape(moduleShape),
  children         : PropTypes.node,
  nextModuleUrl    : PropTypes.string,
  transciptionId   : PropTypes.string,
  hasTranscription : PropTypes.bool
}

//-----------  Export  -----------//

export default ModuleWrapper
