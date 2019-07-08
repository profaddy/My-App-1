//-----------  Imports  -----------//

import isNaN from 'lodash/isNaN';

import moment from 'moment';

//-----------  Formatters  -----------//

export function formatNumber(value, seperator = ',') {
  if (undefined === value) return null;
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, seperator);
}

export function formatPrice(value) {
  if (undefined === value) return null;
  return parseInt(value.replace(/[^\d]/g, ''), 10);
}

export function formatPhone(value) {
  if (undefined === value) return null;
  const s2 = ('' + value).replace(/\D/g, '');
  const m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
  return !m ? '' : `(${m[1]}) ${m[2]}-${m[3]}`;
}

export function formatDate(value, format = 'M/D/YYYY', today = false) {
  if (undefined === value || !moment(value).isValid()) return null;
  return today && moment(value).isSame(moment(), 'day')
    ? 'Today'
    : moment(value).format(format);
}

export function formatTime(value, showSeconds = true) {
  if (undefined === value || isNaN(parseInt(value, 10))) return null;
  return moment()
    .startOf('day')
    .seconds(value)
    .format(showSeconds ? 'H:mm:ss' : 'H:mm');
}
