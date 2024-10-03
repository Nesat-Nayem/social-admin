/* eslint-disable no-nested-ternary */
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
// eslint-disable-next-line import/no-extraneous-dependencies
import { GridCellParams } from '@mui/x-data-grid';
import ListItemText from '@mui/material/ListItemText';

import Label from 'src/components/label';

// ----------------------------------------------------------------------

type ParamsProps = {
  params: GridCellParams;
};

export function RenderCellName({ params }: ParamsProps) {
  return (
    <Stack direction="row" alignItems="center" sx={{ py: 2, width: 1 }}>
      <Avatar
        alt={params.row.name}
        src={params.row.serviceImgUrl}
        sx={{ width: 50, height: 50, mr: 2, borderRadius: '10%' }}
      />

      <ListItemText
        disableTypography
        primary={
          <Link
            noWrap
            color="inherit"
            variant="subtitle2"
            onClick={params.row.onViewRow}
            sx={{ cursor: 'pointer' }}
          >
            {params.row.name}
          </Link>
        }
        sx={{ display: 'flex', flexDirection: 'column' }}
      />
    </Stack>
  );
}

export function RenderCellStatus({ params }: ParamsProps) {
  return (
    <Stack direction="row" alignItems="center" sx={{ py: 3, width: 1 }}>
      <Label
        variant="soft"
        color={
          params.row.status === 'Activate'
            ? 'success'
            : params.row.status === 'Deactivate'
              ? 'error'
              : 'default'
        }
      >
        {params.row.status}
      </Label>
    </Stack>
  );
}
