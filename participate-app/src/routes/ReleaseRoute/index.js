//-----------  Imports  -----------//

import { connect }                     from 'react-redux'

import { questionnairesAction }        from 'models/questionnaires/actions'
import { providerInformationSelector } from 'models/questionnaires/selectors'
import { canConsentSelector }          from 'models/user/selectors'
import { userActions }                 from 'models/user/actions'

import ReleaseRoute                    from './ReleaseRoute'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  canConsent   : canConsentSelector(state),
  providerInfo : providerInformationSelector(state)
})

const mapDispatch = (dispatch) => ({
  onExit   : () => dispatch(userActions.exit()),
  onSubmit : questionnairesAction,
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ReleaseRoute)
