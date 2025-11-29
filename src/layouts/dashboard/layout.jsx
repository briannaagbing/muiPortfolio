import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { useBoolean } from 'src/hooks/use-boolean';

import { useSettingsContext } from 'src/components/settings';

import { Main } from './main';
import { NavMobile } from './nav-mobile';
import { layoutClasses } from '../classes';
import { NavVertical } from './nav-vertical';
import { useNavColorVars } from './styles';
import { LayoutSection } from '../core/layout-section';
import { HeaderSection } from '../core/header-section';
import { navData as dashboardNavData } from '../config-nav-dashboard';

// ----------------------------------------------------------------------

export function DashboardLayout({ sx, children, header, data }) {
  const theme = useTheme();

  const mobileNavOpen = useBoolean();

  const settings = useSettingsContext();

  const navColorVars = useNavColorVars(theme, settings);

  const layoutQuery = 'lg';

  const navData = data?.nav ?? dashboardNavData;

  const isNavMini = settings.navLayout === 'mini';
  const isNavHorizontal = settings.navLayout === 'horizontal';
  const isNavVertical = isNavMini || settings.navLayout === 'vertical';

  return (
    <LayoutSection
      /** **************************************
       * Header
       *************************************** */
      headerSection={
        <HeaderSection
          layoutQuery={layoutQuery}
          slotProps={{
            toolbar: {
              sx: {
                bgcolor: '#ffffff',
                borderBottom: '1px solid #e0e0e0',
                minHeight: 70,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            },
            container: {
              maxWidth: false,
              sx: {
                px: { xs: 2, [layoutQuery]: 5 },
                display: 'flex',
                justifyContent: 'center',
              },
            },
          }}
          slots={{
            leftArea: null,
            centerArea: (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  fontFamily: '"Playfair Display", "Georgia", "Times New Roman", serif',
                }}
              >
                <Box
                  sx={{
                    typography: 'h5',
                    fontWeight: 400,
                    color: '#2c2c2c',
                    letterSpacing: '0.5px',
                    textAlign: 'center',
                    fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                  }}
                >
                  Brianna Casas Agbing
                </Box>
                <Box
                  sx={{
                    mx: 2,
                    width: '1px',
                    height: '20px',
                    bgcolor: '#d0d0d0',
                  }}
                />
                <Box
                  sx={{
                    typography: 'body2',
                    fontWeight: 300,
                    color: '#666666',
                    letterSpacing: '1px',
                    fontSize: { xs: '0.75rem', sm: '0.85rem' },
                  }}
                >
                  MUI Portfolio
                </Box>
              </Box>
            ),
          }}
        />
      }
      /** **************************************
       * Sidebar
       *************************************** */
      sidebarSection={
        isNavHorizontal ? null : (
          <NavVertical
            data={navData}
            isNavMini={isNavMini}
            layoutQuery={layoutQuery}
            cssVars={navColorVars.section}
            onToggleNav={() =>
              settings.onUpdateField(
                'navLayout',
                settings.navLayout === 'vertical' ? 'mini' : 'vertical'
              )
            }
          />
        )
      }
      /** **************************************
       * Footer
       *************************************** */
      footerSection={null}
      /** **************************************
       * Style
       *************************************** */
      cssVars={{
        ...navColorVars.layout,
        '--layout-transition-easing': 'linear',
        '--layout-transition-duration': '120ms',
        '--layout-nav-mini-width': '88px',
        '--layout-nav-vertical-width': '300px',
        '--layout-nav-horizontal-height': '64px',
        '--layout-dashboard-content-pt': theme.spacing(1),
        '--layout-dashboard-content-pb': theme.spacing(8),
        '--layout-dashboard-content-px': theme.spacing(5),
      }}
      sx={{
        [`& .${layoutClasses.hasSidebar}`]: {
          [theme.breakpoints.up(layoutQuery)]: {
            transition: theme.transitions.create(['padding-left'], {
              easing: 'var(--layout-transition-easing)',
              duration: 'var(--layout-transition-duration)',
            }),
            pl: isNavMini ? 'var(--layout-nav-mini-width)' : 'var(--layout-nav-vertical-width)',
          },
        },
        ...sx,
      }}
    >
      <Main isNavHorizontal={isNavHorizontal}>{children}</Main>
    </LayoutSection>
  );
}
