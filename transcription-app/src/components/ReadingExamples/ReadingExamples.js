//-----------  Imports  -----------//

import mapKeys   from 'lodash/mapKeys'

import Styled    from './styles'

import examples  from 'data/reading'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Component  -----------//

const ReadingExamples = ({ active, onClose, ...props }) => (
  <Styled.ReadingExamples active={active}>
    <a onClick={onClose}>⟵ Back</a>
    <Styled.Title>Definitions</Styled.Title>
    <Styled.Rules>
      <ul>
        <li>
          <dfn><strong><b>Phonemic</b></strong> errors are defined as errors in the sounds within a word. These sound omissions or substitutions can result in the production of another real word (e.g., “boss” for “ball”) or a non-word “bauhk” for “ball”, but in both instances the word sounds similar to the target word. Phonemic errors should be written out as they sound to the examiner.</dfn>
        </li>
        <li>
          <dfn><strong><b>Semantic</b></strong> errors are words that are related to the target item in meaning. Direct semantic errors are substitutions for the target (e.g., “gate” for “door”, “slice” for “cut”); other types of semantic errors are words that are related to the target but not a substitute for it. (e.g., “kneel” or “church” for “pray;” “open” or “knob” for “door”).</dfn>
        </li>
        <li>
          <dfn><strong><b>Dysarthria</b></strong> is a motor disorder, not a language disorder. If you have had a novocaine injection and could not normally move your tongue or mouth, you can imagine what it is like to be dysarthric: you can produce a normal word, but the sounds are distorted. You can also imagine trying to talk with your mouth full or when you have a cold and your nose is stuffed. It is difficult to provide samples of all possible types of dysarthric errors, but this column shows a few. For blank boxes, the examiner will need to transcribe the production or record it for an expert to decide.</dfn>
        </li>
        <li>
          <dfn><strong><b>Semantic</b></strong> errors produce a word that is a substitute for or related to the target word in meaning.</dfn>
        </li>
        <li>
          <dfn><strong><b>Regularizing</b></strong> errors try to pronounce the sounds of the words as they are written - that is, phonetically.</dfn>
        </li>
      </ul>
    </Styled.Rules>
    <Styled.Title>Examples</Styled.Title>
    <Styled.Examples>
      <table cellSpacing={0}>
        <thead>
          <tr>
            <th />
            <th>Phonemic</th>
            <th>Semantic</th>
            <th>Related</th>
            <th>Dysarthria</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(examples).sort().map(word => (
            <tr key={word}>
              <th>{word}</th>
              <td>{examples[word][0]}</td>
              <td>{examples[word][1]}</td>
              <td>{examples[word][2] || '-'}</td>
              <td>{examples[word][3] || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Styled.Examples>
    <a onClick={onClose}>⟵ Back</a>
  </Styled.ReadingExamples>
)

//-----------  Type Definitions  -----------//

ReadingExamples.propTypes = {
  active  : PropTypes.bool,
  onClose : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default ReadingExamples
