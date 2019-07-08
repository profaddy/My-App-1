//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Definions  -----------//

const value = `(()) {Category} [Mammals, what am I supposed to do now?] {How many mammals do you know?} [Oh to name, ma~ I name the mammals?] {Yes} [Okay] dog, cat <uh> [mammals] dog, cat, tiger, lion [no, no, no]
<um> elephant, [what’s another mammal] human be~ people
<<laughs>> [I don't know, I’m gettin tired, ok?] {That's fine} [Now I
have to do it again?] {No, no it is going to run out of time since} [And what
does that mean?] {Like uh you’re finished with}`

//-----------  Component  -----------//

class Transcriber extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { stimuli } = this.props

    return (
      <Styled.Transcriber>
        <Styled.Stimuli>
          <strong>Stimuli: </strong>
          <span>{stimuli}</span>
        </Styled.Stimuli>
        <Styled.TextArea defaultValue={value} />
      </Styled.Transcriber>
    )
  }
}

//-----------  Type Definitions  -----------//

Transcriber.propTypes = {
  stimuli: PropTypes.string.isRequired
}

//-----------  Export  -----------//

export default Transcriber
