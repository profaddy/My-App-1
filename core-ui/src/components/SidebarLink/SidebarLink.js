//-----------  Imports  -----------//

import get from 'lodash/get';
import isArray from 'lodash/isArray';

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import { sidebarShape } from 'models/sidebar/helpers';

//-----------  Definitions  -----------//

// const lineHieght = 32;

//-----------  Helpers  -----------//

function isObjectExpanded({ to, exact }, pathname) {
  return !exact ? pathname.startsWith(to) : to === pathname;
}

function isActiveClass(to, pathname, depth) {
  return get(to.split('/'), depth) === get(pathname.split('/'), depth)
    ? 'active'
    : '';
}

//-----------  Component  -----------//

const SidebarLink = ({ data, pathname, hasIcons, ...props }) => {
  const { to, icon, title, exact, nested, disabled } = data;

  const isExpanded = isObjectExpanded(data, pathname);
  let Icon;

  // Attempt to fetch icon image file (don't fail when non-existant)
  try {
    Icon = require(`assets/icons/${icon}`);
  } catch (error) {
    Icon = undefined;
  }

  // If no actual link provided, then render nothing
  return !to ? null : (
    <Styled.SidebarLink isExpanded={isExpanded}>
      <Styled.PrimaryBlock isExpanded={isExpanded} disabled={disabled}>
        <Styled.PrimaryLink to={to} exact={exact} disabled={disabled}>
          {Icon ? <Icon /> : <Styled.IconPlaceholder hasIcons={hasIcons} />}
          <span>{title}</span>
          {nested && <Styled.Dropdown isExpanded={isExpanded} />}
        </Styled.PrimaryLink>
      </Styled.PrimaryBlock>

      {isArray(nested) &&
        nested.map((secondary, index1) => (
          <Styled.SecondaryBlock
            key={index1}
            isExpanded={isExpanded}
            disabled={secondary.disabled}
          >
            <Styled.SecondaryLink
              to={to + secondary.to}
              className={isActiveClass(to + secondary.to, pathname, (secondary.depth || 2))}
              disabled={secondary.disabled}
            >
              <i>•</i>
              {secondary.title}
            </Styled.SecondaryLink>

            {secondary.nested &&
              secondary.nested.map((tertiary, index2) => {
                const start = 0 === index2 ? 11 : 0;
                const lineH = 32;

                return (
                  <Styled.TertiaryLink
                    key={index2}
                    to={to + secondary.to + tertiary.to}
                    disabled={tertiary.disabled}
                  >
                    <svg width="7" height={lineH} viewBox={`0 0 7 ${lineH}`}>
                      <path
                        fill="none"
                        d={`M0,${start} L0,${lineH} L7,${lineH}`}
                      />
                    </svg>
                    {tertiary.title}
                  </Styled.TertiaryLink>
                );
              })}
          </Styled.SecondaryBlock>
        ))}
    </Styled.SidebarLink>
  );
};

//-----------  Type Definitions  -----------//

SidebarLink.propTypes = {
  data: PropTypes.shape(sidebarShape).isRequired,
  hasIcons: PropTypes.bool.isRequired,
  pathname: PropTypes.string.isRequired,
};

//-----------  Export  -----------//

export default SidebarLink;
