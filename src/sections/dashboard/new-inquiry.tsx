import Link from 'next/link';

import {
  Card,
  Stack,
  Avatar,
  Button,
  Tooltip,
  CardProps,
  CardHeader,
  IconButton,
  ListItemText,
} from '@mui/material';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  list: {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  }[];
}

export default function NewInquiry({ title, subheader, list, ...other }: Props) {
  return (
    <Card {...other} sx={{ height: '100%' }}>
      <CardHeader
        title={title}
        subheader={subheader}
        action={
          <Link href="/dashboard/inquiry">
            <Button
              size="small"
              color="inherit"
              endIcon={<Iconify icon="eva:arrow-ios-forward-fill" width={18} sx={{ ml: -0.5 }} />}
            >
              View All
            </Button>
          </Link>
        }
      />

      <Stack spacing={3} sx={{ p: 3 }}>
        {list.map((contact) => (
          <Stack direction="row" alignItems="center" key={contact.id}>
            <Avatar src={contact.avatarUrl} sx={{ width: 48, height: 48, mr: 2 }} />

            <ListItemText primary={contact.name} secondary={contact.email} />

            <Tooltip title="view">
              <IconButton>
                <Iconify icon="eva:diagonal-arrow-right-up-fill" />
              </IconButton>
            </Tooltip>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}
