import { Box } from '@mui/material';
import { Hero, Features, Navbar } from './components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from 'contexts/AuthContext';


const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: 'background.default'
    }}>
      <Navbar /> {/* Navbar added here */}
      <Hero />
      <Features />
    </Box>
  );
};

export default Home;