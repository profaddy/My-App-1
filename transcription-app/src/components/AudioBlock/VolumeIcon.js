//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Component  -----------//

const VolumeIcon = (props) => (
  <Styled.VolumeIcon {...props}>
    <Styled.SpeakerIcon />
    <span />
    <span />
  </Styled.VolumeIcon>
)

//-----------  Type Definitions  -----------//

VolumeIcon.propTypes = {
  muted: PropTypes.bool
}

//-----------  Export  -----------//

export default VolumeIcon
