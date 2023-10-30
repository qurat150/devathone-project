import React from 'react';
import { CircularProgress, Box } from '@mui/material';

export default function UILoader() {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
