//-----------  Imports  -----------//

import Styled          from './styles'

import React           from 'react'
import PropTypes       from 'prop-types'

import RuleBlock       from 'components/RuleBlock'
import { moduleShape } from 'models/modules/helpers'

//-----------  Component  -----------//

const ModuleRules = ({ activity, openSidebar, ...props }) => {
  if (!activity) return null

  if ('Repetition' === activity) return (
    <RuleBlock color='red' title='Repetition Specific Rules' active>
      <h5>Description</h5>
      <ul>
        <li>The examinee hears a word or phrase and repeats it *exactly* as it was spoken.</li>
        <li>The stimuli indicates the single word or the phrase that is to be repeated.</li>
        <li>Sometimes, words are be mispronounced or omitted. The details of the mispronunciation or omission are important.</li>
      </ul>
      <h5>Scoring</h5>
      <p>Indicate whether there was an error and select which error was made:</p>
      <ul>
        <li><b>Sentence repetition errors:</b> Semantic error; Phonological error; Dysarthric error; Order error; Word substitution; Word loss; Grammatical error; No response</li>
        <li><b>Word repetition errors:</b> Dysarthric; Phonemic; Semantic; Word substitution; No response</li>
      </ul>
    </RuleBlock>
  )

  if ('Reading' === activity) return (
    <RuleBlock color='red' title='Reading Specific Rules' active>
      <h5>Description</h5>
      <ul>
        <li>A word is spoken aloud. The stimuli indicates the word that was spoken aloud. (See below for the Reading word list and pronunciation guide.)</li>
        <li>The participant says the word out loud.</li>
      </ul>
      <h5>Scoring</h5>
      <p>Indicate whether there was an error. Select which error was made: <i>dysarthric, phonemic, direct semantic; related items, regularizing, ***no answer**</i>.</p>
      <a onClick={() => openSidebar('reading')}>See Definitions & Examples ⟶</a>
    </RuleBlock>
  )


  if ('Picture' === activity) return (
    <RuleBlock color='red' title='Picture Specific Rules' active>
      <h5>Description</h5>
      <ul>
        <li>Words will be spoken in complete sentences.</li>
        <li>The stimuli indicates a picture that is being described.</li>
      </ul>
      <h5>Important</h5>
      <p><strong><i>Do NOT</i></strong> bracket out spoken words that examinee intended as a response, even if they do not meet stimuli criteria. Examinees often say words that do not reflect the stimuli.</p>
    </RuleBlock>
  )

  if ('Categories' === activity) return (
    <RuleBlock color='red' title='Categories Specific Rules' active>
      <h5>Description</h5>
      <ul>
        <li>Words will be spoken in lists.</li>
        <li>Stimulus indicates category of words to be spoken (e.g., "mammals").</li>
      </ul>
      <h5>Important</h5>
      <p><strong><i>Do NOT</i></strong> bracket out spoken words that examinee intended as a response, even if they do not meet stimuli criteria. Examinees often say words that do not reflect the stimuli.</p>
    </RuleBlock>
  )

  if ('Letter' === activity) return (
    <RuleBlock color='red' title='Letter Specific Rules' active>
      <h5>Description</h5>
      <ul>
        <li>Words will be spoken in lists.</li>
        <li>Stimulus indicates category of words to be spoken (e.g., letters beginning with "F").</li>
      </ul>
      <h5>Important</h5>
      <p><strong><i>Do NOT</i></strong> bracket out spoken words that examinee intended as a response, even if they do not meet stimuli criteria. Examinees often say words that do not reflect the stimuli.</p>
    </RuleBlock>
  )

  return (
    <RuleBlock color='red' title={`${activity} Specific Rules`} active>
      <h5>Description</h5>
      <ul>
        <li>Words will be spoken in lists.</li>
        <li>Stimuli list indicates the set of words to be spoken (order doesn’t matter).</li>
      </ul>
      <h5>Important</h5>
      <p><strong><i>Do NOT</i></strong> bracket out spoken words that examinee intended as a response, even if they do not meet stimuli criteria. Examinees often say words that do not reflect the stimuli.</p>
    </RuleBlock>
  )
}

//-----------  Type Definitions  -----------//

ModuleRules.propTypes = {
  activity    : PropTypes.string,
  openSidebar : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default ModuleRules
