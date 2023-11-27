import { TOfferId } from '../types';

type TUri = string;

function replaceURI(uri: TUri, offerId: TOfferId, status: string = ''): TUri {
  const patternId = /{offerId}/g;
  const patternStatus = /{status}/g;

  return uri.replace(patternId, offerId)
    .replace(patternStatus, status);
}

export { replaceURI };
