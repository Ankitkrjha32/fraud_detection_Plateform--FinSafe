import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';
import Stack from '@mui/material/Stack';

// project import
import Logo from './LogoMain';

const LogoSection = ({ sx, to }) => {
  return (
    <ButtonBase 
      disableRipple 
      component={Link} 
      to="/"
      sx={{
        p: 1.5, // Add padding
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx
      }}
    >
      <Stack 
        direction="row" 
        spacing={1} 
        alignItems="center"
        sx={{
          height: '48px', // Fixed height
          width: '100%',
          maxWidth: '200px' // Control maximum width
        }}
      >
        <Logo />
      </Stack>
    </ButtonBase>
  );
};

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string
};

export default LogoSection;
