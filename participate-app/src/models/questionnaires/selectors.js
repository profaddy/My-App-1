//-----------  Imports  -----------//

import get                  from 'lodash/get'
import set                  from 'lodash/set'
import map                  from 'lodash/map'
import reject               from 'lodash/reject'
import filter               from 'lodash/filter'
import pick                 from 'lodash/pick'

import { createSelector }   from 'reselect'
import { getFormValues }    from 'redux-form'

import { OTHER, UNSURE }    from 'utilities/constants'

import { psychPrimary,
         neuroPrimary,
         form as condForm } from 'questionnaires/MedicalConditionsQuestionnaire/config'
import { form as presForm } from 'questionnaires/PrescriptionsQuestionnaire/config'
import { form as dataForm } from 'forms/DataSharingForm/config'
import fields               from 'forms/ProviderFields/config'

import { conditionsTest1,
         conditionsTest2 }  from './__mocks__/api.js'

//-----------  Definitions  -----------//

const conditions = [ ...psychPrimary, ...neuroPrimary ]

//-----------  Helpers  -----------//

const brainKeys = ['dx_neuro_primary.stroke', 'dx_neuro_primary.seizures']

export function cleanName(label, value, context){
  if (UNSURE === value) return `Don't Know: ${context}`
  if (OTHER === value)  return `Other: ${context}`
  return label
}

export function createConditionObject(id, label, value, context, values){
  return { id, label: cleanName(label, value, get(values, id.replace(/\./g, '_'), context)) }
}

//-----------  Inputs  -----------//

export const idSelector                  = state => state.questionnaires.form
export const isDirtySelector             = state => state.questionnaires.isDirty
export const questionnaireSelector       = (state, form) => get(state.questionnaires.data, form)
export const conditionsFormSelector      = (state) => getFormValues(condForm)(state)
export const dataSharingFormSelector     = (state) => getFormValues(dataForm)(state)
export const prescriptionsFormSelector   = (state) => getFormValues(presForm)(state)
export const hasEulaSelector             = (state) => state.questionnaires.hasEula
export const formDataSelector            = state => state.form

//-----------  Selectors  -----------//

export const medicalConditionsSelector      = createSelector([conditionsFormSelector], medicalConditionsFunc)
export const conditionPrescriptionsSelector = createSelector([prescriptionsFormSelector], conditionPrescriptionsFunc)
export const brianConditionsSelector        = createSelector([medicalConditionsSelector], brianConditionsFunc)
export const providerInformationSelector    = createSelector([dataSharingFormSelector], providerInformationFunc)

//-----------  Functions  -----------//

export function medicalConditionsFunc(values){
  let list = []

  conditions.forEach(field => {
    const vals = get(values, field.name, [])

    get(field, 'options', []).forEach(primary => {
      if (vals.includes(primary.value)){
        list.push(createConditionObject(`${field.name}.${primary.value}`, primary.label, primary.value, field.context, values))
      }

      get(primary, 'options', []).forEach(secondary => {
        if (vals.includes(`${primary.value}.${secondary.value}`)){
          list.push(createConditionObject(`${field.name}.${primary.value}_${secondary.value}`, secondary.label, secondary.value, primary.label, values))
          list = reject(list, ['id', `${field.name}.${primary.value}`])
        }
      })
    })
  })

  return list
}

export function conditionPrescriptionsFunc(values){
  let prescriptions = {}

  Object.keys(values || {}).forEach(type => {
    Object.keys(values[type]).forEach(condition => {
      const { using_medication } = get(values, [type, condition], {})

      if (using_medication)
        set(prescriptions, [type, condition], using_medication)
    })
  })

  return prescriptions
}

export function brianConditionsFunc(values){
  let list = []

  brainKeys.forEach(key => {
    list.push(...filter(values, ({ id }) => id.startsWith(key)))
  })

  return list
}

export function providerInformationFunc(values){
  const fieldNames = map(fields, 'name')
  return pick(values, fieldNames)
}
