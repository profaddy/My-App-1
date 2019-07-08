//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

import Checkmark from 'assets/images/checkList.svg'
import IdImage   from 'assets/images/ID_photo_checkBox.svg'

//-----------  Component  -----------//

const IdSidebar = () => (
  <Styled.Sidebar>
    <Styled.List>
      <h6>Taking Your Picture:</h6>
      <Styled.Item>
        <Checkmark />Hold your ID up to the camera
      </Styled.Item>
      <Styled.Item>
        <Checkmark />Make sure the picture is readable
      </Styled.Item>
    </Styled.List>

    <IdImage />
  </Styled.Sidebar>
)

//-----------  Type Definitions  -----------//

IdSidebar.propTypes = {}

//-----------  Export  -----------//

export default IdSidebar
