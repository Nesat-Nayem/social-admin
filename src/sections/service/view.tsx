'use client';

import isEqual from 'lodash/isEqual';
import { useState, useEffect, useCallback } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  DataGrid,
  GridColDef,
  GridToolbarExport,
  GridActionsCellItem,
  GridToolbarContainer,
  GridRowSelectionModel,
  GridToolbarQuickFilter,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
  GridColumnVisibilityModel,
} from '@mui/x-data-grid';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';

import { useGetTickets } from 'src/api/tickets';

import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import EmptyContent from 'src/components/empty-content';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import { IInquiryTableFilters } from 'src/types/inquiry';
import { IServiceItem, IServiceTableFilters, IServiceTableFilterValue } from 'src/types/services';

import InquiryTableToolbar from './service-table-toolbar';
import InquiryTableFiltersResult from './service-table-filters-result';
import { RenderCellName, RenderCellStatus } from './service-table-row';

// ----------------------------------------------------------------------

const SERVICE_OPTIONS = [
  { value: 'SocialIssue', label: 'Social Issue' },
  { value: 'MedicalIssue', label: 'Medical Issues' },
  { value: 'DailyNews ', label: 'Daily News  ' },
  { value: 'PublicPoll', label: 'Public Poll ' },
  { value: 'VotersSummary', label: 'Voters Summary' },
  { value: 'OpinionPoll', label: 'Opinion Poll' },
];

const STATUS_OPTIONS = [
  { value: 'activate', label: 'Activate' },
  { value: 'deactivate', label: 'Deactivate' },
];

const defaultFilters: IInquiryTableFilters = {
  services: [],
};

const HIDE_COLUMNS = {
  category: false,
};

const HIDE_COLUMNS_TOGGLABLE = ['category', 'actions'];

// ----------------------------------------------------------------------

