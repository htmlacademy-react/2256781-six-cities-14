import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '..';
import { postAsyncFavorite, selectIsAuthStatus } from '../../store';
import { AppRoute } from '../../const';
import { TOfferId } from '../../types';

function useFavoritesMark(id: TOfferId, status: boolean) {
  const isAuth = useAppSelector(selectIsAuthStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const changeFavoritesMark = () => {
    if (isAuth) {
      dispatch(postAsyncFavorite({ offerId: id, status: Number(!status) }));
    } else {
      navigate(AppRoute.Login);
    }
  };

  return changeFavoritesMark;
}

export { useFavoritesMark };
