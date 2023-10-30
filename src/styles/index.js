import { Box, styled } from '@mui/material';

export const FlexBox = styled(Box)({
  display: 'flex',
});

export const FlexBoxCentered = styled(FlexBox, {
  shouldForwardProp: (prop) => prop !== 'width' && prop !== 'height',
})(({ width, height }) => ({
  width: width || '100%',
  height: height || '100%',
  alignItems: 'center',
  justifyContent: 'center',
}));
