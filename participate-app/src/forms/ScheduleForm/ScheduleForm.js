//-----------  Imports  -----------//

import moment               from 'moment'

import Styled               from './styles'
import validate             from './validation'
import { form }             from './config'

import React                from 'react'
import PropTypes            from 'prop-types'
import { reduxForm, Field } from 'redux-form'

import Button               from '@miro/core-ui/lib/components/Button'
import Logo                 from '@miro/core-ui/lib/components/Logo'
import FormSubmit           from '@miro/core-ui/lib/forms/FormSubmit'
import InlineDateField      from '@miro/core-ui/lib/forms/InlineDateField'

import FormWrapper          from 'components/FormWrapper'

//----------   Helpers -----------//

const isBusinessDay = (date) => {
  return isPublicHoliday(date) && isWeekday(date);
}

const isWeekday = (date) => {
  return date.weekday() !== 0 && date.weekday() !== 6
}

const isPublicHoliday = (date) => {
  return true
}

//-----------  Component  -----------//

const ScheduleForm = ({submitting, onExit, canConsent, handleSubmit, ...props})  => (
  <Styled.ScheduleForm noValidate onSubmit={handleSubmit}>
    <Styled.Fields>
      <Field
        type='date'
        name='startDate'
        required={true}
        label='Select Interview Date'
        component={InlineDateField}
        placeholder='Select Interview Date'
        showTimeSelect
        minDate={moment()}
        maxDate={moment().add(30, 'days')}
        minTime={moment().hours(7)}
        maxTime={moment().hours(16)}
        filterDate={isBusinessDay}
      />
    </Styled.Fields>
    <FormWrapper.FormActions>
      <FormSubmit disabled={submitting} canReset {...props}>
        Submit
      </FormSubmit>
    </FormWrapper.FormActions>
  </Styled.ScheduleForm>
)

//-----------  Type Definitions  -----------//

ScheduleForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default reduxForm({
  form               : form,
  validate           : validate,
  destroyOnUnmount   : false,
  enableReinitialize : true,
})(ScheduleForm)
