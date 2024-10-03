import { sub } from 'date-fns';
import { IVotersItem } from 'src/types/voters';
import { ASSETS_API } from 'src/config-global';

import {
  _id,
  _dob,
  _ages,
  _roles,
  _prices,
  _emails,
  _gender,
  _ratings,
  _nativeS,
  _nativeM,
  _nativeL,
  _percents,
  _booleans,
  _ministry,
  _sentences,
  _lastNames,
  _fullNames,
  _tourNames,
  _taskNames,
  _votersImg,
  _postTitles,
  _firstNames,
  _passedInLs,
  _passedInRs,
  _fullAddress,
  _votersNames,
  _votersState,
  _schemesDesc,
  _companyNames,
  _productNames,
  _descriptions,
  _phoneNumbers,
  _schemesTitle,
  _votersRigions,
  _votersDistrict,
  _votersLocations,
  _votersAgeGroups,
  _introducedInLsRS,
  _schemesPublished,
  _legislativeTitles,
  _votersVotingCount,
  _votersTotalVoting,
  _votersVotingPerct,
  _votersConstituency,
} from './assets';


// ----------------------------------------------------------------------

export const _mock = {
  id: (index: number) => _id[index],
  time: (index: number) => sub(new Date(), { days: index, hours: index }),
  boolean: (index: number) => _booleans[index],
  role: (index: number) => _roles[index],
  // Text
  taskNames: (index: number) => _taskNames[index],

  // legislative

  postTitle: (index: number) => _postTitles[index],
  legislativeTitle: (index: number) => _legislativeTitles[index],
  ministry: (index: number) => _ministry[index],
  introducedInLsRS: (index: number) => _introducedInLsRS[index],
  passedInLs: (index: number) => _passedInLs[index],
  passedInRs: (index: number) => _passedInRs[index],

  // voting

  votingName: (index: number) => _votersNames[index],
  votingLocations: (index: number) => _votersLocations[index],
  votingRegions: (index: number) => _votersRigions[index],
  votingAgeGroups: (index: number) => _votersAgeGroups[index],
  votingCount: (index: number) => _votersVotingCount[index],
  votingState: (index: number) => _votersState[index],
  votingDistrict: (index: number) => _votersDistrict[index],
  votingConstituency: (index: number) => _votersConstituency[index],
  votingTotalVoting: (index: number) => _votersTotalVoting[index],
  votingPerct: (index: number) => _votersVotingPerct[index],
  votingImg: (index: number) => _votersImg[index],

  // schemes
  schemeTitle: (index: number) => _schemesTitle[index],
  schemeDesc: (index: number) => _schemesDesc[index],
  schemePublished: (index: number) => _schemesPublished[index],

  // job
  tourName: (index: number) => _tourNames[index],
  productName: (index: number) => _productNames[index],
  sentence: (index: number) => _sentences[index],
  description: (index: number) => _descriptions[index],
  // Contact
  email: (index: number) => _emails[index],
  phoneNumber: (index: number) => _phoneNumbers[index],
  fullAddress: (index: number) => _fullAddress[index],
  // Name
  firstName: (index: number) => _firstNames[index],
  gender: (index: number) => _gender[index],
  dob: (index: number) => _dob[index],
  lastName: (index: number) => _lastNames[index],
  fullName: (index: number) => _fullNames[index],
  companyName: (index: number) => _companyNames[index],
  // Number
  number: {
    percent: (index: number) => _percents[index],
    rating: (index: number) => _ratings[index],
    age: (index: number) => _ages[index],
    price: (index: number) => _prices[index],
    nativeS: (index: number) => _nativeS[index],
    nativeM: (index: number) => _nativeM[index],
    nativeL: (index: number) => _nativeL[index],
  },
  // Image
  image: {
    cover: (index: number) => `${ASSETS_API}/assets/images/cover/cover_${index + 1}.jpg`,
    avatar: (index: number) => `${ASSETS_API}/assets/images/avatar/avatar_${index + 1}.jpg`,
    travel: (index: number) => `${ASSETS_API}/assets/images/travel/travel_${index + 1}.jpg`,
    company: (index: number) => `${ASSETS_API}/assets/images/company/company_${index + 1}.png`,
    product: (index: number) => `${ASSETS_API}/assets/images/m_product/product_${index + 1}.jpg`,
    portrait: (index: number) => `${ASSETS_API}/assets/images/portrait/portrait_${index + 1}.jpg`,
  },
};

export const _votersSummaryList: IVotersItem[] = [
  {
    id: _mock.id(0),
    votingName: _mock.votingName(0),
    votingLocations: _mock.votingLocations(0),
    votingRegions: _mock.votingRegions(0),
    votingAgeGroups: _mock.votingAgeGroups(0),
    votingCount: _mock.votingCount(0),
    votingState: _mock.votingState(0),
    votingDistrict: _mock.votingDistrict(0),
    votingConstituency: _mock.votingConstituency(0),
    votingTotalVoting: _mock.votingTotalVoting(0),
    votingPerct: _mock.votingPerct(0),
    votingImg: _mock.votingImg(0),
    // Add these if they're needed
    includes: [],
    name: '',
    service: '',
    status: '',
  },
  // ... other items
];
