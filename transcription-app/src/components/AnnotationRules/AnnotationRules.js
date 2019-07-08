//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Component  -----------//

const AnnotationRules = ({ active, onClose, ...props }) => (
  <Styled.AnnotationRules active={active}>
    <a onClick={onClose}>⟵ Back</a>
    <Styled.Title>Annotation Details</Styled.Title>
    <Styled.Rules>
      <ul>
        <li>
          <strong><b>{'{ }'}</b> <i>curly brackets:</i> Non-participant speech</strong>
          <dfn>You may hear more than one person speaking. All spoken words will be transcribed and recorded. However, any speech that does not belong to the Subject will be surrounded by brackets {}. </dfn>
          <xmp>Ex: {'{Yes, that’s correct.}'}</xmp>
        </li>
        <li>
          <strong><b>{`< >`}</b> <i>single angle quotes:</i> Utterances</strong>
          <dfn>Please choose only from the below utterances. Please spell them exactly as shown: mm, uh, um, ah, er, oh, hm, huh, pff, boy, uh huh, mm hm.Do NOT use alternate spellings such as “uhm”, “mm-hm”, or “hunh”.</dfn>
        </li>
        <li>
          <strong><b>{'(( ))'}</b> <i>double parentheses:</i> Unclear speech</strong>
          <dfn>Surround unclear speech that is too garbled to understand with parentheses with and a space inside (( )).</dfn>
          <xmp>Ex: Actually, (( )) tomorrow.</xmp>
        </li>
        <li>
          <strong><b>{'- +'}</b> <i>minus-space-plus:</i> Disfluencies and restarts in speech</strong>
          <dfn>Insert a minus sign at the end of the interrupted thought and a plus sign where the thought begins again.</dfn>
          <xmp>Ex: I gue- +guess that's a cat, that's a do- +cat (In this case, the subject interrupts him or herself and then starts again)</xmp>
        </li>
        <li>
          <strong><b>{'...'}</b> <i>ellipses:</i> Pause in speech</strong>
          <dfn>Represents significant pause in speech, not conversational pause.</dfn>
          <xmp>Ex: I see a tree that’s a ... banana tree. (Pause of 12 seconds)</xmp>
        </li>
        <li>
          <strong><b>{'<< >>'}</b> <i>double arrow quotes:</i> Non-linguistic spoken sounds</strong>
          <xmp>Ex: {'<<cough>> <<laugh>> <<guffaw>'}</xmp>
        </li>
        <li>
          <strong><b>{'[ ]'}</b> <i>square brackets:</i> Irrelevant words for given module</strong>
        </li>
        <li>
          <strong><b>{'(background noise: ________)'}</b> <i>single parentheses:</i> Non-vocalizations</strong>
          <xmp>Ex: {'(background noise: car) (background noise: siren)'}</xmp>
        </li>
      </ul>
    </Styled.Rules>
    <a onClick={onClose}>⟵ Back</a>
  </Styled.AnnotationRules>
)

//-----------  Type Definitions  -----------//

AnnotationRules.propTypes = {
  active  : PropTypes.bool,
  onClose : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default AnnotationRules
