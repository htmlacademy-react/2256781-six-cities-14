import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './not-found-page.module.scss';
import { AppRoute } from '../../const.ts';

function NotFoundPage(): JSX.Element {
  return (
    <div className={`page ${styles['page--notFoundPage']}`}>
      <Helmet>
        <title>6 Cities - Not found page</title>
      </Helmet>
      <h1 className={styles.page__title}>404. Page not found</h1>
      <p className={styles.page__text}>
        Return to the{' '}
        <Link to={AppRoute.Main} className={styles.page__link}>
          main page
        </Link>
      </p>
    </div>
  );
}

export { NotFoundPage };
