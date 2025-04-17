import { Suspense } from 'react';
import { CircularProgress, Box } from '@mui/material';

const Loadable = (Component) => (props) =>
  (
    <Suspense
      fallback={
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
          }}
        >
          <CircularProgress />
        </Box>
      }
    >
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