export default function InquiryView() {
  const { enqueueSnackbar } = useSnackbar();

  const confirmRows = useBoolean();

  const router = useRouter();

  const settings = useSettingsContext();

  const { productsLoading } = useGetTickets();

  const [tableData, setTableData] = useState<IServiceItem[]>([]);

  const [filters, setFilters] = useState(defaultFilters);

  const [selectedRowIds, setSelectedRowIds] = useState<GridRowSelectionModel>([]);

  const [columnVisibilityModel, setColumnVisibilityModel] =
    useState<GridColumnVisibilityModel>(HIDE_COLUMNS);

  useEffect(() => {
    if (!productsLoading) {
      setTableData([
        {
          id: '1',
          serviceImgUrl: '/s1.jpg',
          name: 'Social Issues',
          status: 'Activate',
          service: '',
        },

        {
          id: '2',
          serviceImgUrl: '/s2.jpg',
          name: 'Medical Issues',
          status: 'Activate',
          service: '',
        },
        {
          id: '3',
          serviceImgUrl: '/s3.jpg',
          name: 'Daily News',
          status: 'Deactivate',
          service: '',
        },
        {
          id: '4',
          serviceImgUrl: '/s4.jpg',
          name: 'Public Poll',
          status: 'Deactivate',
          service: '',
        },
        {
          id: '5',
          serviceImgUrl: '/s5.jpg',
          name: 'Voters Summary ',
          status: 'Active',
          service: '',
        },
        {
          id: '6',
          serviceImgUrl: '/s6.jpg',
          name: 'Opinion Poll ',
          status: 'Active',
          service: '',
        },
      ]);
    }
  }, [productsLoading]);

  const dataFiltered = applyFilter({
    inputData: tableData,
    filters,
  });

  const canReset = !isEqual(defaultFilters, filters);

  const handleFilters = useCallback((name: string, value: IServiceTableFilterValue) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  const handleDeleteRow = useCallback(
    (id: string) => {
      const deleteRow = tableData.filter((row) => row.id !== id);

      enqueueSnackbar('Delete success!');

      setTableData(deleteRow);
    },
    [enqueueSnackbar, tableData]
  );

  const handleDeleteRows = useCallback(() => {
    const deleteRows = tableData.filter((row) => !selectedRowIds.includes(row.id));

    enqueueSnackbar('Delete success!');

    setTableData(deleteRows);
  }, [enqueueSnackbar, selectedRowIds, tableData]);

  // const handleEditRow = useCallback((row: IServiceItem) => {
  //   setCurrentEditRow(row);
  //   setEditModalOpen(true);
  // }, []);

  const handleEditRow = useCallback(
    (id: string) => {
      router.push(`${paths.dashboard.services.editService}/${id}`);
    },
    [router]
  );
  const handleViewRow = useCallback(
    (id: string) => {
      router.push(`${paths.dashboard.services.detailsService}/${id}`);
    },
    [router]
  );

  const columns: GridColDef[] = [
    {
      field: 'category',
      headerName: 'Category',
      filterable: false,
    },
    {
      field: 'name',
      headerName: 'Service Name',
      flex: 1,
      minWidth: 260,
      hideable: false,
      renderCell: (params) => <RenderCellName params={params} />,
    },

    {
      field: 'status',
      headerName: 'Status',
      width: 180,
      type: 'singleSelect',
      editable: true,
      valueOptions: STATUS_OPTIONS,
      renderCell: (params) => <RenderCellStatus params={params} />,
    },
    {
      type: 'actions',
      field: 'actions',
      headerName: ' Actions',
      align: 'right',
      headerAlign: 'right',
      width: 80,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      getActions: (params) => [
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:eye-bold" />}
          label="View"
          onClick={() => handleViewRow(params.row.id)}
        />,
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:pen-bold" />}
          label="Edit"
          onClick={() => handleEditRow(params.row.id)}
        />,
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:trash-bin-trash-bold" />}
          label="Delete"
          onClick={() => handleDeleteRow(params.row.id)}
          sx={{ color: 'error.main' }}
        />,
      ],
    },
  ];

  const getTogglableColumns = () =>
    columns
      .filter((column) => !HIDE_COLUMNS_TOGGLABLE.includes(column.field))
      .map((column) => column.field);
  return (
    <>
      <Container
        maxWidth={settings.themeStretch ? false : 'lg'}
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CustomBreadcrumbs
          heading="Services List"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            {
              name: 'Services-List',
              href: paths.dashboard.services.root,
            },
            { name: 'Services' },
          ]}
          sx={{
            mb: {
              xs: 3,
              md: 5,
            },
          }}
        />

        <Card
          sx={{
            height: { xs: 800, md: '100vh' },
            flexGrow: { md: 1 },
            display: { md: 'flex' },
            flexDirection: { md: 'column' },
          }}
        >
          <DataGrid
            checkboxSelection
            disableRowSelectionOnClick
            rows={dataFiltered}
            columns={columns}
            loading={productsLoading}
            getRowHeight={() => 'auto'}
            pageSizeOptions={[5, 10, 25]}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10 },
              },
            }}
            onRowSelectionModelChange={(newSelectionModel) => {
              setSelectedRowIds(newSelectionModel);
            }}
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
            slots={{
              toolbar: () => (
                <>
                  <GridToolbarContainer>
                    <InquiryTableToolbar
                      filters={filters}
                      onFilters={handleFilters}
                      ServiceOptions={SERVICE_OPTIONS}
                      stockOptions={[]}
                    />

                    <GridToolbarQuickFilter />

                    <Stack
                      spacing={1}
                      flexGrow={1}
                      direction="row"
                      alignItems="center"
                      justifyContent="flex-end"
                    >
                      {!!selectedRowIds.length && (
                        <Button
                          size="small"
                          color="error"
                          startIcon={<Iconify icon="solar:trash-bin-trash-bold" />}
                          onClick={confirmRows.onTrue}
                        >
                          Delete ({selectedRowIds.length})
                        </Button>
                      )}

                      <GridToolbarColumnsButton />
                      <GridToolbarFilterButton />
                      <GridToolbarExport />
                    </Stack>
                  </GridToolbarContainer>

                  {canReset && (
                    <InquiryTableFiltersResult
                      filters={filters}
                      onFilters={handleFilters}
                      onResetFilters={handleResetFilters}
                      results={dataFiltered.length}
                      sx={{ p: 2.5, pt: 0 }}
                    />
                  )}
                </>
              ),
              noRowsOverlay: () => <EmptyContent title="No Data" />,
              noResultsOverlay: () => <EmptyContent title="No results found" />,
            }}
            slotProps={{
              // columnsPanel: {
              //   getTogglableColumns,
              // },
            }}
          />
        </Card>
      </Container>

      <ConfirmDialog
        open={confirmRows.value}
        onClose={confirmRows.onFalse}
        title="Delete"
        content={
          <>
            Are you sure want to delete <strong> {selectedRowIds.length} </strong> items?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteRows();
              confirmRows.onFalse();
            }}
          >
            Delete
          </Button>
        }
      />
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter({
  inputData,
  filters,
}: {
  inputData: IServiceItem[];
  filters: IServiceTableFilters;
}) {
  const { services } = filters;

  if (services.length) {
    inputData = inputData.filter((product) => services.includes(product.service));
  }

  return inputData;
}
