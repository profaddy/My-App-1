//-----------  Imports  -----------//

import Styled      from './styles'

import React       from 'react'
import PropTypes   from 'prop-types'

import PdfViewer   from 'containers/PdfViewer'
import StudyHeader from 'containers/StudyHeader'

import ConsentForm from 'forms/ConsentForm'

//-----------  Component  -----------//

class ConsentRoute extends React.Component {

  state = {
    isLoading: true
  }

  //-----------  Event Handlers  -----------//

  onPdfLoad = () => {
    this.setState({ isLoading: false })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { isLoading } = this.state
    const { onSubmit } = this.props

    return (
      <Styled.ConsentRoute title='Research Participant Informed Consent & Privacy Authorization'>
        {/*<StudyHeader />*/}
        <PdfViewer onLoad={this.onPdfLoad} />
        <ConsentForm onSubmit={onSubmit} disabled={isLoading} />
      </Styled.ConsentRoute>
    )
  }
}

//-----------  Type Definitions  -----------//

ConsentRoute.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default ConsentRoute
