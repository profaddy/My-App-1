//-----------  Imports  -----------//

import faker            from 'faker'

import { randNum,
         mockResponse } from '@miro/core-ui/lib/utilities/mocks'

//-----------  Test Data  -----------//

export const conditionsTest1 = {"dx_psych_primary":["anxiety","depression","other"],"dx_psych_primary_other":"Redwine","dx_neuro_primary":["multiple_sclerosis","infection","mild_cognitive_impairment","multiple_sclerosis.progressing_relapsing","multiple_sclerosis.secondary_progressive","multiple_sclerosis.other","stroke","stroke.other","stroke.concussion","cancer_related"],"dx_neuro_primary_multiple_sclerosis_other":"Other Thing"}
export const conditionsTest2 = {"dx_psych_primary":["bi-polar"],"dx_neuro_primary":["multiple_sclerosis","multiple_sclerosis.primary_progressive","stroke","stroke.transient_ischemic_attack","seizures","seizures.generalized"]}

//-----------  Mock Data  -----------//

export const questionnairessMock = (num) => new Array(num).fill().map(questionnairesMock)

export const questionnairesMock = (_, index) => ({
  id: randNum(10000, 99999)
})

//-----------  Mock Endpoints  -----------//

export const questionnairessActivity = () => {
  const data = questionnairessMock(randNum(1, 10))
  return mockResponse(data)
}
