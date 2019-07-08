import validator from 'validator';
import moment from 'moment';

export const validate = values => {
  const errors = {};
  if (!values.first_name) {
    errors.first_name = 'Required';
  }

  if (!values.last_name) {
    errors.last_name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!validator.isEmail(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (values.phone_number) {
    const cleaned = values.phone_number.replace(/\D/g, '');
    if (cleaned.length !== 10)
      errors.phone_number = 'This is an invalid phone number';
    if (cleaned[0] === '0' || cleaned[0] === '1')
      errors.phone_number = `Phone Number cannot start with "1" or "0"`;
  }

  if (!values.mob) {
    errors.mob = 'Required';
  } else {
    const arr = values.mob.split('/');
    if (arr.length > 1) {
      errors.mob = moment(values.mob, 'MMYYYY')
        .fromNow()
        .includes('ago')
        ? null
        : 'Month of birth cannot be in future';
    } else {
      errors.mob = 'Month of birth does not seem to be right';
    }
  }

  return errors;
};
