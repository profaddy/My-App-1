//-----------  Imports  -----------//

import Styled       from './styles'

import React        from 'react'
import PropTypes    from 'prop-types'
import { Page,
         Document } from 'react-pdf/dist/entry.webpack'

import ErrorBlock   from '@miro/core-ui/lib/components/ErrorBlock'
import LoadingBlock from '@miro/core-ui/lib/components/LoadingBlock'
import Button       from '@miro/core-ui/lib/components/Button'

//-----------  Component  -----------//

class PdfViewer extends React.Component {

  state = {
    numPages   : null,
    isLoading  : true,
    pageNumber : 1,
  }

  //-----------  Event Handlers  -----------//

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages, isLoading: false })
    if ('function' === typeof this.props.onLoad)
      this.props.onLoad()
  }

  increamentPage = () => {
    const pageNumber = this.state.pageNumber !== this.state.numPages  ? this.state.pageNumber + 1 : this.state.pageNumber
    this.setState({ pageNumber }, this.scrolToPdf)
  }

  decreamentPage = () => {
    const pageNumber = this.state.pageNumber !== 1  ? this.state.pageNumber - 1 : this.state.pageNumber
    this.setState({ pageNumber }, this.scrolToPdf)
  }

  scrolToPdf = () => {
    const node = document.getElementById('pdf_viewer')
    if (node)
      node.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { numPages, isLoading, pageNumber } = this.state
    const { pdf } = this.props

    return pdf ? (
      <React.Fragment>
        <Styled.PdfViewer id='pdf_viewer' isLoading={isLoading}>
          <Document
            file={pdf}
            renderMode='svg'
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>

          {isLoading && (
            <LoadingBlock title='Fetching PDF...' />
          )}
        </Styled.PdfViewer>

        {!isLoading && (
          <React.Fragment>
            <p>Page {pageNumber} of {numPages}</p>
            {numPages !== 1 && (
             <Styled.PdfControls>
              {pageNumber !== 1 &&
                <Button text='Previous Page' onClick={this.decreamentPage} small />}
              {pageNumber !== numPages &&
                <Button text='Next Page' onClick={this.increamentPage} small />}
           </Styled.PdfControls>)
            }
          </React.Fragment>
        )}
      </React.Fragment>
    ) : (
      <Styled.ErrorWrapper>
        <ErrorBlock error={new Error('Study has no Consent PDF')} />
      </Styled.ErrorWrapper>
    )
  }
}

//-----------  Type Definitions  -----------//

PdfViewer.propTypes = {
  pdf    : PropTypes.any,
  onLoad : PropTypes.func,
}

//-----------  Export  -----------//

export default PdfViewer
