//-----------  Imports  -----------//

import { connect }               from 'react-redux'

import { hasStudySelector }      from 'models/study/selectors'
import { questionnaireSelector } from 'models/questionnaires/selectors'

import { userActions }           from 'models/user/actions'
import { questionnairesAction }  from 'models/questionnaires/actions'

import IndexRoute                from './IndexRoute'

import { name }                  from 'forms/EulaForm'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  hasEula  : !!questionnaireSelector(state, name),
  hasStudy : hasStudySelector(state)
})

const mapDispatch = (dispatch) => ({
  onExit   : () => dispatch(userActions.exit()),
  onSubmit : questionnairesAction,
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(IndexRoute)
