'use client';

import Container from '@mui/material/Container';
import { Grid, Stack, Button } from '@mui/material';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';

import NewsImgCard from './news-img-card';
import NewsDetailsCard from './newsDetailsCard';

// ----------------------------------------------------------------------

export default function DailyNewsDetailsView({ id, ...other }: { id: string }) {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <CustomBreadcrumbs
        heading="Daily News Details"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Daily News', href: paths.dashboard.medicalIssues.root },
          { name: 'Daily News - Details' },
        ]}
        action={
          <Button
            component={RouterLink}
            href={paths.dashboard.medicalIssues.root}
            variant="contained"
            startIcon={<Iconify icon="mingcute:arrow-line" />}
          >
            See All
          </Button>
        }
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Stack spacing={3} direction={{ xs: 'column-reverse', md: 'column' }}>
            <NewsImgCard id={id} {...other} />
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack spacing={3} direction={{ xs: 'column-reverse', md: 'column' }}>
            <NewsDetailsCard id={id} {...other} />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
