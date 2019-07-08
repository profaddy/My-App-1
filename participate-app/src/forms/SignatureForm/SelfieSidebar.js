//-----------  Imports  -----------//

import Styled      from './styles'

import React       from 'react'
import PropTypes   from 'prop-types'

import Checkmark   from 'assets/images/checkList.svg'
import SelfieImage from 'assets/images/selfie_checkBox.svg'

//-----------  Component  -----------//

const SelfieSidebar = () => (
  <Styled.Sidebar>
    <Styled.List>
      <h6>Taking Your Picture:</h6>
      <Styled.Item>
        <Checkmark />Face the camera
      </Styled.Item>
      <Styled.Item>
        <Checkmark />Make sure you are in a good light
      </Styled.Item>
      <Styled.Item>
        <Checkmark />Smile!
      </Styled.Item>
    </Styled.List>

    <SelfieImage />
  </Styled.Sidebar>
)

//-----------  Type Definitions  -----------//

SelfieSidebar.propTypes = {}

//-----------  Export  -----------//

export default SelfieSidebar
