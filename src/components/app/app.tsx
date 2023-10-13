import Main from '../../pages/main/main';

type AppProps = {
  quantity: number;
};

function App({ quantity }: AppProps): JSX.Element {
  return <Main quantity={quantity} />;
}

export default App;
