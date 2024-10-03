import { useMemo } from 'react';

import { paths } from 'src/routes/paths';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  social: icon('ic_chat'),

  user: icon('ic_user'),

  banking: icon('ic_banking'),
  medical: icon('ic_kanban'),
  dailyNews: icon('ic_menu_item'),
  scheme: icon('ic_tour'),

  lock: icon('ic_lock'),

  order: icon('ic_order'),
  label: icon('ic_label'),

  invoice: icon('ic_invoice'),

  calendar: icon('ic_calendar'),

  menuItem: icon('ic_menu_item'),

  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
  blog: icon('ic_blog'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const data = useMemo(
    () => [
      // OVERVIEW
      {
        subheader: 'main',
        items: [
          { title: 'app', path: paths.dashboard.root, icon: ICONS.dashboard },
          { title: 'social Issues', path: paths.dashboard.socialIssues.root, icon: ICONS.social },
          {
            title: 'Medical Issues',
            path: paths.dashboard.medicalIssues.root,
            icon: ICONS.medical,
          },
          {
            title: 'Daily News',
            path: paths.dashboard.DailyNews.root,
            icon: ICONS.dailyNews,
          },
          {
            title: 'Legislative Updates',
            path: paths.dashboard.LegislativeUpdates.root,
            icon: ICONS.banking,
            children: [
              { title: 'Legislative List', path: paths.dashboard.LegislativeUpdates.root },
              {
                title: 'Create Legislative',
                path: paths.dashboard.LegislativeUpdates.createLegislative,
              },
            ],
          },

          { title: 'Public Poll', path: paths.dashboard.publicPoll.root, icon: ICONS.user },

          {
            title: 'Voters Summary',
            path: paths.dashboard.voters.root,
            icon: ICONS.analytics,
            children: [
              { title: 'Voters List', path: paths.dashboard.voters.root },
              { title: 'Create Voters', path: paths.dashboard.voters.createVoters },
            ],
          },

          { title: 'Opinion Poll', path: paths.dashboard.opinionPoll.root, icon: ICONS.blog },

          {
            title: 'Schemes Updates',
            path: paths.dashboard.schemesUpdates.root,
            icon: ICONS.scheme,
            children: [
              { title: 'Schemes List', path: paths.dashboard.schemesUpdates.root },
              {
                title: 'Create Schemes',
                path: paths.dashboard.schemesUpdates.createScheme,
              },
            ],
          },

          {
            title: 'user',
            path: paths.dashboard.user.root,
            icon: ICONS.user,
            children: [{ title: 'User List', path: paths.dashboard.user.root }],
          },
        ],
      },

      // MANAGEMENT
      {
        subheader: 'management',
        items: [
          // {
          //   title: 'user',
          //   path: paths.dashboard.user.root,
          //   icon: ICONS.user,
          //   children: [
          //     { title: 'List', path: paths.dashboard.user.root },
          //     { title: 'Create', path: paths.dashboard.user.createUser },
          //   ],
          // },
          {
            title: 'service',
            path: paths.dashboard.services.root,
            icon: ICONS.blog,
            children: [
              { title: 'Service List', path: paths.dashboard.services.root },
              { title: 'Create service', path: paths.dashboard.services.createService },
            ],
          },
          {
            title: 'Settings',
            path: paths.dashboard.settings.root,
            icon: ICONS.menuItem,
            children: [
              { title: 'Add Account', path: paths.dashboard.settings.root },
              { title: 'Switch Account', path: paths.dashboard.settings.switchAccount },
              { title: 'Logout', path: paths.auth.jwt.login },
            ],
          },
        ],
      },
    ],
    []
  );

  return data;
}
