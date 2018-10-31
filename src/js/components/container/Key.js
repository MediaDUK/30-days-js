import React from 'react';
import PropTypes from 'prop-types';

function Key({ keyCode, keyLetter, keyName }) {
  return (
    <div data-key={keyCode} className="key">
      <kbd>{keyLetter}</kbd>
      <span className="sound">{keyName}</span>
    </div>
  );
}
Key.propTypes = {
  keyCode: PropTypes.number.isRequired,
  keyLetter: PropTypes.string.isRequired,
  keyName: PropTypes.string.isRequired,
};

export default Key;
