import { AppBar, Box, Toolbar, Button, Container, Typography, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../../assets/images/FinSafe-Small.png';

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ py: 1 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo + Brand Name */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: '#1976d2',
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="FinSafe Logo"
              sx={{
                height: 50,
                mr: 1,
              }}
            />
            <Typography variant="h5" fontWeight="bold"></Typography>
          </Box>

          {/* Navigation Buttons */}
          <Stack direction="row" spacing={2}>
            {/* Home Button */}
            <Button
              component="a"
              href="https://fin-safe-eight.vercel.app/"
              color="inherit"
            >
              Home
            </Button>

            {/* Features Button */}
            <Button
              component="a"
              href="#features"
              color="inherit"
            >
              Features
            </Button>

            <Button component={RouterLink} to="/about" color="inherit">
              About
            </Button>
            <Button
              component={RouterLink}
              to="/auth/signup"
              variant="contained"
              sx={{
                bgcolor: '#1976d2',
                color: 'white',
                '&:hover': { bgcolor: '#1565c0' },
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;