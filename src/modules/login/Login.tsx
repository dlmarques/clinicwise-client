import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  loginWithRedirect();
  return <div>Loading...</div>;
};

export default Login;
