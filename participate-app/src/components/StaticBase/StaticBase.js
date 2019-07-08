//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import Logo from '@miro/core-ui/lib/components/Logo';

//-----------  Component  -----------//

const StaticBase = ({
  theme,
  children,
  hasEula,
  hasUserLoaded,
  isError,
  hasStudyLoaded,
  ...props
}) => (
  <Styled.StaticBase visible={true}>
    <Styled.CenterWrapper>
      <Styled.LogoWrapper
        loading={!(hasUserLoaded && hasStudyLoaded && hasEula)}
        theme={theme}
      >
        <Logo width={18} />
        {!hasEula ? (
          <>
            <br /> <Styled.Loading>loading...</Styled.Loading>
          </>
        ) : (
          !hasEula &&
          !isError && (
            <>
              <br /> <Styled.Loading>logging out...</Styled.Loading>
            </>
          )
        )}

        {hasEula && (
          <h5>{(process.env.APP_TITLE || '').replace('Miro ', '')}</h5>
        )}
        {typeof window === 'undefined' && (
          <Styled.Loading>loading...</Styled.Loading>
        )}
      </Styled.LogoWrapper>

      <Styled.FormWrapper
        loading={!(hasUserLoaded && hasStudyLoaded && hasEula)}
      >
        {children}
      </Styled.FormWrapper>
    </Styled.CenterWrapper>
  </Styled.StaticBase>
);

//-----------  Type Definitions  -----------//

StaticBase.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.any,
  hasEula: PropTypes.bool,
  hasUserLoaded: PropTypes.bool.isRequired,
  hasStudyLoaded: PropTypes.bool.isRequired,
};

//-----------  Export  -----------//

export default StaticBase;
