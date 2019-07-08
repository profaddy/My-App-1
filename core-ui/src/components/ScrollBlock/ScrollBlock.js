//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

//-----------  Component  -----------//

class ScrollBlock extends React.Component {
  constructor(props) {
    super(props);

    this.scroller = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  state = {
    showOverlay: true,
  };

  componentDidMount() {
    if (this.props.limited)
      this.scroll = document.addEventListener(
        'scroll',
        this.handleScroll,
        true,
      );
  }

  componentWillUnmount() {
    if (this.props.limited)
      this.scroll = document.removeEventListener(
        'scroll',
        this.handleScroll,
        true,
      );
  }

  //-----------  Event Handlers  -----------//

  handleScroll() {
    const currentScroll =
      this.scroller.current.scrollHeight - this.scroller.current.scrollTop;
    const totalLength = this.scroller.current.clientHeight + 5;

    if (currentScroll <= totalLength) {
      this.setState({ showOverlay: false });
      if (this.props.onFullScroll) this.props.onFullScroll();
    }

    if (currentScroll > totalLength && !this.state.showOverlay)
      this.setState({ showOverlay: true });
  }

  //-----------  HTML Render  -----------//

  render() {
    const { title, active, limited, children } = this.props;
    const { showOverlay } = this.state;

    return (
      <Styled.ScrollBlock active={active}>
        <Styled.Content limited={limited} innerRef={this.scroller}>
          {title && <Styled.Title>{title}</Styled.Title>}
          {children}
        </Styled.Content>
        {limited && <Styled.Overlay active={showOverlay} />}
      </Styled.ScrollBlock>
    );
  }
}

//-----------  Type Definitions  -----------//

ScrollBlock.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
  limited: PropTypes.number,
  children: PropTypes.node.isRequired,
  onFullScroll: PropTypes.func,
};

//-----------  Export  -----------//

export default ScrollBlock;
