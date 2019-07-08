//-----------  Imports  -----------//

import { connect } from 'react-redux';

import history from 'models/history';

import Study from './Study';
import { studiesSelector } from 'models/studies/selectors';
import { studiesActions, batteriesActions } from 'models/studies/actions';

//-----------  Redux Maps  -----------//

const mapState = state => ({
  cards: studiesSelector(state),
});

const mapDispatch = dispatch => ({
  getCards: cardType => {
    switch (cardType) {
      case 'studies':
        console.log('getCards: studies');
        dispatch(studiesActions.request());
        break;
      case 'batteries':
        console.log('getCards: batteries');
        dispatch(batteriesActions.request());
        break;
      default:
        console.log('getCards: default');
        dispatch(studiesActions.request());
        break;
    }
  },
});

//-----------  Exports  -----------//

export default connect(
  mapState,
  mapDispatch,
)(Study);
