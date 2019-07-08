//-----------  Imports  -----------//

import get from 'lodash/get';
import find from 'lodash/find';
import isArray from 'lodash/isArray';

import Styled from './styles';

import React from 'react';
import { Redirect } from 'react-router-dom';

import questionnaires from 'data/questionnaires';
import history from 'models/history';

import Button from '@miro/core-ui/lib/components/Button';
import FormSubmit from '@miro/core-ui/lib/forms/FormSubmit';
import DebugWindow from 'components/DebugWindow';

//-----------  Helpers  -----------//

export function getQuestionnairePath(props) {
  const indexes = get(props, 'location.pathname', '').match(
    /\/questionnaires\/(\w+)/i,
  );
  return isArray(indexes) ? indexes[1] : null;
}

const questionnariepath = [
  `demographics`,
  `mobile`,
  `participation`,
  `medical_history`,
  `conditions`,
  `strokeSeizure`,
  `diagnosis`,
  `symptoms`,
  `prescriptions`,
];
//-----------  Component  -----------//

const FormWrapper = Questionnaire =>
  class extends React.Component {
    //-----------  Helpers  -----------//

    getTitle = path => {
      const questionnaire = find(questionnaires, ['slug', path]);
      return get(questionnaire, 'title', '');
    };

    //-----------  HTML Render  -----------//

    render() {
      const { handleSubmit, ...props } = this.props;

      const path = getQuestionnairePath(props);
      const questionnarieIndex = questionnariepath.indexOf(path);
      const goBackpath = questionnariepath[questionnarieIndex - 1];

      if (!path) return <Redirect to="/questionnaires" />;

      const title = this.getTitle(path);

      return (
        <form noValidate onSubmit={handleSubmit}>
          <Styled.FormWrapper title={title}>
            {process.env.MIRO_ENV === 'local' && <DebugWindow />}

            <Styled.FormContent>
              <Questionnaire {...props} />
            </Styled.FormContent>

            <Styled.FormActions>
              <Button
                disabled={props.submitting}
                onClick={() => {
                  history.push(`/questionnaires/${goBackpath}`);
                }}
              >
                Back
              </Button>
              <FormSubmit {...props} canReset>
                Next
              </FormSubmit>
            </Styled.FormActions>
          </Styled.FormWrapper>
        </form>
      );
    }
  };

//-----------  Export  -----------//

export default FormWrapper;
