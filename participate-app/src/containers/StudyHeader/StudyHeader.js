//-----------  Imports  -----------//

import Styled         from './styles'

import React          from 'react'
import PropTypes      from 'prop-types'

import { studyShape } from 'models/study/helpers'

//-----------  Component  -----------//

const StudyHeader = ({ data, study, ...props }) => {
  if (!study) return null

  const { PIs, title, phone, address, studyID, irbNumber, approvalDate } = study
  const {irb_no, name, id, sponsor} = data.study
  return (
    <React.Fragment>
      <Styled.IRBStamp>
        <Styled.Inner>
          <h6>P.I.: {PIs && PIs.join(', ')}</h6>
          <h6>IRB Approval #: {irb_no}</h6>
          <h6>Date of Approval: {approvalDate}</h6>
        </Styled.Inner>
      </Styled.IRBStamp>

      <Styled.StudyHeader>
        <div>
          <strong>Research Study:</strong><br />
          <span>{name}</span>
        </div>
        {studyID &&
          <div>
            <strong>Study #:</strong>
            <span>{id}</span>
          </div>
        }
        <div>
          <strong>Sponsor:</strong>
          <span>{sponsor}</span>
        </div>
        <div>
          <strong>Principal Investigators:</strong><br />
          <span>
            {PIs && PIs.join(', ')}<br />
            {address}<br />
            Phone: {phone}<br />
          </span>
        </div>
      </Styled.StudyHeader>
    </React.Fragment>
  )
}

//-----------  Type Definitions  -----------//

StudyHeader.propTypes = {
  study: PropTypes.shape(studyShape)
}

//-----------  Export  -----------//

export default StudyHeader
