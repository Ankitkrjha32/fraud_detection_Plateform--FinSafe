import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hero, Features } from './components';

// material-ui
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme
} from '@mui/material';

// project imports
import MainCard from 'components/MainCard';

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: theme.palette.background.default
      }}
    >
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Stack spacing={2}>
                <Typography variant="h1" color="primary">
                  FinSafe
                </Typography>
                <Typography variant="h4">
                  Comprehensive Financial Risk Assessment Platform
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Visualize and understand financial risks through interactive dashboards and real-time data analysis. 
                  Built with advanced technologies to provide actionable insights.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
                  <Button
                    component={RouterLink}
                    to="/login"
                    variant="contained"
                    size="large"
                    color="primary"
                  >
                    Get Started
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/dashboard"
                    variant="outlined"
                    size="large"
                  >
                    Live Demo
                  </Button>
                </Stack>
              </Stack>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MainCard>
                <Stack spacing={3}>
                  <Typography variant="h5">Key Features</Typography>
                  <Stack spacing={2}>
                    {[
                      'Interactive Risk Assessment Dashboards',
                      'Real-time Data Visualization',
                      'Network Graph Analysis',
                      'Map-based Visualization',
                      'Advanced Analytics & Reporting'
                    ].map((feature, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                            mr: 2
                          }}
                        />
                        <Typography>{feature}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </MainCard>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;