// ----------------------------------------------------------------------

export type IInquirysFilterValue = string | string[] | number | number[];

// ----------------------------------------------------------------------

export type IInquiryItem = {
  includes(service: string): unknown;
  id: string;
  name: string;
  userImgUrl: string;
  email: string;
  phone: string;
  inquiryDate: Date;
  subscription: string;
  service: string;
};

export type IInquiryTableFilterValue = string | string[];

export type IInquiryTableFilters = {
  services: string[];
};
