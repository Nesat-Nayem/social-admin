// ----------------------------------------------------------------------

export type ISalesFilterValue = string | string[] | number | number[];

// ----------------------------------------------------------------------

export type ISalesItem = {
  includes(service: string): unknown;
  id: string;
  inquiryID: string;
  salesDate: Date;
  studentName: string;
  zone: string;
  amounts: string;
  totalSales: string;
  sales: string;
};

export type ISalesTableFilterValue = string | string[];

export type ISalesTableFilters = {
  sales: string[];
};
