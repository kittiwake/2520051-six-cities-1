import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/widgets/header/header';
import { Helmet } from 'react-helmet-async';
import { FormEvent, useRef, useState, MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import { loginAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../constant';
import { getAuthError, getAuthorizationStatus } from '../../store/user-process/selectors';

import '../../../public/css/error.css';
import { setCity } from '../../store/main-data/main-data';
import { getRandomCity } from '../../utils';

function LoginScreen() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const errorMessage = useAppSelector(getAuthError);
  const [errors, setErrors] = useState({ email: '', password: '' });

  if (authorizationStatus === AuthorizationStatus.Auth) {
    navigate(AppRoute.Main);
    return;
  }
  const city = getRandomCity();
  const handleButtonClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(setCity(city));
    navigate(AppRoute.Main);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!loginRef.current || !passwordRef.current) {
      return;
    }

    const email = loginRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{2,}$/;

    const newErrors = { email: '', password: '' };

    if (!emailPattern.test(email)) {
      newErrors.email = 'Введите корректный email';
    }

    if (!passwordPattern.test(password)) {
      newErrors.password = 'Пароль должен содержать хотя бы одну букву и одну цифру';
    }

    setErrors(newErrors);

    if (newErrors.email || newErrors.password) {
      return;
    }

    dispatch(loginAction({ login: email, password }))
      .then((actionResult) => {
        if (loginAction.fulfilled.match(actionResult)) {
          navigate(AppRoute.Main);
        }
      });
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Login</title>
      </Helmet>

      <Header navbar={false} />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#" method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className={`login__input form__input ${errors.email ? 'input-error' : ''}`}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>

              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className={`login__input form__input ${errors.password ? 'input-error' : ''}`}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                {errors.password && <p className="error-message">{errors.password}</p>}
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}

              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to="#" className="locations__item-link"
                onClick={handleButtonClick}
              >
                <span>{city.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
