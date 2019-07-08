//-----------  Imports  -----------//

import { connect } from 'react-redux';

import { questionnairesSelector } from 'models/questionnaires/selectors';
import { questionnairesActions } from 'models/questionnaires/actions';

import QuestionnairesRoute from './QuestionnairesRoute';

//-----------  Redux Maps  -----------//

const mapState = state => ({
  questionnaires: questionnairesSelector(state),
});

const mapDispatch = dispatch => ({
  requestQuestionnaires: () => dispatch(questionnairesActions.request()),
});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(QuestionnairesRoute);
