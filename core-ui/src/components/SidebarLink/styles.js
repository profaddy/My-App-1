//-----------  Imports  -----------//

import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

import vars from 'styles/variables';
import { ellipsis } from 'styles/mixins';
import { isDarkTheme } from 'utilities/styles';

//-----------  Definitions  ----------- */

const Styled = {};

function backgroundColor({ theme }) {
  return isDarkTheme(theme) ? vars.purple : vars.brownLight;
}

//-----------  Sidebar Link  ----------- */

Styled.SidebarLink = styled.div`
  background-color: ${p => (p.isExpanded ? backgroundColor(p) : 'transparent')};
  border-left: 3px solid ${p => (p.isExpanded ? vars.blue : 'transparent')};
  color: ${p => (p.isExpanded ? vars.blue : vars.white)};
  display: block;
  padding: 1rem 8% 1rem 5%;
  transition: ${vars.transition};

  span {
    color: ${p => (p.isExpanded ? vars.blue : vars.white)};
  }

  svg path {
    fill: ${p => (p.isExpanded ? vars.blue : vars.grayDark)};
  }
`;

Styled.PrimaryBlock = styled.div`
  font-size: ${vars.fontSizeSm};
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};

  & + div {
    padding-top: ${p => (p.isExpanded ? '1rem' : '0')};
  }
`;

Styled.PrimaryLink = styled(NavLink)`
  ${ellipsis()}

  align-items     : center;
  display: flex !important;
  flex-direction: row;
  font-size: ${vars.fontSizeSm};
  justify-content: space-between;
  pointer-events: ${p => (p.disabled ? 'none' : 'default')};

  span {
    flex: 1 1 auto;
    font-weight: ${vars.fontWeightBold};
    text-transform: uppercase;
  }

  svg {
    height: 1.85rem;
    margin-right: 0.85rem;
    margin-top: -1px;
    transition: ${vars.transition};
    width: auto;
  }
`;

Styled.IconPlaceholder = styled.i`
  height: 1.85rem;
  margin-right: 0.85rem;
  width: ${p => (p.hasIcons ? '1.85rem' : 0)};
`;

Styled.SecondaryBlock = styled.div`
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};
  font-size: ${vars.fontSizeSm};
  max-height: ${p => (p.isExpanded ? '10rem' : '0')};
  overflow: hidden;
  padding-top: ${p => (p.isExpanded ? '1rem' : '0')};
  transition: ${vars.transition};

  &:last-child {
    margin-bottom: ${p => (p.isExpanded ? '0.75rem' : '0')};
  }
`;

Styled.SecondaryLink = styled(Link)`
  ${ellipsis()}

  color          : ${vars.purpleLighter};
  display        : block;
  font-size      : ${vars.fontSizeSm};
  font-weight    : ${vars.fontWeightThin};
  letter-spacing : 0.05em;
  padding        : 0.15rem 0 0.15rem 5.5%;
  pointer-events : ${p => (p.disabled ? 'none' : 'default')};

  i {
    font-size    : ${vars.fontSizeLg};
    margin-right : 0.75rem;
    top          : 1px;
    position     : relative;
  }

  &.active {
    color: ${vars.blue};

    & + a {
      margin-top : 0.67rem;
    }

    & ~ a {
      max-height     : 3rem;
      opacity        : 1;
      padding-bottom : 0.67rem;
      padding-top    : 0.67rem;

      svg path {
        stroke: ${vars.purpleLighter};
      }

      &:last-child {
        padding-bottom: 0.33rem;
      }
    }
  }
`;

Styled.TertiaryLink = styled(NavLink)`
  ${ellipsis()}

  color          : ${vars.purpleLighter};
  cursor         : ${p => (p.disabled ? 'not-allowed' : 'pointer')};
  display        : block;
  font-size      : 0.85em;
  font-weight    : ${vars.fontWeight};
  letter-spacing : 0.05em;
  max-height     : 0;
  opacity        : 0;
  padding-left   : 28%;
  position       : relative;

  svg {
    left         : 20%;
    margin-right : 1rem;
    position     : absolute;
    top          : -1rem;

    path {
      fill   : none;
      stroke : none;
    }
  }

  &.active {
    color: ${vars.white};
  }
`;

Styled.Dropdown = styled.div`
  color: ${p => (p.isExpanded ? vars.blue : vars.grayDark)};
  font-size: 0.67rem;

  &::before {
    content: '▼';
  }
`;

//-----------  Exports  ----------- */

export default Styled;
