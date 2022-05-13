import { Prisma } from '@prisma/client';

const carData: Prisma.CarCreateInput[] = [
  {
    name: 'BMW Série 2',
    model: 'Gran Coupé',
    year: 2021,
    price: 300950.99,
    url_image: 'not_found',
  },
  {
    name: 'BMW Série 3',
    model: 'Sedã',
    year: 2022,
    price: 296950.99,
    url_image: 'not_found',
  },
  {
    name: 'BMW Série 4',
    model: 'Cabrio',
    year: 2023,
    price: 604950.99,
    url_image: 'not_found',
  },
];

export default carData;
