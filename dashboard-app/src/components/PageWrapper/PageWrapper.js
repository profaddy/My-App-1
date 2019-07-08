//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

//-----------  Component  -----------//

const PageWrapper = ({ title, children, breadcrumbs, ...props }) => (
  <Styled.PageWrapper {...props}>
    <Helmet>
      <title>{title ? `Miro Health | ${title}` : 'Miro Health'}</title>
    </Helmet>

    {/*<Styled.Breadcrumbs>
      {breadcrumbs.map(name => (
        <Styled.Breadcrumb key={name}>{name}</Styled.Breadcrumb>
      ))}
    </Styled.Breadcrumbs>*/}

    <Styled.PageContent>{children}</Styled.PageContent>
  </Styled.PageWrapper>
);

//-----------  Type Definitions  -----------//

PageWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  breadcrumbs: PropTypes.array,
};

//-----------  Export  -----------//

export default PageWrapper;
