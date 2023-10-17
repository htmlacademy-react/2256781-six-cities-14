import Main from '../../pages/main/main';

type AppProps = {
  quantity: number;
  offerCount: number;
};

function App({ quantity, offerCount }: AppProps): JSX.Element {
  return <Main quantity={quantity} offerCount={offerCount}/>;
}

export default App;
