import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ErrorBoundary({ error }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: 2
      }}
    >
      <Typography variant="h4" color="error">
        Oops! Something went wrong
      </Typography>
      <Typography color="textSecondary">
        {error?.message || 'An unexpected error occurred'}
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate('/')}
        color="primary"
      >
        Return to Home
      </Button>
    </Box>
  );
}