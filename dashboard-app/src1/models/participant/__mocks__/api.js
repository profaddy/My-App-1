//-----------  Imports  -----------//

import { mockResponse } from '@miro/core-ui/lib/utilities/mocks';

//-----------  Mock Data  -----------//

let counter = 0;
function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return { id: counter, name, calories, fat, carbs, protein };
}

const data = [
  createData('Cupcake', '02/02/2010', 'Eligible', 3.7, 67, 4.3),
  createData('Donut', '02/02/2010', 'Eligible', 25.0, 51, 4.9),
  createData('Eclair', '02/02/2010', 'Ineligible', 16.0, 24, 6.0),
  createData('Frozen yoghurt', '02/02/2010', 'Enrolled', 6.0, 24, 4.0),
  createData('Gingerbread', '02/02/2010', 'Eligible', 16.0, 49, 3.9),
  createData('Honeycomb', '02/02/2010', 'Enrolled', 3.2, 87, 6.5),
  createData('Ice cream sandwich', '02/02/2010', 'Enrolled', 9.0, 37, 4.3),
  createData('Jelly Bean', '02/02/2010', 'Enrolled', 0.0, 94, 0.0),
  createData('KitKat', '02/02/2010', 'Enrolled', 26.0, 65, 7.0),
  createData('Lollipop', '02/02/2010', 'Pending', 0.2, 98, 0.0),
  createData('Marshmallow', '02/02/2010', 'Enrolled', 0, 81, 2.0),
  createData('Nougat', '02/02/2010', 'Pending', 19.0, 9, 37.0),
  createData('Oreo', '02/02/2010', 'Enrolled', 18.0, 63, 4.0),
];

// export const participantsMock = (num) => new Array(num).fill().map(subjectMock)

// export const subjectMock = (_, index) => ({
//   user       : null,
//   created    : faker.date.recent(),
//   subject_id : randNum(10000, 99999),
// })

//-----------  Mock Endpoints  -----------//

export const requestParticipants = () => {
  return mockResponse({ data });
};
