export const phoneFormatter = phoneNumberString => {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  let formattedPhone = '';
  if (match) {
    formattedPhone = '(' + match[1] + ') ' + match[2] + '-' + match[3];
    if (formattedPhone.length > 14) return formattedPhone.substring(0, 14);
    return formattedPhone;
  }
};

export const birthMonthFormatter = mob => {
  const cleaned = ('' + mob).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{4})$/);
  let formattedmob = '';
  if (match) {
    formattedmob = match[1] + '/' + match[2];
    if (formattedmob.length > 7) return formattedmob.substring(0, 7);
    return formattedmob;
  }
};
