//-----------  Imports  -----------//

import FormField   from 'fields/FormField'
import YesNoField  from 'fields/YesNoField'
import HiddenField from 'fields/HiddenField'
import RadioFields from 'fields/RadioFields'

//-----------  Definitions  -----------//

export const form = 'prescriptions'

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
      name      : `${conditions[key].id}.using_medication`,
      component : YesNoField,
      required  : true,
    },{
      type        : 'textarea',
      name        : `${conditions[key].id}.prescriptions`,
      label       : 'Prescribed medications I take include: ',
      group       : conditions[key].id,
      component   : FormField,
      placeholder : 'Please include the following:\n1) Medication Name\n2) Dosage\n3) Dosage Frequency (ex. twice a day)\n4) Start Date of Medication',
    },{
      name      : `${conditions[key].id}.side_effects`,
      label     : 'Medication Side Effects?',
      group     : conditions[key].id,
      component : RadioFields,
      options   : [
        { value: 'none', label: 'None' },
        { value: 'mild', label: 'Mild' },
        { value: 'moderate', label: 'Moderate' },
        { value: 'severe', label: 'Severe' },
      ]
    })
  })

  return fields
}