//-----------  Imports  -----------//

import YesNoField        from 'fields/YesNoField'
import CheckboxFields    from 'fields/CheckboxFields'

import { OTHER, UNSURE } from 'utilities/constants'

//-----------  Definitions  -----------//

export const form     = 'conditions'
export const hasPsych = 'has_psychiatric_condition'
export const hasNeuro = 'has_neurological_condition'
export const psychKey = 'dx_psych_primary'
export const neuroKey = 'dx_neuro_primary'

//-----------  Form Fields  -----------//

export const psychBase = [{
  name      : hasPsych,
  label     : 'Have you been diagnosed with a psychiatric condition?',
  component : YesNoField,
  required  : true,
}]

export const neuroBase = [{
  name      : hasNeuro,
  label     : 'Have you been diagnosed with a neurological condition?',
  component : YesNoField,
  required  : true,
}]

export const psychPrimary = [{
  name      : psychKey,
  label     : 'Psychiatric condition(s) past and present?',
  notes     : '(select all that apply)',
  component : CheckboxFields,
  context   : 'Psych',
  options   : [
    { value: 'ADHD', label: 'ADHD (Attention Deficit Hyperactivity Disorder)' },
    { value: 'addiction', label: 'Addiction / Substance Abuse' },
    { value: 'anxiety', label: 'Anxiety' },
    { value: 'autism', label: 'Autism' },
    { value: 'bi-polar', label: 'BiPolar' },
    { value: 'depression', label: 'Depression' },
    { value: 'OCD', label: 'OCD (Obsessive Compulsive Disorder)' },
    { value: 'PTSD', label: 'PTSD (Post-Traumatic Stress Disorder)' },
    { value: 'eating_disorder', label: 'Eating Disorder' },
    { value: UNSURE, label: 'Don\'t Know' },
    { value: OTHER, label: 'Other', input: true }
  ]
}]

