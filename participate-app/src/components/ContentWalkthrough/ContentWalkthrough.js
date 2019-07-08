//-----------  Imports  -----------//

import get         from 'lodash/get'
import uniq        from 'lodash/uniq'
import isNumber    from 'lodash/isNumber'
import kebabCase   from 'lodash/kebabCase'

import Styled      from './styles'

import React       from 'react'
import PropTypes   from 'prop-types'

import DropSection from 'components/DropSection'

//-----------  Component  -----------//

class ContentWalkthrough extends React.Component {

  state = {
    active    : null,
    viewed    : [],
    completed : false,
  }

  componentDidMount(){
    document.addEventListener('keydown', this.onKeyDown)
    setTimeout(() => this.toggleActive(0, true), 100)
 }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.onKeyDown)
  }

  //-----------  Event Handlers  -----------//

  onKeyDown = ({ code, shiftKey, ...evt }) => {
    const { active } = this.state

    if (!isNumber(active)) return false

    switch (code){
      case 'ArrowRight' : return shiftKey && this.toggleActive(active + 1)
      case 'ArrowLeft'  : return shiftKey && this.toggleActive(active - 1)
    }
  }

  toggleActive = (index, ignoreScroll = false) => {
    const { sections, onCompletion } = this.props

    if ((index < 0) || (index > sections.length)) return false

    const active    = (index === this.state.active) ? null : index
    const viewed    = uniq([ ...this.state.viewed, index ])
    const completed = (viewed.length >= sections.length)

    if (completed && onCompletion && !this.state.completed)
      onCompletion()

    this.setState({ active, viewed, completed }, () => {
      const id = kebabCase(get(sections[active], 'title', ''))

      if (!ignoreScroll && document.getElementById(id))
        document.getElementById(id).scrollIntoView({ block: 'start', behavior: 'smooth' })
    })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { active, viewed } = this.state
    const { sections } = this.props

    return (
      <Styled.ContentWalkthrough>
        {sections.map(({ title, content }, index) => {
          const toggleActive = () => this.toggleActive(index)
          const goToNext     = ((index + 1) < sections.length)
            ? () => this.toggleActive(index + 1)
            : null

          return (
            <DropSection
              id={kebabCase(title)}
              key={index}
              title={title}
              content={content}
              active={(active == index)}
              viewed={viewed.includes(index)}
              toggleActive={toggleActive}
              goToNext={goToNext}
            />
          )
        })}
      </Styled.ContentWalkthrough>
    )
  }
}

//-----------  Type Definitions  -----------//

ContentWalkthrough.propTypes = {
  onCompletion : PropTypes.func,
  sections     : PropTypes.arrayOf(PropTypes.shape({
    title   : PropTypes.node.isRequired,
    content : PropTypes.node.isRequired,
  })),
}

//-----------  Export  -----------//

export default ContentWalkthrough
