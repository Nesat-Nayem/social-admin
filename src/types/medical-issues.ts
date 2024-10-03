// ----------------------------------------------------------------------

export type IMedicalFilterValue = string | string[] | number | number[];

// ----------------------------------------------------------------------

export type IMedicalItem = {
  includes(service: string): unknown;
  id: string;
  name: string;
  userImgUrl: string;
  email: string;
  publishedDate: Date;
  title: string;
  postImg: string;
  location: string;
  views: string;
  likes: string;
  comments: string;
  share: string;
  service: string;
};

export type IMedicalTableFilterValue = string | string[];

export type IMedicalTableFilters = {
  services: string[];
};
