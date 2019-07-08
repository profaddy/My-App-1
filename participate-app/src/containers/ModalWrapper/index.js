//-----------  Imports  -----------//

import { connect } from 'react-redux';

import { modalsActions } from 'models/modals/actions';

import ModalWrapper from './ModalWrapper';

import { isEligibleSelector } from 'models/user/selectors';

//-----------  Redux Maps  -----------//

const mapState = state => ({
  ...state.modals,
  eligible: isEligibleSelector(state),
});

const mapDispatch = dispatch => ({
  hideModal: () => dispatch(modalsActions.hide()),
  signOut: () => dispatch(modalsActions.signout()),
});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(ModalWrapper);
