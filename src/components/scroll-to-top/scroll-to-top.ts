import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop(): null {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(100, 100);
  }, [pathname]);

  return null;
}

export { ScrollToTop };
