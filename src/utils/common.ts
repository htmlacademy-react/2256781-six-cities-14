import * as dayjs from 'dayjs';

function getStringSuperscript(str: string): string {
  return str.length > 0 ? str.charAt(0).toUpperCase() + str.slice(1) : '';
}

function formatDate(date: string, template: string): string {
  return date ? dayjs(date).format(template) : '';
}

export {
  getStringSuperscript,
  formatDate,
};
