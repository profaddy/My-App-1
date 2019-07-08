//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton } from 'components/InputFields/RadioField';
import { reduxForm } from 'redux-form';
import Divider from 'components/Divider';
import Button from '@miro/core-ui/lib/components/Button';
import { toastr } from 'react-redux-toastr';

const options = [
  { value: 'ADHD', label: 'ADHD (Attention Deficit Hyperactivity Disorder)' },
  { value: 'addiction', label: 'Addiction / Substance Abuse' },
  { value: 'anxiety', label: 'Anxiety' },

  { value: 'bi-polar', label: 'BiPolar' },
  { value: 'depression', label: 'Depression' },
  { value: 'OCD', label: 'OCD (Obsessive Compulsive Disorder)' },
  { value: 'PTSD', label: 'PTSD (Post-Traumatic Stress Disorder)' },
  { value: 'eating_disorder', label: 'Eating Disorder' },
  { value: 'brain_tumor', label: 'Brain Tumor' },
  { value: 'cancer_antibody', label: 'Cancer Antibody Syndrome' },
  { value: 'chemotherapy', label: 'Chemotherapy' },
  { value: 'radiation_therapy', label: 'Radiation Therapy' },
  { value: 'spinal_tumor', label: 'Spinal Tumor' },
  { value: 'surgery', label: 'Surgery' },
  { value: 'chronic_pain', label: 'Chronic Pain' },
  { value: 'concussion', label: 'Concussion' },
  { value: 'delirium', label: 'Delirium' },
  { value: 'alzheimers', label: "Alzheimer's Disease" },
  { value: 'cerebellar_degeneration', label: 'Cerebellar Degeneration' },
  { value: 'corticobasal_degeneration', label: 'Corticobasal Degeneration' },
  { value: 'creutzfeld_jakob', label: 'Creutzfeld Jakob Disease (Mad Cow)' },
  { value: 'frontotemporal_dementia', label: 'Frontotemporal Dementia' },
  { value: 'huntington', label: "Huntington's Disease" },

  { value: 'lewy_body', label: 'Lewy Body Dementia' },
  { value: 'parkinson', label: "Parkinson's Disease" },

  { value: 'vascular_dementia', label: 'Vascular Dementia' },
  { value: 'wernicke_korsakoff', label: 'Wernicke-Korsakoff Syndrome' },

  { value: 'autism', label: 'Autism' },
  { value: 'dyslexia', label: 'Dyslexia' },
  { value: 'speech_delay', label: 'Speech Delay' },
  { value: 'dizziness_and_vertigo', label: 'Dizziness and vertigo' },
  { value: 'hydrocephalus', label: 'Hydrocephalus' },
  { value: 'infection', label: 'Infection' },
  { value: 'migrane_and_headache', label: 'Migraine and Headache' },

  { value: 'ALS', label: "ALS (Lou Gehrig's Disease)" },
  { value: 'ataxia', label: 'Ataxia' },
  { value: 'cervical_dystonia', label: 'Cervical Dystonia' },
  { value: 'chorea', label: 'Chorea' },
  { value: 'dystonia', label: 'Dystonia' },
  {
    value: 'functional_movement_disorder',
    label: 'Functional Movement Disorder',
  },
  { value: 'huntingtons', label: "Huntington's Disease" },
  { value: 'multisystem_atrophy', label: 'Multisystem Atrophy' },
  { value: 'myoclonus', label: 'Myoclonus' },

  { value: 'supranuclear_palsy', label: 'Progressive Supranuclear Palsy' },
  { value: 'restless_leg', label: 'Restless Leg Syndrome' },
  { value: 'tardive_dyskinesia', label: 'Tardive Dyskinesia' },
  { value: 'tourettes', label: 'Tourette Syndrome' },
  { value: 'tremors', label: 'Tremors' },
  { value: 'wilsons', label: "Wilson's disease" },
  { value: 'primary_progressive', label: 'Primary Progressive' },
  { value: 'progressing_relapsing', label: 'Progressing-Relapsing' },
  { value: 'relapsing_remitting', label: 'Relapsing-Remitting' },
  { value: 'secondary_progressive', label: 'Secondary Progressive' },
  { value: 'atonic', label: 'Atonic' },
  { value: 'complex', label: 'Complex' },
  { value: 'generalized', label: 'Generalized' },
  { value: 'grand_mal', label: 'Grand Mal' },
  { value: 'myoclonic', label: 'Myoclonic' },
  { value: 'petit_mal', label: 'Petit Mal' },
  { value: 'simple_partial', label: 'Simple Partial' },
  { value: 'sleep_disorder', label: 'Sleep Disorder' },
  { value: 'alalia', label: 'Alalia (delayed speech)' },
  { value: 'apraxia', label: 'Apraxia of Speech' },
  { value: 'aphasia', label: 'Aphasia' },
  { value: 'cluttering', label: 'Cluttering' },
  { value: 'dysarthria', label: 'Dysarthria' },
  { value: 'lisping', label: 'Lisping' },
  { value: 'muteness', label: 'Muteness' },
  { value: 'spasmodic_dysphonia', label: 'Spasmodic Dysphonia' },
  { value: 'suttering', label: 'Suttering / Stammering' },
  { value: 'ischemic', label: 'Ischemic' },
  { value: 'hemorrhagic', label: 'Hemorrhagic' },
  {
    value: 'transient_ischemic_attack',
    label: 'TIA (transient ischemic attack)',
  },
  { value: 'anoxic', label: 'Anoxic' },
  { value: 'closed_contusion', label: 'Closed Contusion' },
  { value: 'coup-contrecoup', label: 'Coup-Contrecoup Injury' },
  { value: 'diffuse_axonal', label: 'Diffuse Axonal Injury' },
  { value: 'hypoxic', label: 'Hypoxic' },
  { value: 'open', label: 'Open' },
  { value: 'penetrating', label: 'Penetrating' },
  { value: 'second_impact ', label: 'Second-Impact Syndrome' },
  { value: 'tumor', label: 'Tumor(s)' },
  { value: 'vascular_complications', label: 'Vascular Complications' },
];

