//-----------  Imports  -----------//

import styled from 'styled-components';
import { lighten } from 'polished';

import vars from 'styles/variables';
import { isDarkTheme, resolveTagFromProps } from 'utilities/styles';

//-----------  Definitions  ----------- */

const Styled = {};

function backgroundColor({ error, theme, active }) {
  if (active && error) return vars.red;
  if (active) return isDarkTheme(theme) ? vars.blueBright : vars.blueDark;

  return 'rgba(0,0,0,0)';
}

function borderColor({ error, theme, active }) {
  if (!active && error) return vars.red;
  if (!active) return isDarkTheme(theme) ? vars.blueBright : vars.blueDark;

  return 'rgba(0,0,0,0)';
}

function fontColor({ error, theme, active }) {
  if (!active && error) return vars.red;
  if (!active) return isDarkTheme(theme) ? vars.blueBright : vars.blueDark;

  return vars.white;
}

//-----------  Button  ----------- */

Styled.Button = styled(
  resolveTagFromProps(['small', 'error', 'loading', 'active']),
)`
  background-color: ${p => backgroundColor(p)};
  border: 1px solid ${p => borderColor(p)};
  border-radius: ${vars.radius};
  color: ${p => fontColor(p)};
  display: inline-block;
  font-size: ${p => (p.small ? '0.75em' : vars.fontSizeSm)};
  outline: none;
  padding: ${p => (p.small ? '0.8em 2em 0.82em' : '0.9em 3.2em 0.95em')};
  position: relative;
  text-align: center;
  text-transform: uppercase;
  transition: all ${vars.transition};

  svg path {
    fill: ${p => fontColor(p)};
  }

  &:hover,
  &:focus {
    background-color: ${p => lighten(0.1, backgroundColor(p))};
    border-color: ${p => lighten(0.18, borderColor(p))};
    color: ${p => lighten(0.1, fontColor(p))};
    cursor: pointer;

    svg path {
      fill: ${p => lighten(0.1, fontColor(p))};
    }
  }

  &[disabled] {
    border-color: ${p => (p.active ? 'rgba(0,0,0,0)' : vars.grayDark)};
    background-color: ${p => (p.active ? vars.grayDark : 'rgba(0,0,0,0)')};
    color: ${p => (p.active ? vars.white : vars.grayDark)};
    cursor: not-allowed;

    svg path {
      fill: ${p => (p.active ? vars.white : vars.grayDark)};
    }
  }

  &[type='submit'] {
    position: relative;
  }
`;

Styled.Interior = styled.span`
  font-size: ${p => (p.small ? '1em' : vars.fontSizeSm)};
  font-weight: ${p => (p.small ? vars.fontWeightBold : vars.fontWeight)};
  text-align: center;
  user-select: none;
  white-space: nowrap;

  ${'' /* &::after {
    content : ' ';
    display : inline-block;
  } */}
`;

Styled.Icon = styled.span`
  display: inline-block;
  margin-left: -0.67em;
  margin-right: 1em;
  position: relative;
  top: -1px;

  svg {
    height: auto;
    margin: -0.33em 0;
    width: 1.33em;
  }
`;

//-----------  Exports  ----------- */

export default Styled;
