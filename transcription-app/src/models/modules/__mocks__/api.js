//-----------  Imports  -----------//

import faker                   from 'faker'

import { randNum,
         mockResponse }        from '@miro/core-ui/src/utilities/mocks'
import { audioAssignmentMock } from 'models/assignments/__mocks__/api'

//-----------  Definitions  -----------//

const modules = ['Letter', 'Spy', 'Picture', 'Categories']

//-----------  Mock Data  -----------//

export const modulesMock = (num) => new Array(num || modules.length).fill().map(moduleMock)

export const activityMock = (module) => {
  const activity = module || faker.random.arrayElement(modules)

  return {
    id   : modules.indexOf(activity) + 1,
    name : activity
  }
}

//-----------  Data Models  -----------//

export const moduleMock = (module, index) => {
  const records = randNum(3, 8)

  return {
    records          : records,
    activity         : activityMock(modules[index]),
    totalTime        : null,
    completed        : 0,
    started          : false,
    audioAssignments : new Array(records).fill().map(audioAssignmentMock),

    set _completedPercentage(percentage){
      this.completed = percentage
      this.started   = (percentage > 0)
    },
  }
}

//-----------  Mock Endpoints  -----------//

export const requestModules = () => {
  const data = modulesMock(randNum(1, 4))
  return mockResponse(data)
}
