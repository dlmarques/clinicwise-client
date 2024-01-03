import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../../layout/screens/loading/Loading';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  loginWithRedirect();
  return <Loading />;
};

export default Login;
