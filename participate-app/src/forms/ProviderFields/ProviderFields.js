//-----------  Imports  -----------//

import chunk     from 'lodash/chunk'

import Styled    from './styles'

import fields    from './config'

import React     from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

import Label     from 'components/Label'

//-----------  Component  -----------//

const ProviderFields = (props) => {

  const groups = chunk(fields, 2)

  return (
    <Styled.ProviderFields>
      {groups.map((group, x) => (
        <Styled.Row key={x}>
          {group.map(({ label, validate, ...field }, y) => (
            <Field
              key={y}
              { ...field }
              label={<Label>{label}</Label>}
            />
          ))}
        </Styled.Row>
      ))}
    </Styled.ProviderFields>
  )
}

//-----------  Type Definitions  -----------//

ProviderFields.propTypes = {

}

//-----------  Export  -----------//

export default ProviderFields
