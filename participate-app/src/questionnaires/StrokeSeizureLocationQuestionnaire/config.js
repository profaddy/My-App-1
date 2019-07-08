//-----------  Imports  -----------//

import snakeCase      from 'lodash/snakeCase'

import HiddenField    from 'fields/HiddenField'
import CheckboxField  from 'fields/CheckboxField'
import CheckboxFields from 'fields/CheckboxFields'

//-----------  Definitions  -----------//

export const form  = 'strokes'

export const spots = ['Right', 'Left', 'All']
export const types = ['Brain Stem', 'Cerebellum', 'Frontal', 'Occipital', 'Parietal', 'Temporal']

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
    })

    fields.push({
      name      : `${conditions[key].id}.unknown`,
      label     : 'Unknown',
      component : CheckboxField,
    })

    types.forEach(type => {
      fields.push({
        name      : `${conditions[key].id}.${snakeCase(type)}`,
        label     : type,
        component : CheckboxFields,
        options   : spots.map(spot => ({ value: snakeCase(spot) }))
      })
    })
  })

  return fields
}