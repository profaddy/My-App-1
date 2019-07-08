//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import { Field } from 'redux-form';

import Button from '@miro/core-ui/lib/components/Button';
import FormField from '@miro/core-ui/lib/forms/FormField';
import FormSubmit from '@miro/core-ui/lib/forms/FormSubmit';

//-----------  Definitions  -----------//

export const notesName = 'notes';

//-----------  Component  -----------//

const TestWrapper = TestForm =>
  class extends React.Component {
    state = {
      showNotes: false,
    };

    //-----------  Event Handlers  -----------//

    showNotes = () => {
      this.setState({ showNotes: true }, () => {
        document.getElementsByTagName('textarea')[0].focus();
      });
    };

    //-----------  HTML Render  -----------//

    render() {
      const {
        back,
        title,
        dispatch,
        hasNotes,
        handleSubmit,
        initialValues,
        ...props
      } = this.props;
      const { showNotes } = this.state;

      return (
        <Styled.Form noValidate onSubmit={handleSubmit}>
          <Styled.Header>
            <Styled.Title>
              Created on {new Date().toLocaleDateString()}
            </Styled.Title>
          </Styled.Header>

          <Styled.TestContent>
            <TestForm {...props} />
          </Styled.TestContent>

          <Styled.Bottom>
            <Styled.Notes
              open={showNotes || initialValues.notes}
              onClick={this.showNotes}
            >
              <a>
                + Add Note <i>(Optional)</i>
              </a>
              {(showNotes || initialValues.notes) && (
                <Field
                  type="textarea"
                  name={notesName}
                  component={FormField}
                  placeholder="Add your notes.."
                />
              )}
            </Styled.Notes>
            <Styled.Next>
              <Button to={back}>Back</Button>
              <FormSubmit {...props} canReset>
                Submit
              </FormSubmit>
            </Styled.Next>
          </Styled.Bottom>
        </Styled.Form>
      );
    }
  };

//-----------  Export  -----------//

export default TestWrapper;
