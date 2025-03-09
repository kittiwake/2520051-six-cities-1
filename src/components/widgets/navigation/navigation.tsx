import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../constant';
import { memo, MouseEvent, useCallback } from 'react';
import { logoutAction } from '../../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus, getUser } from '../../../store/user-process/selectors';
import { getCountFavorites } from '../../../store/main-data/selectors';


function DemoNavigation():JSX.Element {

  const dispatch = useAppDispatch();

  const userInfo = useAppSelector(getUser);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const countFavorites = useAppSelector(getCountFavorites);

  const handleClickOut = useCallback((evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    dispatch(logoutAction());
  }, [dispatch]);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
              <div className="header__avatar-wrapper user__avatar-wrapper"
                style={{ backgroundImage: `url(${userInfo?.avatarUrl || '../img/avatar.svg'})` }}
              >
                <img src="" alt="" />
              </div>
              <span className="header__user-name user__name">{userInfo?.email}</span>
              <span className="header__favorite-count">{countFavorites}</span>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="#" className="header__nav-link" onClick={handleClickOut}>
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

const Navigation = memo(DemoNavigation);
export default Navigation;
