'use client';

import Container from '@mui/material/Container';
import { Grid, Stack, Button } from '@mui/material';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';

import PublicPollDetailsCard from './publicDetailsCard';

// ----------------------------------------------------------------------

export default function PublicPollDetailsView({ id, ...other }: { id: string }) {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <CustomBreadcrumbs
        heading="Public Poll Details"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Public Poll', href: paths.dashboard.publicPoll.root },
          { name: 'Public-Poll- Details' },
        ]}
        action={
          <Button
            component={RouterLink}
            href={paths.dashboard.publicPoll.root}
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
        <Grid item xs={12} md={12}>
          <Stack spacing={3} direction={{ xs: 'column-reverse', md: 'column' }}>
            <PublicPollDetailsCard id={id} {...other} />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
