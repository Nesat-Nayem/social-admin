import Card from '@mui/material/Card';
import { Badge } from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

// ----------------------------------------------------------------------

// type Props = {
//   service: IServiceItem;
// };

export default function ServiceDetailsContent() {
  //   const { id } = service;

  const renderContent = (
    <Stack component={Card} spacing={3} sx={{ p: 3 }}>
      <Typography variant="h4">It Service</Typography>
      <Typography variant="body2" sx={{ textAlign: 'justify' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores minus obcaecati
        ratione, error doloremque ipsa placeat sunt aperiam velit corrupti repellat saepe.
        Voluptatem reiciendis illo quas praesentium aliquid? Possimus voluptatibus ex consequatur
        quisquam expedita omnis facere minus et rem. Nostrum itaque architecto inventore pariatur
        aspernatur. Minima cumque voluptas magnam.
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'justify' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores minus obcaecati
        ratione, error doloremque ipsa placeat sunt aperiam velit corrupti repellat saepe.
        Voluptatem reiciendis illo quas praesentium aliquid? Possimus voluptatibus ex consequatur
        quisquam expedita omnis facere minus et rem. Nostrum itaque architecto inventore pariatur
        aspernatur. Minima cumque voluptas magnam.
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'justify' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores minus obcaecati
        ratione, error doloremque ipsa placeat sunt aperiam velit corrupti repellat saepe.
        Voluptatem reiciendis illo quas praesentium aliquid? Possimus voluptatibus ex consequatur
        quisquam expedita omnis facere minus et rem. Nostrum itaque architecto inventore pariatur
        aspernatur. Minima cumque voluptas magnam.
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'justify' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores minus obcaecati
        ratione, error doloremque ipsa placeat sunt aperiam velit corrupti repellat saepe.
        Voluptatem reiciendis illo quas praesentium aliquid? Possimus voluptatibus ex consequatur
        quisquam expedita omnis facere minus et rem. Nostrum itaque architecto inventore pariatur
        aspernatur. Minima cumque voluptas magnam.
      </Typography>
    </Stack>
  );

  const renderOverview = (
    <Stack component={Card} spacing={2} sx={{ p: 3 }}>
      {[
        {
          label: 'Unit Price',
          value: 1011,
        },
        {
          label: 'Tax',
          value: '10%',
        },
        {
          label: 'Tax Type',
          value: 'Inclusive',
        },
        {
          label: 'Status',
          value: 'Deactivated',
        },
      ].map((item) => (
        <Stack key={item.label} spacing={1.5} direction="row">
          <ListItemText
            primary={item.label}
            secondary={
              item.label === 'Status' ? (
                <Badge
                  badgeContent={item.value}
                  color={
                    // eslint-disable-next-line no-nested-ternary
                    item.value === 'Activated'
                      ? 'success'
                      : item.value === 'Deactivated'
                        ? 'error'
                        : 'default'
                  }
                  sx={{
                    '& .MuiBadge-dot': {
                      backgroundColor: item.value === 'Activated' ? 'success' : 'error',
                    },
                    marginLeft: '2rem',
                  }}
                />
              ) : (
                item.value
              )
            }
            primaryTypographyProps={{
              typography: 'body2',
              color: 'text.secondary',
              mb: 0.5,
            }}
            secondaryTypographyProps={{
              typography: 'subtitle2',
              color: 'text.primary',
              component: 'span',
            }}
          />
        </Stack>
      ))}
    </Stack>
  );

  return (
    <Grid container spacing={3}>
      <Grid xs={12} md={8}>
        {renderContent}
      </Grid>

      <Grid xs={12} md={4}>
        {renderOverview}
      </Grid>
    </Grid>
  );
}
