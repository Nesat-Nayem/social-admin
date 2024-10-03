import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const _votersSummaryList = [...Array(4)].map((_, index) => ({
  id: _mock.id(index),
  votingName: _mock.votingName(index),
  votingLocations: _mock.votingLocations(index),
  votingRegions: _mock.votingRegions(index),
  votingAgeGroups: _mock.votingAgeGroups(index),
  votingCount: _mock.votingCount(index),
  votingState: _mock.votingState(index),
  votingDistrict: _mock.votingDistrict(index),
  votingConstituency: _mock.votingConstituency(index),
  votingTotalVoting: _mock.votingTotalVoting(index),
  votingPerct: _mock.votingPerct(index),
  votingImg: _mock.image.avatar(index),
}));
