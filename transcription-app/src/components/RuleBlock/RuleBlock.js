//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Component  -----------//

class RuleBlock extends React.Component {

  state = {
    active: this.props.active || false
  }

  //-----------  Event Handlers  -----------//

  toggleActive = () => {
    this.setState({ active: !this.state.active })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { color, title, children, ...props } = this.props
    const { active } = this.state

    return (
      <Styled.RuleBlock>
        <Styled.RuleHeader color={color} onClick={this.toggleActive}>
          <h5>{title}</h5>
          <strong>⌄</strong>
        </Styled.RuleHeader>
        <Styled.RuleContent active={active}>
          {children}
        </Styled.RuleContent>
      </Styled.RuleBlock>
    )
  }
}

//-----------  Type Definitions  -----------//

RuleBlock.propTypes = {
  color    : PropTypes.string.isRequired,
  title    : PropTypes.string.isRequired,
  active   : PropTypes.bool,
  children : PropTypes.node.isRequired,
}

//-----------  Export  -----------//

export default RuleBlock
