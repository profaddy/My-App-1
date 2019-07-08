import React from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import renderTextField from 'components/InputFields/TextArea';
import { RadioButton } from 'components/InputFields/RadioField';
import { connect } from 'react-redux';
import Styled from './styles';
import FormSubmit from '@miro/core-ui/lib/forms/FormSubmit';
import Divider from 'components/Divider';
import vars from '@miro/core-ui/lib/styles/variables';

class DrugTest extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Styled.DrugForm onSubmit={handleSubmit}>
        <Styled.CheckboxDiv>
          <label
            style={{ paddingLeft: 0, marginBottom: 20, fontWeight: 'bolder' }}
          >
            ENTER DRUG TEST RESULT
          </label>
          <RadioButton
            content={{
              id: 'test_result',
              options: [
                { label: 'Positive', value: 'positive' },
                { label: 'Negative', value: 'negative' },
              ],
            }}
          />
        </Styled.CheckboxDiv>

        {this.props.isPositive && (
          <Field
            component={renderTextField}
            name="result_description"
            type="textarea"
            label="Descritption"
          />
        )}
        <Divider
          style={{ border: `.5px solid ${vars.grayLighter}`, marginTop: 30 }}
        />
        <Styled.Footer>
          <div>
            <FormSubmit {...this.props} canReset>
              Save
            </FormSubmit>
          </div>
        </Styled.Footer>
      </Styled.DrugForm>
    );
  }
}

const selector = formValueSelector('drugTest');

DrugTest = reduxForm({
  form: 'drugTest',
  enableReinitialize: true,
  destroyOnUnmount: true,
})(DrugTest);

export default connect(state => {
  const result = selector(state, 'test_result');
  return { isPositive: result === 'positive' };
})(DrugTest);
