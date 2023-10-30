import PropTypes from 'prop-types';

import { StyledButton } from './ui';

export default function UIButton({
  children,
  variant = 'text',
  ...otherProps
}) {
  return (
    <StyledButton variant={variant} {...otherProps}>
      {children}
    </StyledButton>
  );
}

UIButton.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
};
