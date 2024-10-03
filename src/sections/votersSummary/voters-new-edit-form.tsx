import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useMemo, useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { fData } from 'src/utils/format-number';

import { VoterState, VoterAgeGroup } from 'src/assets/data/voters';

import { useSnackbar } from 'src/components/snackbar';
import FormProvider, {
  RHFTextField,
  RHFUploadAvatar,
  RHFAutocomplete,
} from 'src/components/hook-form';

import { IVotersItem } from 'src/types/voters';

type Props = {
  currentVoters?: IVotersItem;
};

export default function VotersNewEditForm({ currentVoters }: Props) {
  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const NewUserSchema = Yup.object().shape({
    votingName: Yup.string().required('Voting Name is required'),
    votingImg: Yup.mixed<any>().nullable().required('Avatar is required'),
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
      votingImg: currentVoters?.votingImg || null,
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
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar(currentVoters ? 'Update success!' : 'Create success!');
      router.push(paths.dashboard.voters.root);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('votingImg', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Card sx={{ pt: 10, pb: 5, px: 3 }}>
            <Box sx={{ mb: 5 }}>
              <RHFUploadAvatar
                name="votingImg"
                maxSize={3145728}
                onDrop={handleDrop}
                helperText={
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 3,
                      mx: 'auto',
                      display: 'block',
                      textAlign: 'center',
                      color: 'text.disabled',
                    }}
                  >
                    Allowed *.jpeg, *.jpg, *.png, *.gif
                    <br /> max size of {fData(3145728)}
                  </Typography>
                }
              />
            </Box>

            {currentVoters && (
              <Stack justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
                <Button variant="soft" color="error">
                  Delete User
                </Button>
              </Stack>
            )}
          </Card>
        </Grid>

        <Grid xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
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

            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                {!currentVoters ? 'Create Voters' : 'Save Changes'}
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
