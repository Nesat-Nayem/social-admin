import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const _schemesList = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  img: _mock.image.company(index),
  title: _mock.schemeTitle(index),
  desc: _mock.schemeDesc(index),
  publishedDate: new Date(_mock.schemePublished(index)).toDateString(), // Ensure this returns a Date object
}));
