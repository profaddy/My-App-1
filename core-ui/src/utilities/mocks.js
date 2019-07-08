//-----------  Imports  -----------//

import faker from 'faker';

//-----------  Helpers  -----------//

export const maybe = faker.random.boolean;
export const randID = () => faker.random.number({ min: 10000, max: 99999 });
export const randNum = (min, max, precision = 1) =>
  faker.random.number({ min, max, precision });

export const mockResponse = (data, canFail = true, fast = false) =>
  new Promise((resolve, reject) => {
    setTimeout(
      () => {
        return canFail && Math.random() <= 0.1
          ? reject(new Error('API did not return sufficient response.'))
          : resolve(data);
      },
      fast ? randNum(50, 150) : randNum(150, 1500),
    );
  });
