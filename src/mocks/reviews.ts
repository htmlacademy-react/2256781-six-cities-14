import { TReviews } from '../types';

const reviewsOne: TReviews = [
  {
    id: 1,
    user: {
      isPro: false,
      name: 'Kendall',
      avatarUrl: 'https://14.react.pages.academy/static/avatar/6.jpg'
    },
    rating: 4,
    comment: 'Home is amazing. It is like staying in a museum.The rooms, furnishings and artworks are incredible.The views of My Vesuvius',
    date: '2023-10-02T09:23:20.316Z'
  }
];

const reviewsTwo: TReviews = [
  {
    id: 1,
    user: {
      isPro: true,
      name: 'Corey',
      avatarUrl: 'https://14.react.pages.academy/static/avatar/5.jpg'
    },
    rating: 4,
    comment: 'Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.',
    date: '2023-09-09T09:23:20.316Z'
  },
  {
    id: 2,
    user: {
      isPro: false,
      name: 'Zak',
      avatarUrl: 'https://14.react.pages.academy/static/avatar/4.jpg'
    },
    rating: 3,
    comment: 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    date: '2023-09-09T09:23:20.316Z'
  }
];

const reviewsThird: TReviews = [
  {
    id: 1,
    user: {
      isPro: false,
      name: 'Zak',
      avatarUrl: 'https://14.react.pages.academy/static/avatar/4.jpg'
    },
    rating: 2,
    comment: 'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
    date: '2023-09-30T09:23:20.316Z'
  },
  {
    id: 2,
    user: {
      isPro: false,
      name: 'Kendall',
      avatarUrl: 'https://14.react.pages.academy/static/avatar/6.jpg'
    },
    rating: 3,
    comment: 'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
    date: '2023-09-30T09:23:20.316Z'
  }
];

const reviewsStorage = new Map<number, TReviews>();
reviewsStorage.set(1, reviewsOne);
reviewsStorage.set(2, reviewsTwo);
reviewsStorage.set(3, reviewsThird);

function getReviewsById(id: number): TReviews | undefined {
  return reviewsStorage.get(id);
}

const getRandomInteger = (a: number, b: number): number => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

function getRandomReview() {
  const id = getRandomInteger(1, 3);
  return reviewsStorage.get(id) ?? reviewsOne;
}
export { getReviewsById, getRandomReview };
