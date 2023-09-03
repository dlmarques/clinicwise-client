import { useAuth0 } from '@auth0/auth0-react';
import { Spinner } from '@chakra-ui/react';
import styles from './login.module.scss';
import { ReactComponent as Logo } from '../../assets/logo/Main.svg';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  loginWithRedirect();
  return (
    <div className={styles.loading}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <Spinner size="xl" />
    </div>
  );
};

export default Login;
