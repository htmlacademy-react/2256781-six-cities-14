import * as dayjs from 'dayjs';

const getStringSuperscript = (str: string): string =>
  str.length > 0 ? str.charAt(0).toUpperCase() + str.slice(1) : '';

const formatDate = (date: string, template: string): string =>
  date ? dayjs(date).format(template) : '';

export {
  getStringSuperscript,
  formatDate,
};
