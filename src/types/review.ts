import { TUser } from '.';

type TReview = {
  id: number;
  user: TUser;
  rating: number;
  comment: string;
  date: string;
}

type TReviews = TReview[];

export { type TReviews, type TReview };
