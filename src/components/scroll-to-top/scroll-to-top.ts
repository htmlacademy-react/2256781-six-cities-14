import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop(props: { children: JSX.Element }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(100, 100);
  }, [pathname]);

  return props.children;
}

export { ScrollToTop };
