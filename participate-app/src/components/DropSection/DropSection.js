//-----------  Imports  -----------//

import Styled           from './styles'

import React            from 'react'
import PropTypes        from 'prop-types'

import Caret            from 'assets/icons/caret.svg'

import { consentShape } from 'models/study/helpers'

//-----------  Component  -----------//

const DropSection = ({ title, active, viewed, content, goToNext, toggleActive, ...props }) => (
  <Styled.DropSection active={active} {...props}>
    <Styled.Title active={active} viewed={viewed} onClick={toggleActive}>
      <Caret /> {title}
    </Styled.Title>

    <Styled.Content active={active}>
      {content}
    </Styled.Content>

    {(active && goToNext) && (
      <Styled.Next onClick={goToNext}>
        <Caret /> Next Section
      </Styled.Next>
    )}
  </Styled.DropSection>
)

//-----------  Type Definitions  -----------//

DropSection.propTypes = {
  active       : PropTypes.bool.isRequired,
  viewed       : PropTypes.bool.isRequired,
  goToNext     : PropTypes.func,
  toggleActive : PropTypes.func,
  ...consentShape
}

//-----------  Export  -----------//

export default DropSection
