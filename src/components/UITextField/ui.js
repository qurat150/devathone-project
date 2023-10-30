import styled from '@emotion/styled';
import { TextField, inputClasses, textFieldClasses } from '@mui/material';

export const StyledTextField = styled(TextField)(({ theme }) => ({
  [`&.${textFieldClasses.root}`]: {
    color: 'white',
    [`& .${inputClasses.input}`]: {
      padding: '10px 0px',
      fontSize: '15px',
      color: 'white',
    },
  },
}));
