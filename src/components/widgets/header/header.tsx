import Navigation from '../navigation/navigation';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../constant';
import { memo } from 'react';


function Header({ navbar = true }: { navbar?: boolean }): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Main} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {navbar && <Navigation />}
        </div>
      </div>
    </header>
  );
}

const MemorizedHeader = memo(Header);
export default MemorizedHeader;
