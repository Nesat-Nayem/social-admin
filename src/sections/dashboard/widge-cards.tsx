import React from 'react';

import { Box, Typography } from '@mui/material';
import Card, { CardProps } from '@mui/material/Card';

interface Props extends CardProps {
  title?: string;
  total: number;
  value?: number;
}

export default function WadgeCards({ title, total, value, ...other }: Props) {
  return (
    <Card {...other}>
      <Box sx={{ padding: 3 }}>
        <Typography
          variant="h6"
          sx={{ marginBottom: '12px', fontWeight: '600', fontSize: '0.875rem !important' }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}
        >
          <Typography variant="h3" sx={{ fontSize: '1.875rem !important', marginBottom: '8px' }}>
            {total}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
