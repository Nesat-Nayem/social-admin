import * as Yup from 'yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import MenuItem from '@mui/material/MenuItem';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { USER_STATUS_OPTIONS } from 'src/_mock';
import { VoterState, VoterAgeGroup } from 'src/assets/data/voters';

import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFSelect, RHFTextField, RHFAutocomplete } from 'src/components/hook-form';

import { IVotersItem } from 'src/types/voters';

// ----------------------------------------------------------------------

type Props = {
  open: boolean;
  onClose: VoidFunction;
  currentVoters?: IVotersItem;
};

export default function VotersQuickEditForm({ currentVoters, open, onClose }: Props) {
  const { enqueueSnackbar } = useSnackbar();

  const NewUserSchema = Yup.object().shape({
    votingName: Yup.string().required('Voting Name is required'),
    // avatarUrl: Yup.mixed<any>().nullable().required('Avatar is required'),
    votingLocations: Yup.string().required('Voting Locations are required'),
    votingRegions: Yup.string().required('Voting Regions are required'),
    votingAgeGroups: Yup.string().required('Voting Age Groups are required'),
    votingCount: Yup.string().required('Voting Count is required'),
    votingState: Yup.string().required('Voting State is required'),
    votingDistrict: Yup.string().required('Voting District is required'),
    votingConstituency: Yup.string().required('Voting Constituency is required'),
    votingTotalVoting: Yup.string().required('Voting Total Voting is required'),
    votingPerct: Yup.string().required('Voting Percent is required'),
  });

  const defaultValues = useMemo(
    () => ({
      votingName: currentVoters?.votingName || '',
      // avatarUrl: currentVoters?.avatarUrl || null,
      votingLocations: currentVoters?.votingLocations || '',
      votingRegions: currentVoters?.votingRegions || '',
      votingAgeGroups: currentVoters?.votingAgeGroups || '',
      votingCount: currentVoters?.votingCount || '',
      votingState: currentVoters?.votingState || '',
      votingDistrict: currentVoters?.votingDistrict || '',
      votingConstituency: currentVoters?.votingConstituency || '',
      votingTotalVoting: currentVoters?.votingTotalVoting || '',
      votingPerct: currentVoters?.votingPerct || '',
      status: currentVoters?.status || 'active',
    }),
    [currentVoters]
  );

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      onClose();
      enqueueSnackbar('Update success!');
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Dialog
      fullWidth
      maxWidth={false}
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { maxWidth: 720 },
      }}
    >
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <DialogTitle>Quick Update</DialogTitle>

        <DialogContent>
          <Alert variant="outlined" severity="info" sx={{ mb: 3 }}>
            Account is waiting for confirmation
          </Alert>

          <Box
            rowGap={3}
            columnGap={2}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            }}
          >
            <RHFSelect name="status" label="Status">
              {USER_STATUS_OPTIONS.map((status) => (
                <MenuItem key={status.value} value={status.value}>
                  {status.label}
                </MenuItem>
              ))}
            </RHFSelect>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }} />

            <RHFTextField name="votingName" label="Full Name" />
            <RHFTextField name="votingLocations" label="Voting Locations" />
            <RHFTextField name="votingRegions" label="Voting Regions" />
            <RHFAutocomplete
              name="votingAgeGroups"
              label="Age Groups"
              placeholder="Choose a Age Group"
              fullWidth
              options={VoterAgeGroup.map((option) => option.label)}
              getOptionLabel={(option) => option}
            />
            <RHFTextField name="votingCount" label="Voting Count" type="number" />
            <RHFAutocomplete
              name="votingState"
              label="State"
              placeholder="Choose a state"
              fullWidth
              options={VoterState.map((option) => option.label)}
              getOptionLabel={(option) => option}
            />
            <RHFTextField name="votingDistrict" label="Voting District" />
            <RHFTextField name="votingConstituency" label="Voting Constituency" />
            <RHFTextField name="votingTotalVoting" label="Total Voting" type="number" />
            <RHFTextField name="votingPerct" label="Voting Percent" type="number" />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>

          <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            Update
          </LoadingButton>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
}
