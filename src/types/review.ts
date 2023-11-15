import { TUser } from '.';

type TReview = {
  id: string;
  user: TUser;
  rating: number;
  comment: string;
  date: string;
}

type TReviews = TReview[];

type TReviewData = Omit<TReview, 'user' | 'date'>;

export { type TReviews, type TReview, type TReviewData };
