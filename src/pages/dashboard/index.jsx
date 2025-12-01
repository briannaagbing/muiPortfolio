import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';

import { DashboardContent } from 'src/layouts/dashboard';

// ----------------------------------------------------------------------

const metadata = { title: `Dashboard - ${CONFIG.appName}` };

export default function OverviewAppPage() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <DashboardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 'calc(100vh - 200px)',
            fontFamily: '"Playfair Display", "Georgia", "Times New Roman", serif',
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 400,
                color: '#2c2c2c',
                letterSpacing: '1px',
                mb: 1,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              }}
            >
              Brianna Casas Agbing
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 300,
                color: '#666666',
                letterSpacing: '2px',
                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
              }}
            >
              MUI Portfolio
            </Typography>
          </Box>
        </Box>
      </DashboardContent>
    </>
  );
}
