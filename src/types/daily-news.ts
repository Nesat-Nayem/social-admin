// ----------------------------------------------------------------------

export type INewsFilterValue = string | string[] | number | number[];

// ----------------------------------------------------------------------

export type INewsItem = {
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

export type INewsTableFilterValue = string | string[];

export type INewsTableFilters = {
  services: string[];
};
