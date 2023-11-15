type TButtonFavorite = {
  className: string;
  span: string;
}

type TCustomizationCard = {
  className: string;
  width: number;
  height: number;
  buttonFavorite: TButtonFavorite;
}

export { type TCustomizationCard };
