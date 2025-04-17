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
    <Box sx={{ minHeight: '100vh' }}>
      <AuthBackground />
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        sx={{ minHeight: '100vh' }}
      >
        <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
          <Box sx={{ width: 100, height: 100 }}>
            <Logo />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: { xs: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' }, mx: 2 }}
          >
            <Grid item>
              <AuthCard>{children}</AuthCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

AuthWrapper.propTypes = {
  children: PropTypes.node
};
