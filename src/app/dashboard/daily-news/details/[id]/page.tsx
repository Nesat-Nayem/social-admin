// ----------------------------------------------------------------------

import DailyNewsDetailsView from 'src/sections/dailyNews/details/news-details';

export const metadata = {
  title: 'Dashboard: Daily News Details',
};

// ----------------------------------------------------------------------

type Props = {
  params: { id: string };
};
export default function InquiryDetailsPage({ params }: Props) {
  const { id } = params;

  return <DailyNewsDetailsView id={id} />;
}
