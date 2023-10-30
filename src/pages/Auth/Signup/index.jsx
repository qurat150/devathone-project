import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, TextField, Typography, Box } from '@mui/material';

import { GlobalStateContext } from 'GlobalStateProvider';
import { ID, account, databases } from 'lib/appwrite';
import { FlexBoxCentered } from 'styles';
import { useFormData } from 'hooks/useFormData';
import { UIButton, UITextField } from 'components';

const Signup = () => {
  const { setIsLoggedIn } = useContext(GlobalStateContext);

  const { formData, handleInputChange } = useFormData({
    userName: '',
    email: '',
    password: '',
  });
  const { userName, email, password } = formData;

  const handleSignup = async () => {
    const snapshot = await account.create(
      ID.unique(),
      email,
      password,
      userName
    );
    console.log(snapshot);

    const databseId = '653cc2cb78b64ef1b64c';
    const usersCollectionId = '653cc32b72d4a197e229';

    const databaseSnapshot = databases.createDocument(
      databseId,
      usersCollectionId,
      ID.unique(),
      { ...formData, isAdmin: false }
    );
    console.log(databaseSnapshot);
    await setIsLoggedIn(true);
  };

  return (
    <Container component="main" maxWidth="xs">
      <FlexBoxCentered flexDirection="column" height="100vh">
        <Typography component="h1" variant="h5">
          Signup
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <UITextField
            required
            fullWidth
            label="Username"
            name="userName"
            loginautocomplete="userName"
            autoFocus
            value={userName}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <UITextField
            required
            fullWidth
            label="Email"
            name="email"
            loginautocomplete="email"
            value={email}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <Typography textAlign="center" marginBottom="10px">
            Already have an account? <NavLink to="/login">Login</NavLink>
          </Typography>
          <UIButton
            type="button"
            fullWidth
            variant="contained"
            // sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              handleSignup();
            }}
          >
            Sign In
          </UIButton>
        </Box>
      </FlexBoxCentered>
    </Container>
  );
};

export default Signup;
