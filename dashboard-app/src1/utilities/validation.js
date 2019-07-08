//-----------  Imports  -----------//

import isArray from 'lodash/isArray';

//-----------  Validation  -----------//

const validate = fields => ({ normative_scores, ...values }) => {
  let errors = {};

  fields.forEach(({ name, required, validate }) => {
    if (!!required && !values[name]) {
      errors[name] = 'Required';
    } else if (isArray(validate)) {
      for (let [test, message, opts] of validate) {
        if (!test(values[name], opts)) {
          errors[name] = message;
          break;
        }
      }
    }
  });

  if (!normative_scores) errors.normative_scores = 'Required';

  return errors;
};

//-----------  Exports  -----------//

export default validate;
