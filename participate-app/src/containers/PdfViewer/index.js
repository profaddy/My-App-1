//-----------  Imports  -----------//

import { connect }          from 'react-redux'

import { studyPdfSelector } from 'models/study/selectors'

import PdfViewer            from './PdfViewer'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  pdf: studyPdfSelector(state),
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(PdfViewer)
