import Box from '@mui/material/Box';
import { Chip, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function NewsDetailsCard({ id }: { id: string }) {
  const renderSummary = (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box>
        <Chip label="Medical Post" color="primary" />
      </Box>
      <Box>
        <Typography variant="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quos.
        </Typography>
      </Box>
      <Box sx={{ borderBottom: '1px dashed #e9e9e9', pb: 2 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'justify' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita inventore
          perspiciatis. Fugit, saepe asperiores repellendus totam doloribus corporis eum inventore
          perspiciatis velit blanditiis quaerat maiores mollitia aut voluptatum molestiae? Eius illo
          odit autem, quod ipsam deserunt id officia, quasi consectetur optio ab dicta commodi,
          ratione nulla porro quibusdam? Ratione!
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="body2">Published Date</Typography>
          </Box>
          <Box>
            <Typography variant="body2">01/10/2024</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="body2">Location</Typography>
          </Box>
          <Box>
            <Typography variant="body2">Tamil Nadu</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="body2">Author Name</Typography>
          </Box>
          <Box>
            <Typography variant="body2">Suraj Jamdade</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="body2">Author Email</Typography>
          </Box>
          <Box>
            <Typography variant="body2">suraj@gmail.com</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="body2">Total Views</Typography>
          </Box>
          <Box>
            <Typography variant="body2">500</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="body2">Total Likes</Typography>
          </Box>
          <Box>
            <Typography variant="body2">200</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="body2">Total Comments</Typography>
          </Box>
          <Box>
            <Typography variant="body2">100</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="body2">Total Share</Typography>
          </Box>
          <Box>
            <Typography variant="body2">100</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return <>{renderSummary}</>;
}
