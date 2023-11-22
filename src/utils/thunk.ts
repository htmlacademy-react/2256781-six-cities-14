function replaceOfferId(originalValue: string, offerId: string): string {
  const pattern = /{offerId}/g;
  return originalValue.replace(pattern, offerId);
}

export { replaceOfferId };
