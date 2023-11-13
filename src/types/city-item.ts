import { TCityName } from '.';

type TCityItem = {
  city: TCityName;
  active: boolean;
};

type TCityItems = TCityItem[];

export { type TCityItems, type TCityItem };
