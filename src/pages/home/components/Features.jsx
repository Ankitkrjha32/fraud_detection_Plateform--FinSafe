import { Grid, Typography, Box, Container, Paper } from '@mui/material';
import { SafetyCertificateOutlined, RadarChartOutlined, GlobalOutlined, TeamOutlined, ApiOutlined, DollarCircleOutlined } from '@ant-design/icons';

const features = [
  {
    icon: <SafetyCertificateOutlined style={{ fontSize: '3rem', color: '#1976d2' }} />,
    title: 'Realtime Fraud Detection',
    description: 'Real-time monitoring and AI-powered analysis to detect potential financial risks.',
  },
  {
    icon: <RadarChartOutlined style={{ fontSize: '3rem', color: '#1976d2' }} />,
    title: 'Interactive Analytics',
    description: 'Comprehensive visualization tools for better understanding of financial patterns.',
  },
  {
    icon: <GlobalOutlined style={{ fontSize: '3rem', color: '#1976d2' }} />,
    title: 'Global Coverage',
    description: 'Track and analyze financial transactions across multiple geographical locations.',
  },
  {
    icon: <TeamOutlined style={{ fontSize: '3rem', color: '#1976d2' }} />,
    title: 'Collaborative Platform',
    description: 'Team-based approach to risk assessment and management.',
  },
  {
    icon: <DollarCircleOutlined style={{ fontSize: '3rem', color: '#1976d2' }} />,
    title: 'Decentralized Finance (DeFi)',
    description: 'Explore and manage decentralized financial ecosystems with secure and transparent tools.',
  },
  {
    icon: <ApiOutlined style={{ fontSize: '3rem', color: '#1976d2' }} />,
    title: 'GNN-Based Fraud Detection API',
    description: 'Leverage Graph Neural Networks for real-time fraud detection, surpassing traditional rule-based techniques.',
  },
];

const Features = () => {
  return (
    <Box sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container>
        <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
          Key Features
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Empowering your financial safety with cutting-edge tools and insights.
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                }}
              >
                <Box sx={{ mb: 3 }}>{feature.icon}</Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;