import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import WebDefault from './layout/screens/web-default/WebDefault';
import { useDispatch } from 'react-redux';
import { userActions } from './store/user/user';
import Loading from './layout/screens/loading/Loading';
import { login } from './services/auth-service';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router';
import { jwtDecode } from 'jwt-decode';
import { ROLES } from './utils/roles';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { getAccessTokenSilently, user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  //set theme
  useEffect(() => {
    setTimeout(() => {
      const theme = localStorage.getItem('theme');
      if (theme) {
        dispatch(userActions.setTheme(theme));
        document.documentElement.setAttribute('data-theme', theme);
      } else {
        window.matchMedia('(prefers-color-scheme: dark)')
          ? dispatch(userActions.setTheme('dark'))
          : dispatch(userActions.setTheme('light'));

        document.documentElement.setAttribute(
          'data-theme',
          window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light'
        );
      }
      setLoading(false);
    }, 3000);
  }, []);

  //login user
  useEffect(() => {
    getAccessTokenSilently().then((value: string) => {
      if (user?.nickname && user.email) {
        login(
          {
            name: user.nickname,
            email: user.email,
          },
          value
        )
          .then(response => {
            const info: { [key: string]: string } = jwtDecode(value);
            dispatch(
              userActions.loginUser({
                name: response.data.data.name,
                email: response.data.data.email,
                role: ROLES[
                  info[
                    import.meta.env.VITE_AUTH0_NAMESPACE_ROLES
                  ][0] as keyof typeof ROLES
                ],
              })
            );
          })
          .catch(err => {
            navigate('/ops', { replace: true });
          });
      }
    });
  }, [user, isAuthenticated]);

  return (
    <>
      <div className={styles.dashboard}>
        {loading ? <Loading /> : <WebDefault />}
      </div>
    </>
  );
}

export default App;
