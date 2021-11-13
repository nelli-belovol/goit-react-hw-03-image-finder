import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ onClick }) {
  return (
    <>
      <button className="Button" onClick={onClick} type="button">
        Load more
      </button>
    </>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};
