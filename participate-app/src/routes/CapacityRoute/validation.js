//-----------  Validation  -----------//

const validate = ({ study_purpose, new_treatment, false_statements, participation_risks, participation_benefits, contact_researchers, withdraw_anytime, ...values }) => {

  if ('yes' !== study_purpose)
    return false

  if ('no' !== new_treatment)
    return false

  if ('blood' !== false_statements)
    return false

  if ('confidentiality' !== participation_risks)
    return false

  if ('contribution' !== participation_benefits)
    return false

  if ('yes' !== contact_researchers)
    return false

  if ('yes' !== withdraw_anytime)
    return false

  return true
}

//-----------  Exports  -----------//

export default validate