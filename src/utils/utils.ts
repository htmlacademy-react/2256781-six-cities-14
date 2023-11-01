import * as dayjs from 'dayjs';
import { MAX_RATING } from '../const';

const getStringSuperscript = (str: string): string =>
  str.length > 0 ? str.charAt(0).toUpperCase() + str.slice(1) : '';

const calculateRating = (rating: number): string =>
  `${(rating * 100) / MAX_RATING}%`;


const formatDate = (date: string, template: string): string =>
  date ? dayjs(date).format(template) : '';

export {
  getStringSuperscript,
  calculateRating,
  formatDate,
};
