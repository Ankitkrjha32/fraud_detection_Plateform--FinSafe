import { useAuth } from 'contexts/AuthContext';
import DashboardLayout from 'layout/Dashboard';
import MainCard from 'components/MainCard';
import { Box, Typography } from '@mui/material';
import ChatbotContent from '../component-overview/index';

export default function ChatbotPage() {
  const { isLoggedIn } = useAuth();

  const content = (
    <MainCard
      title={
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h3">AI Financial Assistant</Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            Get expert financial security advice
          </Typography>
        </Box>
      }
      sx={{
        height: '80vh',
        '& .MuiCardContent-root': {
          height: '100%',
          p: 0
        }
      }}
    >
      <ChatbotContent />
    </MainCard>
  );

  if (isLoggedIn) {
    return <DashboardLayout>{content}</DashboardLayout>;
  }

  return (
    <Box sx={{ p: 3, maxWidth: '1200px', mx: 'auto', mt: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          Financial Security Assistant
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Get instant answers to your financial security questions
        </Typography>
      </Box>
      {content}
    </Box>
  );
}