export const neuroPrimary = [{
  name      : neuroKey,
  label     : 'Neurological condition(s) past and present?',
  notes     : '(select all that apply)',
  component : CheckboxFields,
  context   : 'Neuro',
  options   : [
    { value: 'cancer_related', label: 'Cancer-Related Neurological Problems', options: [
      { value: 'brain_tumor', label: 'Brain Tumor' },
      { value: 'cancer_antibody', label: 'Cancer Antibody Syndrome' },
      { value: 'chemotherapy', label: 'Chemotherapy' },
      { value: 'radiation_therapy', label: 'Radiation Therapy' },
      { value: 'spinal_tumor', label: 'Spinal Tumor' },
      { value: 'surgery', label: 'Surgery' },
      { value: UNSURE, label: 'Don\'t Know' },
      { value: OTHER, label: 'Other', input: true },
    ]},
    { value: 'chronic_pain', label: 'Chronic Pain' },
    { value: 'concussion', label: 'Concussion' },
    { value: 'delirium', label: 'Delirium' },
    { value: 'dementing_disorder', label: 'Dementing Disorder', options: [
      { value: 'alzheimers', label: 'Alzheimer\'s Disease' },
      { value: 'cerebellar_degeneration', label: 'Cerebellar Degeneration' },
      { value: 'corticobasal_degeneration', label: 'Corticobasal Degeneration' },
      { value: 'creutzfeld_jakob', label: 'Creutzfeld Jakob Disease (Mad Cow)' },
      { value: 'frontotemporal_dementia', label: 'Frontotemporal Dementia' },
      { value: 'huntington', label: 'Huntington\'s Disease' },
      { value: 'hydrocephalus', label: 'Hydrocephalus' },
      { value: 'lewy_body', label: 'Lewy Body Dementia' },
      { value: 'parkinson', label: 'Parkinson\'s Disease' },
      { value: 'supranuclear_palsy', label: 'Progressive Supranuclear Palsy' },
      { value: 'vascular_dementia', label: 'Vascular Dementia' },
      { value: 'wernicke_korsakoff', label: 'Wernicke-Korsakoff Syndrome' },
      { value: UNSURE, label: 'Don\'t Know' },
      { value: OTHER, label: 'Other', input: true },
    ]},
    { value: 'developmental_disorder', label: 'Developmental Disorder', options: [
      { value: 'ADHD', label: 'ADHD (Attention Deficit Hyperactivity Disorder)' },
      { value: 'autism', label: 'Autism' },
      { value: 'dyslexia', label: 'Dyslexia' },
      { value: 'speech_delay', label: 'Speech Delay' },
      { value: UNSURE, label: 'Don\'t Know' },
      { value: OTHER, label: 'Other', input: true },
    ]},
    { value: 'dizziness_and_vertigo', label: 'Dizziness and vertigo' },
    { value: 'hydrocephalus', label: 'Hydrocephalus' },
    { value: 'infection', label: 'Infection' },
    { value: 'migrane_and_headache', label: 'Migraine and Headache' },
    { value: 'mild_cognitive_impairment', label: 'Mild Cognitive Impairment' },
      { value: 'movement_disorder', label: 'Movement Disorder', options: [
      { value: 'ALS', label: 'ALS (Lou Gehrig\'s Disease)' },
      { value: 'ataxia', label: 'Ataxia' },
      { value: 'cervical_dystonia', label: 'Cervical Dystonia' },
      { value: 'chorea', label: 'Chorea' },
      { value: 'dystonia', label: 'Dystonia' },
      { value: 'functional_movement_disorder', label: 'Functional Movement Disorder' },
      { value: 'huntingtons', label: 'Huntington\'s Disease' },
      { value: 'multisystem_atrophy', label: 'Multisystem Atrophy' },
      { value: 'myoclonus', label: 'Myoclonus' },
      { value: 'parkinson', label: 'Parkinson\'s Disease' },
      { value: 'supranuclear_palsy', label: 'Progressive Supranuclear Palsy' },
      { value: 'restless_leg', label: 'Restless Leg Syndrome' },
      { value: 'tardive_dyskinesia', label: 'Tardive Dyskinesia' },
      { value: 'tourettes', label: 'Tourette Syndrome' },
      { value: 'tremors', label: 'Tremors' },
      { value: 'wilsons', label: 'Wilson\'s disease' },
      { value: UNSURE, label: 'Don\'t Know' },
      { value: OTHER, label: 'Other', input: true },
    ]},
    { value: 'multiple_sclerosis', label: 'Multiple Sclerosis / Demyelination', options: [
      { value: 'primary_progressive', label: 'Primary Progressive' },
      { value: 'progressing_relapsing', label: 'Progressing-Relapsing' },
      { value: 'relapsing_remitting', label: 'Relapsing-Remitting' },
      { value: 'secondary_progressive', label: 'Secondary Progressive' },
      { value: UNSURE, label: 'Don\'t Know' },
      { value: OTHER, label: 'Other', input: true },
    ]},
    { value: 'seizures', label: 'Seizure Disorder', options: [
      { value: 'atonic', label: 'Atonic' },
      { value: 'complex', label: 'Complex' },
      { value: 'generalized', label: 'Generalized' },
      { value: 'grand_mal', label: 'Grand Mal' },
      { value: 'myoclonic', label: 'Myoclonic' },
      { value: 'petit_mal', label: 'Petit Mal' },
      { value: 'simple_partial', label: 'Simple Partial' },
      { value: UNSURE, label: 'Don\'t Know' },
      { value: OTHER, label: 'Other', input: true },
    ]},
    { value: 'sleep_disorder', label: 'Sleep Disorder' },
    { value: 'speech_disorder', label: 'Speech and/or Language Disorder', options: [
      { value: 'alalia', label: 'Alalia (delayed speech)' },
      { value: 'apraxia', label: 'Apraxia of Speech' },
      { value: 'aphasia', label: 'Aphasia' },
      { value: 'cluttering', label: 'Cluttering' },
      { value: 'dysarthria', label: 'Dysarthria' },
      { value: 'lisping', label: 'Lisping' },
      { value: 'muteness', label: 'Muteness' },
      { value: 'spasmodic_dysphonia', label: 'Spasmodic Dysphonia' },
      { value: 'suttering', label: 'Suttering / Stammering' },
      { value: UNSURE, label: 'Don\'t Know' },
      { value: OTHER, label: 'Other', input: true },
    ]},
    { value: 'stroke', label: 'Stroke', options: [
      { value: 'ischemic', label: 'Ischemic' },
      { value: 'hemorrhagic', label: 'Hemorrhagic' },
      { value: 'transient_ischemic_attack', label: 'TIA (transient ischemic attack)' },
      { value: UNSURE, label: 'Don\'t Know' },
      { value: OTHER, label: 'Other', input: true },
    ]},
    { value: 'brain_injury', label: 'Traumatic Brain Injury', options: [
      { value: 'anoxic', label: 'Anoxic' },
      { value: 'closed_contusion', label: 'Closed Contusion' },
      { value: 'coup-contrecoup', label: 'Coup-Contrecoup Injury' },
      { value: 'diffuse_axonal', label: 'Diffuse Axonal Injury' },
      { value: 'hypoxic', label: 'Hypoxic' },
      { value: 'open', label: 'Open' },
      { value: 'penetrating', label: 'Penetrating' },
      { value: 'second_impact ', label: 'Second-Impact Syndrome' },
      { value: UNSURE, label: 'Don\'t Know' },
      { value: OTHER, label: 'Other', input: true },
    ]},
    { value: 'tumor', label: 'Tumor(s)' },
    { value: 'vascular_complications', label: 'Vascular Complications' },
  ],
}]