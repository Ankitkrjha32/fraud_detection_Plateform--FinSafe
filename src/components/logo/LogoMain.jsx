import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// Make sure logo is imported correctly
import logo from 'assets/images/finsafe.png';

const Logo = () => {
  const theme = useTheme();
  
  return (
    <Box
      component="img"
      src={logo}
      alt="FinSafe"
      sx={{
        width: '140px', // Increased width
        height: 'auto', // Maintain aspect ratio
        maxHeight: '60px', // Control maximum height
        objectFit: 'contain',
        filter: theme.palette.mode === 'dark' ? 'brightness(0) invert(1)' : 'none',
        my: 2 // Add margin top and bottom
      }}
    />
  );    
}

export default Logo;
