import * as dayjs from 'dayjs';
import { MAX_RATING } from '../const';
import { CITIES } from '../const';
import { TCityName } from '../types';

const getStringSuperscript = (str: string): string =>
  str.length > 0 ? str.charAt(0).toUpperCase() + str.slice(1) : '';

const calculateRating = (rating: number): string =>
  `${(rating * 100) / MAX_RATING}%`;


const formatDate = (date: string, template: string): string =>
  date ? dayjs(date).format(template) : '';

const getActiveCityByDefault = (): TCityName => CITIES.find((city) => city.active === true)?.city ?? 'Paris';

export {
  getStringSuperscript,
  getActiveCityByDefault,
  calculateRating,
  formatDate,
};
