// ----------------------------------------------------------------------

export type ITransactionFilterValue = string | string[] | number | number[];

// ----------------------------------------------------------------------

export type ITransactionItem = {
  includes(service: string): unknown;
  id: string;
  name: string;
  email: string;
  amounts: string;
  paymentMode: string;
  payment: string;
  status: string;
  transactions: string;
};

export type ITransactionTableFilterValue = string | string[];

export type ITransactionTableFilters = {
  transactions: string[];
};
