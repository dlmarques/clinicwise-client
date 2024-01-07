import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import WebDefault from './layout/screens/web-default/WebDefault';
import { useDispatch } from 'react-redux';
import { userActions } from './store/user/user';
import Loading from './layout/screens/loading/Loading';
import { login } from './services/auth-service';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { user } = useAuth0();
  debugger;
  /*   const loginUser = () => {
    const { data, error } = login();

    if (data !== null) {
      debugger;
    } else if (error !== null) {
    } else {
    }
  }; */

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

  useEffect(() => console.log(user), []);

  return (
    <>
      <div className={styles.dashboard}>
        {loading ? <Loading /> : <WebDefault />}
      </div>
    </>
  );
}

export default App;
