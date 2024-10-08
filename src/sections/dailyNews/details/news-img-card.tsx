import Image from 'next/image';

import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';

// ----------------------------------------------------------------------

export default function NewsImgCard({ id }: { id: string }) {
  const renderSummary = (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
        <Stack spacing={0.5}>
          <Image
            src="/s1.jpg"
            width={250}
            height={250}
            alt="post-img"
            style={{ borderRadius: '5%' }}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
        <Stack spacing={0.5}>
          <Image
            src="/s2.jpg"
            width={250}
            height={250}
            alt="post-img"
            style={{ borderRadius: '5%' }}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
        <Stack spacing={0.5}>
          <Image
            src="/s3.jpg"
            width={250}
            height={250}
            alt="post-img"
            style={{ borderRadius: '5%' }}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
        <Stack spacing={0.5}>
          <Image
            src="/s4.jpg"
            width={250}
            height={250}
            alt="post-img"
            style={{ borderRadius: '5%' }}
          />
        </Stack>
      </Grid>
    </Grid>
  );

  return <>{renderSummary}</>;
}
