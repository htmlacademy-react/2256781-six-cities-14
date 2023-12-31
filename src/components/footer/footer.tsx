import { Logo } from '..';

function Footer(): JSX.Element {
  return (
    <footer className="footer container" data-testid="footer-container">
      <Logo width={64} height={33} />
    </footer>
  );
}

export { Footer };
