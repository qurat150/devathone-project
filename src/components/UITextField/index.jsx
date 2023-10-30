import React from 'react';
import PropTypes from 'prop-types';

import { StyledTextField } from './ui';

const UITextField = ({ children, variant = 'outlined', ...otherProps }) => {
  return (
    <StyledTextField required fullWidth variant={variant} {...otherProps}>
      {children}
    </StyledTextField>
  );
};

export default UITextField;
UITextField.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
  otherProps: PropTypes.any,
};
