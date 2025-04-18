import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import Slider from 'react-slick'; // Import react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../../assets/images/DashBoard.png'; // Replace with your image paths
import image2 from '../../../assets/images/DashBoard123.png';
import image3 from '../../../assets/images/Defi.png';
import image4 from '../../../assets/images/Pay.jpg';

// Custom Arrow Components
const CustomArrow = ({ className, style, onClick, direction }) => (
  <Box
    onClick={onClick}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      cursor: 'pointer',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: '#1976d2',
      borderRadius: '50%',
      width: 40,
      height: 40,
      ...(direction === 'left' ? { left: -25 } : { right: -29 }),
    }}
  >
    {direction === 'left' ? '<' : '>'}
  </Box>
);

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        py: { xs: 8, md: 12 },
        px: 2,
        background: 'linear-gradient(135deg, #f5faff 0%, #ffffff 100%)',
        color: 'text.primary',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Background Visual */}
      <Box
        sx={{
          position: 'absolute',
          top: '-50px',
          right: '-100px',
          width: '300px',
          height: '300px',
          background: 'rgba(25, 118, 210, 0.1)',
          borderRadius: '50%',
          zIndex: 0,
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container alignItems="center" spacing={4}>
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                component="h1"
                variant="h2"
                fontWeight="bold"
                gutterBottom
                sx={{ color: '#1976d2', textAlign: { xs: 'center', md: 'left' } }}
              >
                Empower Your Finances with FinSafe
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography
                variant="h5"
                color="text.secondary"
                paragraph
                sx={{ mb: 4, textAlign: { xs: 'center', md: 'left' } }}
              >
                Advanced tools for risk assessment, real-time monitoring, and actionable insights to secure your financial future.
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
              >
                <Button
                  component={RouterLink}
                  to="/auth/login"
                  variant="contained"
                  size="large"
                  sx={{ bgcolor: '#1976d2', color: 'white', '&:hover': { bgcolor: '#1565c0' } }}
                >
                  Sign Up Now
                </Button>
                <Button
                  component={RouterLink}
                  to="/dashboard"
                  variant="outlined"
                  size="large"
                  sx={{ color: '#1976d2', borderColor: '#1976d2', '&:hover': { borderColor: '#1565c0' } }}
                >
                  Live Demo
                </Button>
              </Stack>
            </motion.div>
          </Grid>

          {/* Right Content */}
          <Grid item xs={12} md={6}>
            <Slider {...settings}>
              <Box
                component="img"
                src={image1}
                alt="Slide 1"
                sx={{
                  width: '100%',
                  maxWidth: 700,
                  mx: 'auto',
                  display: 'block',
                  boxShadow: 3,
                  borderRadius: 2,
                }}
              />
              <Box
                component="img"
                src={image2}
                alt="Slide 2"
                sx={{
                  width: '100%',
                  maxWidth: 700,
                  mx: 'auto',
                  display: 'block',
                  boxShadow: 3,
                  borderRadius: 2,
                }}
              />
              <Box
                component="img"
                src={image3}
                alt="Slide 3"
                sx={{
                  width: '100%',
                  maxWidth: 700,
                  mx: 'auto',
                  display: 'block',
                  boxShadow: 3,
                  borderRadius: 2,
                }}
              />
               <Box
                component="img"
                src={image4}
                alt="Slide 4"
                sx={{
                  width: '100%',
                  maxWidth: 700,
                  mx: 'auto',
                  display: 'block',
                  boxShadow: 3,
                  borderRadius: 2,
                }}
              />
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;