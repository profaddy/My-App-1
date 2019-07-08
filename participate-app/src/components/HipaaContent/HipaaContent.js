//-----------  Imports  -----------//

import Styled       from './styles'

import React        from 'react'
import PropTypes    from 'prop-types'

//-----------  Component  -----------//

class HipaaContent extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const {formStates} = this.props
    return(
      <Styled.HipaaWrapper>
        <h4>HIPAA AUTHORIZATION FOR RELEASE OF HEALTHCARE INFORMATION</h4>

        <p>Federal regulations give you certain rights related to your health information. These include the right to know who will receive the information and how it will be used. The study doctor must obtain your authorization (permission) to use or release any health information that might identify you. </p>

        <p>This information shall be released to Miro Health. This authorization for release of information includes your medical information up to the present time and through the duration of this study.</p>

        <p>I understand that:</p>
        <p>
          • This information may be used by Miro Health for research and business purposes. <br/>
          • This Release of Information shall be in force and effect until terminated by me in writing or by email. <br/>
          • I have the right to revoke this authorization in writing or by email at any time.<br/>
          • My treatment will not be affected if I choose not to sign this authorization form.<br/>
          • Information released to Miro Health may be disclosed by the recipient and may no longer<br/>
          • This authorization does not permit Miro Health to discuss my health information or medical c<br/>
          • All items on this form have been read and my questions about this form have been answered. <br/>
          • I will be provided a copy of the form.<br/></p>


        <h4>AUTHORIZATION</h4>

        <p>By signing this form, I allow the use or disclosure of my health information. I will receive a signed and dated copy of this Authorization.</p>

        <h4>What information may be used and shared?</h4>
        <p>The Principal Investigator and study staff will use and share your health information with other research staff as part of this study. This may include your name, address, telephone number or other facts that could identify the health information as yours. </p>

        <p>Examples of the information that may be used are:<br/>
            • Medical records you provide (from any doctor, hospital or other healthcare provider)<br/>
            • Information created or collected during the research. This could include your medical history, and dates or results from any physical exams, laboratory tests or other tests.</p>

        <h4>Who will receive information about me? </h4>
        <p>The study doctor and study staff may share your personal health information with:<br/>
            • the sponsor, including persons or companies working for or with the sponsor<br/>
            • New England Independent Review Board <br/>
            • the U.S. Food and Drug Administration (FDA)<br/>
            • Department of Health and Human Services (DHHS) agencies<br/>
            • other regulatory agencies </p>

        <h4>Why will this information be used and/or given to others? </h4>
        <p>The sponsor and the groups above will use your health information:<br/>
            • to complete this research<br/>
            • to evaluate the results of the<br/>
            • to check that the study is being do<br/>
            • to obtain marketing approval for new products resulting from this research</p>

        <h4>Is my health information protected after it has been given to others? </h4>
        <p>Your health information may be further shared by the groups above. If shared by them, the information will no longer be covered by this Authorization. These groups are committed to keeping your health information confidential. </p>

        <h4>What if I decide not to allow the use of my health information? </h4>
        <p>You do not have to sign this form. If you do not sign this form, you cannot take part in this research study. </p>

        <h4>May I withdraw or revoke (cancel) my permission?</h4>
        <p>Yes, you may withdraw your permission to use and disclose your health information at any time. You can do this by sending written notice to the study doctor. If you withdraw your permission, you will not be able to continue being in the research study.</p>

        <h4>What happens if I want to withdraw my authorization?</h4>
        <p>Information that has already been gathered may still be used and given to others on the research study staff. If you withdraw your permission, no new health information will be gathered unless you have a side effect related to the study. </p>

        <p>If you withdraw from the study but do not withdraw your Authorization, new health information may be collected until this study ends. </p>

        <h4>Will my authorization expire?</h4>
        <p>If the research site is located in California, Delaware, Indiana, Washington, or Wisconsin, this authorization will expire on 31Dec2060. There is no expiration of this authorization except for research conducted in the states listed above.</p>

        <h4>May I review or copy the information obtained or created about me?</h4>
        <p>Yes, you have the right to review and have a copy of your health information. However, your access to this information may be delayed until the study is complete.</p>

        <p>Your decision to withdraw your Authorization or not to participate will not involve any penalty or loss of access to treatment or other benefits to which you are entitled. </p>
      </Styled.HipaaWrapper>
   )

}
}
//-----------  Type Definitions  -----------//

HipaaContent.propTypes = {
  pdf    : PropTypes.any,
  onLoad : PropTypes.func,
}

//-----------  Export  -----------//

export default HipaaContent
