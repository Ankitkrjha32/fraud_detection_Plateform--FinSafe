import { Grid, Typography, Box, Container } from '@mui/material';
import { SafetyCertificateOutlined, RadarChartOutlined, GlobalOutlined, TeamOutlined } from '@ant-design/icons';

const features = [
  {
    icon: <SafetyCertificateOutlined style={{ fontSize: '2rem' }} />,
    title: 'Advanced Risk Detection',
    description: 'Real-time monitoring and AI-powered analysis to detect potential financial risks'
  },
  {
    icon: <RadarChartOutlined style={{ fontSize: '2rem' }} />,
    title: 'Interactive Analytics',
    description: 'Comprehensive visualization tools for better understanding of financial patterns'
  },
  {
    icon: <GlobalOutlined style={{ fontSize: '2rem' }} />,
    title: 'Global Coverage',
    description: 'Track and analyze financial transactions across multiple geographical locations'
  },
  {
    icon: <TeamOutlined style={{ fontSize: '2rem' }} />,
    title: 'Collaborative Platform',
    description: 'Team-based approach to risk assessment and management'
  }
];

const Features = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Key Features
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <Box sx={{ color: 'primary.main', mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h5" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;