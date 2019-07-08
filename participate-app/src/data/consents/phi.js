//-----------  Imports  -----------//

import React from 'react'

//-----------  Component  -----------//

export default [{
  title   : 'Do I have to sign this Authorization form?',
  content : (
    <React.Fragment>
      <p>You do not have to sign this form. Should you choose not to grant us permission to confirm your diagnosis with your physician, you may not be eligible to participate in research.</p>
    </React.Fragment>
  )
},{
  title   : 'Will this Authorization form affect my medical care?',
  content : (
    <React.Fragment>
      <p>Authorization will not affect your medical care in any way.</p>
    </React.Fragment>
  )
},{
  title   : 'May I cancel my approval?',
  content : (
    <React.Fragment>
      <p>You may cancel your approval at any time. Simply notify the study coordinator or Principal Investigator.</p>
    </React.Fragment>
  )
},{
  title   : 'May I get a copy of this Authorization form?',
  content : (
    <React.Fragment>
      <p>Yes. A copy will be emailed to you.</p>
    </React.Fragment>
  )
},{
  title   : 'Will the Study share my Protected Health Information (PHI) with others?',
  content : (
    <React.Fragment>
      <p>This study is subject to the Health Insurance Portability and Accountability Act (“HIPAA”) and other federal health information privacy laws. This Study will not further disclose your PHI. However, regulatory agencies like the Food and Drug Administration and human research oversight groups like the Institutional Review Board that protects your personal safety and the safety and security of your data, may be granted audit access according to law.</p>
    </React.Fragment>
  )
}]