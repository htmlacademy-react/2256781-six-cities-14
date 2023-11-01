import { MapType } from '../../const';

type TMapProps = {
  type?: MapType;
};

function Map({ type = MapType.City }: TMapProps): JSX.Element {
  return <section className={`${type} map`}></section>;
}

export { Map };
