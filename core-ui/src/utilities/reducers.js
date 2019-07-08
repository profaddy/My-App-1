//-----------  Imports  -----------//

import find from 'lodash/find';
import merge from 'lodash/merge';
import uniqBy from 'lodash/uniqBy';
import unionBy from 'lodash/unionBy';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import isString from 'lodash/isString';

//-----------  Helpers  -----------//

export function getType(value) {
  if (isArray(value)) return 'array';
  else if (isObject(value)) return 'object';
  else if (isString(value)) return 'string';
  else return typeof value;
}

export function updateFromArray(oldData, newData, id = 'id') {
  return uniqBy([...oldData, ...newData], id);
}

export function updateFromObject(oldData, newData, id = 'id') {
  let oldObj = find(oldData, { [id]: newData.id });
  let newObj = merge({}, oldObj, newData);

  return unionBy([newObj], oldData, id);
}
