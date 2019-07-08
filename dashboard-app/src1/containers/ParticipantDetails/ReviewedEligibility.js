import React from 'react';
import Styled from './styles';
import FormSubmit from '@miro/core-ui/lib/forms/FormSubmit';
import { reduxForm, Field } from 'redux-form';
import RepresentativeSignature from 'components/SignatureField';

const ReviewedEligibility = ({ handleSubmit, ...props }) => (
  <form onSubmit={handleSubmit}>
    <Styled.ReviewedContaoner>
      <Styled.Bold>
        Based on Inclusion/Inclusion criteria the participant is eligible to
        participate in the study
      </Styled.Bold>
      <Styled.SignatureDiv style={{ marginTop: 45 }}>
        <Field
          component={RepresentativeSignature}
          name="representative_signature"
          required
          {...props}
        />
      </Styled.SignatureDiv>
      <div>
        <FormSubmit {...props} canReset>
          SIGN OFF
        </FormSubmit>
      </div>
    </Styled.ReviewedContaoner>
  </form>
);

export default reduxForm({
  form: 'reviewdEligibility',
  enableReinitialize: true,
})(ReviewedEligibility);
