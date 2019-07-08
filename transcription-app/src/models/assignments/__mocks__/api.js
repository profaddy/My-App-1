//-----------  Imports  -----------//

import faker                 from 'faker'

import { randNum,
         mockResponse }      from '@miro/core-ui/src/utilities/mocks'
import { transcriptionMock } from 'models/transcriptions/__mocks__/api'
import { activityMock }      from 'models/modules/__mocks__/api'
import { userMock }          from 'models/user/__mocks__/api'
import { currentRoleFunc }   from '../selectors'

//-----------  Mock Data  -----------//

export const assignmentsMock = (num) => new Array(num).fill().map(assignmentMock)

export const subjectMock = () => ({
  subject_id : randNum(10000, 99999),
  user       : null
})

export const audioSourceMock = () => ({
  id         : faker.random.uuid(),
  audio_file : faker.internet.url(),
  created    : faker.date.past(),
  modified   : faker.date.recent(),
  activity   : activityMock(),
})

export const roleMock = (reviewer = false) => {
  return currentRoleFunc({ transcriber_1: { id: 1 }, reviewer: { id: 2 }}, reviewer ? 2 : 1)
}

//-----------  Data Models  -----------//

export const assignmentMock = () => ({
  id                : randNum(10000, 99999),
  subject           : subjectMock(),
  reviewer          : null,
  transcriber_1     : null,
  transcriber_2     : null,
  audio_assignments : new Array(randNum(15, 25)).fill().map(audioAssignmentMock),
  complete          : false,

  set _assignTranscriber(email){
    if (!this.transcriber_1){
      this.transcriber_1 = userMock(email)
    } else {
      this.transcriber_2 = userMock(email)
    }
  },

  set _assignReviewer(email){
    this.reviewer = userMock(email)
  },
})

export const audioAssignmentMock = (expanded = false) => {
  const audioSource = audioSourceMock()

  return Object.assign({
    audio_source            : audioSource,
    reviewer_assigned       : null,
    reviewer_completed      : null,
    transcriber_1_assigned  : null,
    transcriber_1_completed : null,
    transcriber_2_assigned  : null,
    transcriber_2_completed : null,
    transcription_1         : null,
    transcription_2         : null,
    final_transcription     : null,

    set _assignTranscriber(id){
      if (!this.transcriber_1_assigned){
        this.transcriber_1_assigned  = faker.date.past()
        this.transcriber_1_completed = faker.date.recent()
      } else {
        this.transcriber_2_assigned  = faker.date.past()
        this.transcriber_2_completed = faker.date.recent()
      }
    },

    set _assignTranscription(id){
      if (!this.transcription_1){
        this.transcription_1 = transcriptionMock(id)
      } else {
        this.transcription_2 = transcriptionMock(id)
      }
    },

    set _assignReviewer(id){
      this.reviewer_assigned  = faker.date.past()
      this.reviewer_completed = faker.date.recent()
    },

    set _assignReview(id){
      this.final_transcription = transcriptionMock(id)
    },
  }, expanded ? {
    id      : audioSource.id,
    created : audioSource.created
  } : {})
}

//-----------  Mock Endpoints  -----------//

export const requestAssignments = () => {
  const data = assignmentsMock(randNum(1, 10))
  return mockResponse(data)
}
