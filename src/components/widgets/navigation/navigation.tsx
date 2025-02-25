import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../constant';
import { MouseEvent } from 'react';
import { logoutAction } from '../../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';


function Navigation() {

  const dispatch = useAppDispatch();

  const userInfo = useAppSelector((state) => state.user);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const countFavorites = useAppSelector((state) => state.countFavorites);

  const handleClickOut = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    dispatch(logoutAction());
  };

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

export default Navigation;
