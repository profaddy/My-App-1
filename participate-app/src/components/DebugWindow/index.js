//-----------  Imports  -----------//

import { connect }               from 'react-redux'

import Styled                   from './styles'

import DebugWindow              from './DebugWindow'

import { formDataSelector } from 'models/questionnaires/selectors'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  formData  : formDataSelector(state),
})

//-----------  Helpers  -----------//

// DebugWindow.ReduxDefaults = {
//   onSubmit         : questionnairesAction,
//   destroyOnUnmount : false,
// }

//-----------  Styled Components  -----------//
//
// DebugWindow.FormContent  = Styled.FormContent
// DebugWindow.FormActions  = Styled.FormActions

//-----------  Exports  -----------//

export default connect(mapState)(DebugWindow)
