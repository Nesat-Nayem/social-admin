// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------
export const paths = {
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      register: `${ROOTS.AUTH}/jwt/register`,
      forgotPassword: `${ROOTS.AUTH}/jwt/forgotPassword`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,

    user: {
      root: `${ROOTS.DASHBOARD}/users`,
      createUser: `${ROOTS.DASHBOARD}/users/create-user`,
    },
    services: {
      root: `${ROOTS.DASHBOARD}/services`,
      createService: `${ROOTS.DASHBOARD}/services/create-services`,
      editService: `${ROOTS.DASHBOARD}/services/edit`,
      detailsService: `${ROOTS.DASHBOARD}/services/details`,
    },

    transaction: {
      root: `${ROOTS.DASHBOARD}/transaction`,
      salesDetails: `${ROOTS.DASHBOARD}/transaction/details`,
    },

    socialIssues: {
      root: `${ROOTS.DASHBOARD}/social-issues`,
      details: `${ROOTS.DASHBOARD}/social-issues/details`,
    },

    medicalIssues: {
      root: `${ROOTS.DASHBOARD}/medical-issues`,
      details: `${ROOTS.DASHBOARD}/medical-issues/details`,
    },

    DailyNews: {
      root: `${ROOTS.DASHBOARD}/daily-news`,
      details: `${ROOTS.DASHBOARD}/daily-news/details`,
    },

    LegislativeUpdates: {
      root: `${ROOTS.DASHBOARD}/legislative-updates`,
      createLegislative: `${ROOTS.DASHBOARD}/legislative-updates/create-legislative`,
    },

    publicPoll: {
      root: `${ROOTS.DASHBOARD}/public-poll`,
      details: `${ROOTS.DASHBOARD}/public-poll/details`,
    },

    voters: {
      root: `${ROOTS.DASHBOARD}/voters-summary`,
      createVoters: `${ROOTS.DASHBOARD}/voters-summary/create-voters`,
    },

    opinionPoll: {
      root: `${ROOTS.DASHBOARD}/opinion-poll`,
      details: `${ROOTS.DASHBOARD}/opinion-poll/details`,
    },

    schemesUpdates: {
      root: `${ROOTS.DASHBOARD}/schemes-list`,
      createScheme: `${ROOTS.DASHBOARD}/schemes-list/create-schemes`,
    },

    settings: {
      root: `${ROOTS.DASHBOARD}/settings/add-account`,
      switchAccount: `${ROOTS.DASHBOARD}/settings/switch-account`,
      logout: `${ROOTS.AUTH}/jwt/login`,
    },
  },
};
