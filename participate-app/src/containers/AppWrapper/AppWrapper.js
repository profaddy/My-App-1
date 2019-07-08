//-----------  Imports  -----------//

import Styled       from './styles'

import React        from 'react'
import PropTypes    from 'prop-types'

import AppRoutes    from 'routes/index'
import ModalWrapper from 'containers/ModalWrapper'

//-----------  Component  -----------//

class AppWrapper extends React.Component {

  componentDidMount(){
    if (typeof window === 'object')
      window.addEventListener('beforeunload', this.leaveWarning)
  }

  componentWillUnmount(){
    if (typeof window === 'object')
      window.removeEventListener('beforeunload', this.leaveWarning)
  }

  //-----------  Event Handlers  -----------//

  leaveWarning = (evt) => {
    if (this.props.dirty){ // && ('development' !== process.env.NODE_ENV)){
      const msg = 'Your data will be lost if you leave the page, are you sure?'
      evt.returnValue = msg
    }
  }

  //-----------  HTML Render  -----------//

  render(){
    return (
      <React.Fragment>
        <AppRoutes />
        <ModalWrapper />
      </React.Fragment>
    )
  }
}

//-----------  Type Definitions  -----------//

AppWrapper.propTypes = {
  dirty: PropTypes.bool.isRequired
}

//-----------  Export  -----------//

export default AppWrapper
