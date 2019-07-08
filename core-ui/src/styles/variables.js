//-----------  Imports  -----------//

import { rgba, darken, lighten } from 'polished';

//-----------  Definitions  -----------//

export const emBase = 14.5;
export const gutter = 1.25;

export const colors = {
  yellow: '#E9A845',
  green: '#95CF49',
  greenDark: darken(0.1, '#95CF49'),
  greenDarker: darken(0.2, '#95CF49'),
  orange: '#EC7555',
  redLight: lighten(0.2, '#e74c3c'),
  red: '#e74c3c',
  redDark: darken(0.2, '#e74c3c'),
  blueLightest: lighten(0.3, '#2368F5'),
  blueLighter: '#92b0d6',
  blueLight: '#3498db',
  blue: '#0290ff',
  blueBright: '#2368F5',
  blueDark: '#4a90e2',
  blueDarker: darken(0.1, '#4a90e2'),
  blueDarkest: darken(0.2, '#4a90e2'),
  purpleLighter: lighten(0.2, '#918da5'),
  purpleLight: '#918da5',
  purple: '#151f43',
  purpleBright: '#8033F4',
  purpleDark: '#0e1637',
  purpleDarker: '#172032',
  brownLight: '#424d60',
  brown: '#4a4a4a',
  brownDark: '#343f51',
  grayLightest: '#fafafa',
  grayLighter: '#efeef1',
  grayLight: '#e5e5e5',
  gray: '#c1c1c2',
  grayDark: '#9b9b9b',
  grayDarker: '#444444',
  grayDarkest: '#2a2927',
};

//-----------  Style Variables  -----------//

export default Object.assign({}, colors, {
  white: '#ffffff',
  black: '#000000',

  fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
  fontWeight: 500,
  fontWeightBold: 600,
  fontWeightThin: 'normal',
  fontWeightBolder: 700,
  fontWeightThiner: 200,

  emBase: `${emBase}px`,
  fontSizeSm: `0.925em`,
  fontSizeLg: `1.575em`,
  radius: '3px',
  radiusSm: '2px',
  radiusLg: '4px',
  border: `1px solid ${rgba(colors.gray, 0.75)}`,
  borderDark: `1px solid ${rgba(colors.gray, 0.65)}`,
  borderLight: `1px solid ${rgba(colors.gray, 0.85)}`,
  shadow: '0 0 1rem 0 rgba(0, 0, 0, 0.12)',
  shadowDark: '0 0 1rem 0 rgba(0, 0, 0, 0.18)',
  shadowLight: '0 0 1rem 0 rgba(0, 0, 0, 0.08)',
  transition: '0.15s ease-in-out',

  gutter: `${gutter}em`,
  gutterLg: `${gutter * 2.33}em`,
  gutterSm: `${gutter / 1.25}em`,

  maxWidth: '75rem',
  largeWidth: '62rem',
  blockWidth: '48rem',
  mediumWidth: '34rem',
  smallWidth: '26rem',
});
