import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)(
  ({ width, fontSize, theme, variant }) => ({
    width: width || '100%',
    fontSize: fontSize || '16px',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '8px',
    backgroundColor:
      variant === 'contained' ? theme.palette.secondary.main : 'transparent',
    color: variant === 'contained' ? 'white' : 'black',
    textTransform: 'inherit',
    // border: variant === 'outlined' ? '1px solid #ccc' : 'none',
  })
);
