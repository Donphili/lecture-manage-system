import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@material-ui/core';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      setMessage(`Login successful! Token: ${res.data.token}`);
    } catch (err) {
      setMessage('Login failed!');
    }
  };

  return (
    <Box mt={5}>
      <Typography variant="h4">Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button variant="contained" color="primary" type="submit">Login</Button>
      </form>
      {message && <Typography>{message}</Typography>}
    </Box>
  );
};

export default LoginPage;
