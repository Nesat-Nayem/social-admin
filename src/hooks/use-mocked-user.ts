import { _mock } from 'src/_mock';

export function useMockedUser() {
  const user = {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    displayName: 'Suraj Jamdade',
    email: 'suraj@atis.com',
    password: 'demo1234',
    photoURL: _mock.image.avatar(24),
    phoneNumber: '+91 9090909090',
    country: 'India',
    address: '90210 Broadway Pune',
    state: 'Maharashtra',
    city: 'Pune',
    zipCode: '12121',
    about: 'Praesent turpis. Phasellus viverra nulla ut metus varius laoreet. Phasellus tempus.',
    role: 'admin',
    isPublic: true,
  };

  return { user };
}
