'use client';

import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import VotersNewEditForm from '../voters-new-edit-form';

// ----------------------------------------------------------------------

export default function VotersCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new Voters"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Voters',
            href: paths.dashboard.voters.root,
          },
          { name: 'New Voters' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <VotersNewEditForm />
    </Container>
  );
}
