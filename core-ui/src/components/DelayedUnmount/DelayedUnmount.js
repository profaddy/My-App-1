//-----------  Imports  -----------//

import React from 'react';
import PropTypes from 'prop-types';

import { loadDelay } from 'utilities/constants';

//-----------  Component  -----------//

class DelayedUnmount extends React.Component {
  state = {
    shouldRender: this.props.mounted,
  };

  componentDidUpdate(prevProps) {
    // Delay removal of child compnent by a given numebr of milliseconds

    if (prevProps.mounted && !this.props.mounted)
      setTimeout(
        () => this.setState({ shouldRender: false }),
        prevProps.delay || loadDelay,
      );
    else if (!prevProps.mounted && this.props.mounted)
      this.setState({ shouldRender: true });
  }

  //-----------  HTML Render  -----------//

  render() {
    const { shouldRender } = this.state;
    const { children } = this.props;

    return shouldRender ? children : null;
  }
}

//-----------  Type Definitions  -----------//

DelayedUnmount.propTypes = {
  delay: PropTypes.number,
  mounted: PropTypes.bool,
  children: PropTypes.any.isRequired,
};

//-----------  Export  -----------//

export default DelayedUnmount;
