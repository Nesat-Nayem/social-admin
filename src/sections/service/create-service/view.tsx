'use client';

import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';

import CreateNewServiceForm from './create-new-service-form';

// ----------------------------------------------------------------------

export default function CreateServiceView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <CustomBreadcrumbs
        heading="Create New Service"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Services', href: paths.dashboard.services.root },
          { name: 'New Service' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <CreateNewServiceForm />
    </Container>
  );
}
