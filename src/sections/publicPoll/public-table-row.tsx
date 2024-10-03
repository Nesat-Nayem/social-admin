/* eslint-disable no-nested-ternary */

import Stack from '@mui/material/Stack';
// eslint-disable-next-line import/no-extraneous-dependencies
import { GridCellParams } from '@mui/x-data-grid';
import ListItemText from '@mui/material/ListItemText';

import { fTime, fDate } from 'src/utils/format-time';

import Label from 'src/components/label';

// ----------------------------------------------------------------------

type ParamsProps = {
  params: GridCellParams;
};

export function RenderCellTitle({ params }: ParamsProps) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center" sx={{ py: 3, width: 1 }}>
      {params.row.question.slice(0, 50)}...
    </Stack>
  );
}

export function RenderCellYes({ params }: ParamsProps) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center" sx={{ py: 3, width: 1 }}>
      <Label variant="soft" color="success">
        {params.row.yes}
      </Label>
    </Stack>
  );
}

export function RenderCellNo({ params }: ParamsProps) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center" sx={{ py: 3, width: 1 }}>
      <Label variant="soft" color="success">
        {params.row.no}
      </Label>
    </Stack>
  );
}

export function RenderCellPublishedDate({ params }: ParamsProps) {
  return (
    <Stack direction="row" alignItems="center" sx={{ py: 3, width: 1 }}>
      <ListItemText
        primary={fDate(params.row.publishedDate)}
        secondary={fTime(params.row.publishedDate)}
        primaryTypographyProps={{ typography: 'body2', noWrap: true }}
        secondaryTypographyProps={{
          mt: 0.5,
          component: 'span',
          typography: 'caption',
        }}
      />
    </Stack>
  );
}
