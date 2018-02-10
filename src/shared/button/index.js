import React from 'react';
import PropTypes from 'prop-types';

import {Button} from 'react-bootstrap';

function ButtonComponent({flavor, onClick, label, children}) {
  if (typeof onClick !== 'function') {
    return null;
  }

  return (
    <Button bsStyle={flavor} onClick={onClick}>
      {children || label}
    </Button>
  );
}

ButtonComponent.propTypes = {
  flavor: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string
  ])
};

ButtonComponent.defaultProps = {
  label: 'Click me'
};

export default ButtonComponent;
