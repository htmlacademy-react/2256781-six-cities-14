type TMark = {
  className: string;
  classNameActive: string;
  image: {
    className: string;
    width: string;
    height: string;
  };
}

type TCustomizationCard = {
  className: string;
  width: number;
  height: number;
  mark: TMark;
}

export { type TCustomizationCard };
