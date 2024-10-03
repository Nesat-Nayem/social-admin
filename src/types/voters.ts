// ----------------------------------------------------------------------

export type IVotersFilterValue = string | string[] | number | number[];

// ----------------------------------------------------------------------

export type IVotersItem = {
  includes(service: string): unknown;
  id: string;
  name: string;
  votingName: string;
  votingImg: string;
  votingLocations: string;
  votingRegions: string;
  votingAgeGroups: string;
  votingCount: string;
  votingState: string;
  votingDistrict: string;
  votingConstituency: string;
  votingTotalVoting: string;
  votingPerct: string;
  service: string;
  status: string;
};

export type IVotersTableFilterValue = string | string[];

export type IVotersTableFilters = {
  services: string[];
};