const ratings = ['A-symptotic', 'Mild', 'Moderate', 'Severe'];
//-----------  Component  -----------//

class Reviews extends React.Component {
  //-----------  HTML Render  -----------//

  render() {
    const { handleSubmit } = this.props;

    return (
      <Styled.Reviews>
        <Styled.Header>
          <h1>Medical History</h1>
          <Divider style={{ border: '.5px solid gray' }} />
        </Styled.Header>
        <form onSubmit={handleSubmit}>
          <Styled.Body>
            <Styled.Heads>
              <Styled.Categories>
                <div>Condition</div>
                <div>Current Symptom Rating</div>
              </Styled.Categories>
            </Styled.Heads>
            <Styled.Rating>
              <div style={{ flex: 1 }} />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  whiteSpace: 'nowrap',
                  flex: 1,
                }}
              >
                {ratings.map(rat => (
                  <div key="rat" style={{ minWidth: 100, textAlign: 'center' }}>
                    {rat}
                  </div>
                ))}
              </div>
            </Styled.Rating>
            <Styled.FormDiv onSubmit={handleSubmit}>
              <Styled.CheckboxDiv>
                {options.map(opt => (
                  <Styled.CheckBoxContainer key={opt.value}>
                    <div>{opt.label}</div>
                    <RadioButton
                      content={{
                        id: opt.value,
                        options: [
                          {
                            label: ' ',
                            value: 'asymptotic',
                          },
                          {
                            label: ' ',
                            value: 'mild',
                          },
                          {
                            label: ' ',
                            value: 'moderate',
                          },
                          {
                            label: ' ',
                            value: 'severe',
                          },
                        ],
                      }}
                    />
                  </Styled.CheckBoxContainer>
                ))}
              </Styled.CheckboxDiv>
            </Styled.FormDiv>
          </Styled.Body>
          <Styled.Footer>
            <Divider style={{ border: '.5px solid gray' }} />
            <div style={{ paddingTop: 30 }}>
              <Button
                {...this.props}
                onClick={() => {
                  this.props.history.push('/');
                  toastr.success('Review Submitted Successfully');
                }}
                active
              >
                Save
              </Button>
            </div>
          </Styled.Footer>
        </form>
      </Styled.Reviews>
    );
  }
}

//-----------  Type Definitions  -----------//

Reviews.propTypes = {};

//-----------  Export  -----------//

export default reduxForm({
  form: 'review',
})(Reviews);
