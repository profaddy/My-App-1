//-----------  Imports  -----------//

import RadioFields from 'fields/RadioFields'
import HiddenField from 'fields/HiddenField'

//-----------  Definitions  -----------//

export const form = 'symptoms'

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
      name      : `${conditions[key].id}.symptoms`,
      component : RadioFields,
      required  : true,
      options   : [
        { value: 'asymptomatic' },
        { value: 'mild' },
        { value: 'moderate' },
        { value: 'severe' },
      ]
    })
  })

  return fields
}