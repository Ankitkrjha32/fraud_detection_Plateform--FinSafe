import { RouterProvider } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

// project import
import router from './routes';  // Update this line
import ThemeCustomization from 'themes';

import ScrollTop from 'components/ScrollTop';
import { AuthProvider } from './contexts/AuthContext';
import ChatButton from 'components/ChatButton';

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function App() {
  return (
    <AuthProvider>
      <ThemeCustomization>
        <ScrollTop>
          <RouterProvider router={router} />
          <ChatButton />
        </ScrollTop>
      </ThemeCustomization>
    </AuthProvider>
  );
}
