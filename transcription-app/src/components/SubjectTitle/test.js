//-----------  Imports  -----------//

import React               from 'react'
import { shallow }         from 'enzyme'

import SubjectTitle        from './index'

import { assignmentMock }  from 'models/assignments/__mocks__/api'
import { assignmentsFunc } from 'models/assignments/selectors'

//-----------  Definitions  -----------//

const subject = assignmentsFunc([assignmentMock()])[0]

const component = shallow(<SubjectTitle subject={subject} />)

//-----------  Tests  -----------//

describe('<SubjectTitle />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
