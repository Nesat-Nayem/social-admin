'use client';

import { Grid, Button } from '@mui/material';
import Container from '@mui/material/Container';

import { useMockedUser } from 'src/hooks/use-mocked-user';

import { _newInquiry } from 'src/_mock';
import SeoIllustration from 'src/assets/illustrations/seo-illustration';

import { useSettingsContext } from 'src/components/settings';

import AppWelcome from 'src/sections/dashboard/app-welcome';

import WadgeCards from './widge-cards';
import NewInquiry from './new-inquiry';

// ----------------------------------------------------------------------

export default function AppDashboard() {
  const { user } = useMockedUser();
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3} sx={{ marginTop: '10px' }}>
        <Grid item xs={12} md={8}>
          <AppWelcome
            title={`Welcome back 👋 \n ${user?.displayName}`}
            description="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
            img={<SeoIllustration />}
            action={
              <Button variant="contained" color="primary">
                Go Profile
              </Button>
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <NewInquiry
            title="New News"
            subheader="You have 20000 New News. Check it!"
            list={_newInquiry.slice(-5)}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: '10px' }}>
        <Grid item xs={12} md={4}>
          <WadgeCards
            title="Total Social Issues"
            total={100}
            style={{
              background:
                'linear-gradient(135deg, rgba(91, 228, 155, 0.2), rgba(0, 167, 111, 0.2))',
            }}
            value={100}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <WadgeCards
            title="Total Medical Issues"
            total={80}
            style={{
              background:
                'linear-gradient(135deg, rgba(97, 243, 243, 0.2), rgba(0, 184, 217, 0.2))',
            }}
            value={80}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <WadgeCards
            title="Total News"
            total={60}
            style={{
              background:
                'linear-gradient(135deg, rgba(255, 214, 102, 0.2), rgba(255, 171, 0, 0.2))',
            }}
            value={60}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <WadgeCards
            title="Total Visits"
            total={2}
            style={{
              background:
                'linear-gradient(135deg, rgba(255, 172, 130, 0.2), rgba(255, 86, 48, 0.2))',
            }}
            value={2}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <WadgeCards
            title="Public Poll"
            total={12}
            style={{
              background:
                'linear-gradient(135deg, rgba(255, 172, 130, 0.2), rgb(255 30 230 / 20%))',
            }}
            value={2}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <WadgeCards
            title="Voters Summary"
            total={50}
            style={{
              background: 'linear-gradient(135deg, rgb(237 95 22 / 11%), rgb(13 219 223 / 45%))',
            }}
            value={2}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <WadgeCards
            title="Opinion Poll"
            total={150}
            style={{
              background: 'linear-gradient(135deg, rgb(227 210 202 / 20%), rgb(12 255 0 / 20%))',
            }}
            value={2}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <WadgeCards
            title="Road Accident"
            total={500}
            style={{
              background:
                'linear-gradient(135deg, rgba(91, 228, 155, 0.2), rgba(0, 167, 111, 0.2))',
            }}
            value={2}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <WadgeCards
            title="Blood Donations"
            total={300}
            style={{
              background:
                'linear-gradient(135deg, rgba(97, 243, 243, 0.2), rgba(0, 184, 217, 0.2))',
            }}
            value={2}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <WadgeCards
            title="Organ Donations"
            total={200}
            style={{
              background:
                'linear-gradient(135deg, rgba(255, 214, 102, 0.2), rgba(255, 171, 0, 0.2))',
            }}
            value={2}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <WadgeCards
            title="Total Hospitals"
            total={2000}
            style={{
              background:
                'linear-gradient(135deg, rgba(255, 172, 130, 0.2), rgba(255, 86, 48, 0.2))',
            }}
            value={2}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <WadgeCards
            title="Total Voters"
            total={20000}
            style={{
              background: 'linear-gradient(135deg, rgb(237 95 22 / 11%), rgb(13 219 223 / 45%))',
            }}
            value={2}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <WadgeCards
            title="Total Schemes"
            total={20000}
            style={{
              background:
                'linear-gradient(135deg, rgba(97, 243, 243, 0.2), rgba(0, 184, 217, 0.2))',
            }}
            value={2}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <WadgeCards
            title="Total Users"
            total={20000}
            style={{
              background:
                'linear-gradient(135deg, rgba(255, 172, 130, 0.2), rgb(255 30 230 / 20%))',
            }}
            value={2}
          />
        </Grid>
      </Grid>

      {/* <Box
        sx={{
          mt: 5,
          width: 1,
          height: 320,
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      /> */}
    </Container>
  );
}
