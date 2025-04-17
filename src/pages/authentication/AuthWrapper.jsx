import PropTypes from 'prop-types';

// material-ui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// project import
import AuthCard from './AuthCard';
import Logo from 'components/logo/LogoMain';
import AuthBackground from 'assets/images/auth/AuthBackground';

export default function AuthWrapper({ children }) {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <AuthBackground />
      <Grid
        container
        sx={{ minHeight: '100vh' }}
      >
        <Grid item xs={12} sx={{ ml: 3, mt: 3, position: 'absolute' }}>
          <Logo />
        </Grid>
        <Grid 
          item 
          xs={12} 
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <AuthCard>
            {children}
          </AuthCard>
        </Grid>
      </Grid>
    </Box>
  );
}

AuthWrapper.propTypes = {
  children: PropTypes.node
};
