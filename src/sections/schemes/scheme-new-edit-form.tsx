import * as Yup from 'yup';
import { useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Card, Grid, Stack, Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { countries } from 'src/assets/data';

import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFTextField, RHFAutocomplete } from 'src/components/hook-form';

import { ISchemeItem } from 'src/types/scheme';

// ----------------------------------------------------------------------

type Props = {
  currentScheme?: ISchemeItem;
};

export default function SchemeNewEditForm({ currentScheme }: Props) {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const NewUserSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    desc: Yup.string().required('Description is required'),
    // location: Yup.string().required('Location is required'),
    publishedDate: Yup.date().required('Published date is required'),
  });

  const defaultValues = useMemo(
    () => ({
      title: currentScheme?.title || '',
      desc: currentScheme?.desc || '',
      // location: currentScheme?.location || '',
      publishedDate: currentScheme?.publishedDate || new Date(),
    }),
    [currentScheme]
  );

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar(currentScheme ? 'Update success!' : 'Create success!');
      router.push(paths.dashboard.LegislativeUpdates.root);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Grid container spacing={3}>
          <Grid xs={12} md={12}>
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
                <RHFTextField name="img" label="Upload Image" type="file" />
                <RHFTextField name="title" label="Enter Title" />
                <RHFTextField name="desc" label="Enter Description" />
                <RHFAutocomplete
                  name="location"
                  type="location"
                  label="Location"
                  placeholder="Choose a location"
                  fullWidth
                  options={countries.map((option) => option.label)}
                  getOptionLabel={(option) => option}
                />

                <Stack spacing={1.5}>
                  <Typography variant="subtitle2">Published date</Typography>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                    <Controller
                      name="publishedDate"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <DatePicker
                          {...field}
                          format="dd/MM/yyyy"
                          slotProps={{
                            textField: {
                              fullWidth: true,
                              error: !!error,
                              helperText: error?.message,
                            },
                          }}
                        />
                      )}
                    />
                  </Stack>
                </Stack>
              </Box>

              <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                  {!currentScheme ? 'Create Scheme' : 'Save Changes'}
                </LoadingButton>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </FormProvider>
    </LocalizationProvider>
  );
}
