//-----------  Imports  -----------//

import EulaDisgareeModal, { form } from './EulaDisgareeModal';
import { connect } from 'react-redux';
import { questionnairesAction } from 'models/questionnaires/actions';
import { modalsActions } from 'models/modals/actions';

//-----------  Exports  -----------//

export const name = form;

const mapState = state => ({});

const mapDispatch = dispatch => ({
  onSubmit: questionnairesAction,
  onCancel: () => dispatch(modalsActions.hide()),
});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(EulaDisgareeModal);
