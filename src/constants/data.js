
import images from './images';

const wines = [
  {
    title: 'Sadhya',
    price: '$56',
    tags: '650cal  | 1 plate',
  },
  {
    title: 'Biriyani',
    price: '$59',
    tags: '600cal | 1 plate',
  },
  {
    title: 'Kaapa and Fish curry',
    price: '$44',
    tags: ' 500cal | 1 plate',
  },
  {
    title: 'Portta and beef roast',
    price: '$31',
    tags: '500cal | 2 nos.',
  },
  {
    title: 'Idiyappam and kadala',
    price: '$26',
    tags: '300cal | 3 nos.',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award,
    title: 'Bib Gourmond',
    subtitle: 'Bib Gourmond of 2021.',
  },
  {
    imgUrl: images.award,
    title: 'Rising Star',
    subtitle: 'Rising star of 2020.',
  },
  {
    imgUrl: images.award,
    title: 'AA Hospitality',
    subtitle: 'AA Hospitality in 2021.',
  },
  {
    imgUrl: images.award,
    title: 'Outstanding Chef',
    subtitle: 'Outstanding Chef of the year.',
  },
];

export default { wines, cocktails, awards };
