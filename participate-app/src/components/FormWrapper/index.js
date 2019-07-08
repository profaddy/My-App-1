//-----------  Imports  -----------//

import Styled                   from './styles'

import FormWrapper              from './FormWrapper'

import { questionnairesAction } from 'models/questionnaires/actions'

//-----------  Helpers  -----------//

FormWrapper.ReduxDefaults = {
  onSubmit         : questionnairesAction,
  destroyOnUnmount : false,
}

//-----------  Styled Components  -----------//

FormWrapper.FormContent  = Styled.FormContent
FormWrapper.FormActions  = Styled.FormActions

//-----------  Exports  -----------//

export default FormWrapper
