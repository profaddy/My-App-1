//-----------  Imports  -----------//

import noop from 'lodash/noop';

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';

//-----------  Component  -----------//

const Pagination = ({ total, current, onChange, ...props }) => {
  const moveBackward = 1 === current ? noop : () => onChange(current - 1);
  const moveForward = total === current ? noop : () => onChange(current + 1);

  return (
    <Styled.Pagination>
      <Styled.Progess onClick={moveBackward} disabled={noop === moveBackward} />

      {[...Array(total)].map((_, i) => (
        <Styled.PageNum
          key={i}
          onClick={() => onChange(i + 1)}
          selected={current === i + 1}
        >
          {i + 1}
        </Styled.PageNum>
      ))}

      <Styled.Progess onClick={moveForward} disabled={noop === moveForward} />
    </Styled.Pagination>
  );
};

//-----------  Type Definitions  -----------//

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

//-----------  Export  -----------//

export default Pagination;
