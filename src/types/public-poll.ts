// ----------------------------------------------------------------------

export type IPublicFilterValue = string | string[] | number | number[];

// ----------------------------------------------------------------------

export type IPublicItem = {
  includes(service: string): unknown;
  id: string;
  question: string;
  yes: string;
  no: string;
  publishedDate: Date;
  service: string;
};

export type IPublicTableFilterValue = string | string[];

export type IPublicTableFilters = {
  services: string[];
};
