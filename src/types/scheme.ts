// ----------------------------------------------------------------------

export type ISchemeTableFilterValue = string | string[];

export type ISchemeTableFilters = {
  name: string;
  ministry: string[];
};

// ----------------------------------------------------------------------
export type ISchemeItem = {
  id: string;
  img: string;
  title: string;
  desc: string;
  publishedDate: Date;
  // location: string;
};
