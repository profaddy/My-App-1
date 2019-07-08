//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Component  -----------//

class ScrollBlock extends React.Component {

  constructor(props){
    super(props)

    this.scroller = React.createRef()
    this.handleScroll = this.handleScroll.bind(this)
  }

  state = {
    showOverlay: true
  }

  componentDidMount(){
    if (this.props.limited)
      this.scroll = document.addEventListener('scroll', this.handleScroll, true)
  }

  componentWillUnmount(){
    if (this.props.limited)
      this.scroll = document.removeEventListener('scroll', this.handleScroll, true)
  }


  //-----------  Event Handlers  -----------//

  handleScroll(){
    const currentScroll = (this.scroller.current.scrollHeight - this.scroller.current.scrollTop)
    const totalLength   = (this.scroller.current.clientHeight)

    if (currentScroll <= totalLength)
      this.setState({ showOverlay: false })

    if (currentScroll > totalLength && !this.state.showOverlay)
      this.setState({ showOverlay: true })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { title, active, limited, children } = this.props
    const { showOverlay } = this.state

    return (
      <Styled.ScrollBlock active={active}>
        <Styled.Content limited={limited} innerRef={this.scroller}>
          <Styled.Title>{title}</Styled.Title>
          {children}
        </Styled.Content>
        {limited && <Styled.Overlay active={showOverlay} />}
      </Styled.ScrollBlock>
    )
  }
}

//-----------  Type Definitions  -----------//

ScrollBlock.propTypes = {
  title    : PropTypes.string.isRequired,
  active   : PropTypes.bool,
  limited  : PropTypes.number,
  children : PropTypes.node.isRequired,
}

//-----------  Export  -----------//

export default ScrollBlock
