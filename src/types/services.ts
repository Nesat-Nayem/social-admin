import { CustomFile } from 'src/components/upload';

// ----------------------------------------------------------------------

export type IServiceTableFilterValue = string | string[];

export type IServiceItem = {
  id: string;
  name: string;
  status: string;
  serviceImgUrl: CustomFile | string | null;
  service: string;
};

export type IServiceTableFilters = {
  services: string[];
};
