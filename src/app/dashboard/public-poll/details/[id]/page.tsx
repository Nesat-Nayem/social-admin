// ----------------------------------------------------------------------

import PublicPollDetailsView from 'src/sections/publicPoll/details/public-details';

export const metadata = {
  title: 'Dashboard: Public Poll ',
};

// ----------------------------------------------------------------------

type Props = {
  params: { id: string };
};
export default function InquiryDetailsPage({ params }: Props) {
  const { id } = params;

  return <PublicPollDetailsView id={id} />;
}
