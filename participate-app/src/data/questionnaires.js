//-----------  Imports  -----------//

import DemographicsQuestionnaire,
       { name as demographics }   from 'questionnaires/DemographicsQuestionnaire'
import MobileUseQuestionnaire,
       { name as mobileUse }      from 'questionnaires/MobileUseQuestionnaire'
import ParticipationQuestionnaire,
       { name as participation }  from 'questionnaires/ParticipationQuestionnaire'
import MedicalHistoryQuestionnaire,
       { name as medicalHistory } from 'questionnaires/MedicalHistoryQuestionnaire'
import MedicalConditionsQuestionnaire,
       { name as conditions }     from 'questionnaires/MedicalConditionsQuestionnaire'
import StrokeSeizureLocationQuestionnaire,
       { name as strokeSeizure }  from 'questionnaires/StrokeSeizureLocationQuestionnaire'
import DiagnosisDatesQuestionnaire,
       { name as diagnosis }      from 'questionnaires/DiagnosisDatesQuestionnaire'
import SymptomSeverityQuestionnaire,
       { name as symptoms }       from 'questionnaires/SymptomSeverityQuestionnaire'
import PrescriptionsQuestionnaire,
       { name as prescriptions }  from 'questionnaires/PrescriptionsQuestionnaire'

//-----------  Exports  -----------//

export default [{
  slug  : demographics,
  form  : DemographicsQuestionnaire,
  title : 'Demographics'
},{
  slug  : mobileUse,
  form  : MobileUseQuestionnaire,
  title : 'Mobile Device Use'
},{
  slug  : participation,
  form  : ParticipationQuestionnaire,
  title : 'Participation in Research'
},{
  slug  : medicalHistory,
  form  : MedicalHistoryQuestionnaire,
  title : 'Medical History'
},{
  slug  : conditions,
  form  : MedicalConditionsQuestionnaire,
  title : 'Medical Conditions'
},{
  slug  : strokeSeizure,
  form  : StrokeSeizureLocationQuestionnaire,
  title : 'Stroke / Seizure'
},{
  slug  : diagnosis,
  form  : DiagnosisDatesQuestionnaire,
  title : 'Diagnosis Dates'
},{
  slug  : symptoms,
  form  : SymptomSeverityQuestionnaire,
  title : 'Symptom Severity'
},{
  slug  : prescriptions,
  form  : PrescriptionsQuestionnaire,
  title : 'Prescriptions'
}]