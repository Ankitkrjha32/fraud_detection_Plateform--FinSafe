import { Link } from 'react-router-dom';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

// project import
import AuthWrapper from './AuthWrapper';
import AuthLogin from './auth-forms/AuthLogin';

export default function Login() {
  console.log('Login component rendered'); // Add this line
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack 
            direction="row" 
            justifyContent="space-between" 
            alignItems="baseline" 
            sx={{ mb: { xs: -0.5, sm: 0.5 } }}
          >
            <Typography variant="h3">Login</Typography>
            <Typography 
              component={Link} 
              to="/" 
              variant="body1" 
              sx={{ textDecoration: 'none', color: 'primary.main' }}
            >
              Back to Home
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Alert severity="info" sx={{ mb: 2 }}>
            Use these demo credentials:
            <Box component="div" sx={{ mt: 1 }}>
              <Typography variant="body2">Email: demo@finsafe.com</Typography>
              <Typography variant="body2">Password: demo123</Typography>
            </Box>
          </Alert>
          <AuthLogin isDemo={true} />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}
