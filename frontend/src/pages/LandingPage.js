import React from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Box mt={5}>
      <Typography variant="h2">Lecture Management System</Typography>
      <Typography variant="h6" paragraph>
        A web-based application designed to streamline lecture management, enhance student engagement, and provide centralized access to lecture materials.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/login">
        Login
      </Button>
    </Box>
  );
};

export default LandingPage;
