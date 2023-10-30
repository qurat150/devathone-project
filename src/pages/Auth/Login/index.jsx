import React, { useContext } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { GlobalStateContext } from 'GlobalStateProvider';
import { account } from 'lib/appwrite';
import { FlexBoxCentered } from 'styles';
import { UITextField, UIButton } from 'components';
import { useFormData } from 'hooks/useFormData';

const Login = () => {
  const { setIsLoggedIn } = useContext(GlobalStateContext);

  const { formData, handleInputChange } = useFormData({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleLogin = async () => {
    try {
      setIsLoggedIn(true);
      await account.createEmailSession(email, password);
      console.log('logged in');
    } catch (error) {
      // console.log('error logging in', error);
    }
  };

  return (
    <Container component="main" maxWidth="400px">
      <FlexBoxCentered flexDirection="column" height="100vh">
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <UITextField
            required
            fullWidth
            label="Email Address"
            name="email"
            loginautocomplete="email"
            autoFocus
            value={email}
            onChange={handleInputChange}
          />
          <UITextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={handleInputChange}
          />
          <Typography textAlign="center">
            Don&apos;t have an account? <NavLink to="/signup">Signup</NavLink>
          </Typography>
          <UIButton
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              handleLogin();
            }}
          >
            Sign In
          </UIButton>
        </Box>
      </FlexBoxCentered>
    </Container>
  );
};

export default Login;
