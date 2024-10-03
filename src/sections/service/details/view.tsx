'use client';

import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';

import ServiceDetailsContent from './detailsCard';

// ----------------------------------------------------------------------

export default function ServiceDetailsView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <CustomBreadcrumbs
        heading="Service Details"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Services', href: paths.dashboard.services.root },
          { name: 'Service Details' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <ServiceDetailsContent />
    </Container>
  );
}
