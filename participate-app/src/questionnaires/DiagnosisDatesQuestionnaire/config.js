//-----------  Imports  -----------//

import MonthField  from 'fields/MonthField'
import HiddenField from 'fields/HiddenField'

//-----------  Definitions  -----------//

export const form = 'diagnosis'

//-----------  Form Fields  -----------//

export default function fields(conditions){
  let fields = []

  Object.keys(conditions).forEach(key => {
    fields.push({
      name      : `${conditions[key].id}.label`,
      label     : conditions[key].label,
      props     : { value: conditions[key].label },
      component : HiddenField,
      required  : true,
    },{
      name      : `${conditions[key].id}.diagnosis_date`,
      component : MonthField,
      required  : true,
    },{
      name      : `${conditions[key].id}.symptoms_date`,
      component : MonthField,
      required  : true,
    })
  })

  return fields
}