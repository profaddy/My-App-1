//-----------  Imports  -----------//

import Styled       from './styles'

import React        from 'react'
import PropTypes    from 'prop-types'


//-----------  Component  -----------//

class BillOfRightsContent extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    return(
      <Styled.HipaaWrapper>
        <h4>Experimental Research Subject’s Bill of Rights</h4> 
        <p>California law, under Health & Safety Code Section 24172, requires that any person asked to take part as a subject in research involving a medical experiment, or any person asked to consent to such participation on behalf of another, is entitled to receive the following list of rights written in a language in which the person is fluent. This list includes the right to: <br/>
            1. Be informed of the nature and purpose of the experiment. <br/>
            2. Be given an explanation of the procedures to be followed in the medical experiment, and any drug or device to be utilized.<br/>
            3. Be given a description of any attendant discomforts and risks reasonably to be expected from the experiment.<br/>
            4. Be given an explanation of any benefits to the subject reasonably to be expected from the experiment, if applicable.<br/> 
            5. Be given a disclosure of any appropriate alternative procedures, drugs or devices that might be advantageous to the subject, and their relative risks and benefits.<br/>
            6. Be informed of the avenues of medical treatment, if any, available to the subject after the experiment if complications should arise.<br/>
            7. Be given an opportunity to ask any questions concerning the experiment or the procedures involved.<br/>
            8. Be instructed that consent to participate in the medical experiment may be withdrawn at any time and the subject may discontinue participation in the medical experiment without prejudice.<br/>
            9. Be given a copy of the signed and dated written consent form.<br/> 
            10. Be given the opportunity to decide to consent or not to.</p>
      </Styled.HipaaWrapper>
   )

}
}
//-----------  Type Definitions  -----------//

BillOfRightsContent.propTypes = {
  pdf    : PropTypes.any,
  onLoad : PropTypes.func,
}

//-----------  Export  -----------//

export default BillOfRightsContent
