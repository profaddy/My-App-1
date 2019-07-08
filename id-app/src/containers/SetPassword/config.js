export const SetPasswordMsg = {
  title: 'Set password',
  placeholder: 'Placeholder',
};

export const VerificationErrorMsg = {
  title: 'Verification error',
  msg: 'Token invalid',
  placeholder: 'Placeholder',
};

export const passwordOptions = [
  { value: 'charLen', name: 'charLen', label: '8 Characters minimum' },
  { value: 'case', name: 'case', label: 'Mix lower and upper case' },
  {
    value: 'specialCase',
    name: 'specialCase',
    label: 'One special character',
  },
  { value: 'number', name: 'number', label: 'One number' },
];
