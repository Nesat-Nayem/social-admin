// ----------------------------------------------------------------------

import MedicalIssueDetailsView from 'src/sections/medicalIssues/details/medical-details';

export const metadata = {
  title: 'Dashboard: Medical Issue',
};

// ----------------------------------------------------------------------

type Props = {
  params: { id: string };
};
export default function InquiryDetailsPage({ params }: Props) {
  const { id } = params;

  return <MedicalIssueDetailsView id={id} />;
}
