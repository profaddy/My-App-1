//-----------  Imports  -----------//

import Styled     from './styles'

import React      from 'react'
import PropTypes  from 'prop-types'

//-----------  Component  -----------//

class DebugWindow extends React.Component {

  state = {
    minimized: false
  }

  toggleMinimize = () => {
    this.setState({
      minimized: !this.state.minimized
    })
  }

  render() {
    const { formData } = this.props;

    return (
      <Styled.DebugWindow minimized={this.state.minimized}>
        <Styled.DebugHeader onClick={this.toggleMinimize}>
          <b>DEBUG</b>
        </Styled.DebugHeader>

        <Styled.DebugContent>
          {Object.keys(formData).map((key, index) => (
            <div>
              <h2>{key}</h2>
              <pre>{JSON.stringify(formData[key].values, null, 2)}</pre>
            </div>
          ))}
        </Styled.DebugContent>

      </Styled.DebugWindow>
    )
  }
}

//-----------  Type Definitions  -----------//

DebugWindow.propTypes = {
}

//-----------  Export  -----------//

export default DebugWindow
