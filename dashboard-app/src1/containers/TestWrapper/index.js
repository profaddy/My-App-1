//-----------  Imports  -----------//

import Styled from './styles';

import { testSubmitAction } from 'models/tests/actions';

import TestWrapper, { notesName } from './TestWrapper';

//-----------  Helpers  -----------//

TestWrapper.ReduxDefaults = {
  onSubmit: testSubmitAction,
};

//-----------  Styled Components  -----------//

TestWrapper.Total = Styled.Total;
TestWrapper.Block = Styled.Block;
TestWrapper.Footer = Styled.Footer;

//-----------  Exports  -----------//

export const gloablFields = [notesName];

export default TestWrapper;
